# 逐段精读：`Tool.ts -> tools.ts -> query.ts`

这份文档按“先协议，再注册，再主循环”的顺序带你读第二课的关键文件。

---

## 一、`src/Tool.ts`

### 第一眼应该看什么

不要一上来深挖所有类型，而要先抓 3 个核心对象：

- `ToolPermissionContext`
- `ToolUseContext`
- 与消息 / progress / AppState 交互相关的字段

---

### 1. `ToolPermissionContext`

它包括：

- `mode`
- `additionalWorkingDirectories`
- `alwaysAllowRules`
- `alwaysDenyRules`
- `alwaysAskRules`
- `isBypassPermissionsModeAvailable`
- 若干 auto mode / plan mode 相关字段

### 这说明什么

说明权限在这里不是 UI 后置确认，而是工具运行边界的一部分。

### 为什么这个设计重要

因为如果权限系统只是外围弹窗，工具层就无法真正感知：

- 当前允许什么
- 当前要避免什么
- 当前是否能自动继续

---

### 2. `ToolUseContext`

这是第二课最关键的类型之一。

它包含的信息大致可以分成几组：

#### A. 会话与执行上下文

- `options.commands`
- `options.tools`
- `mainLoopModel`
- `thinkingConfig`
- `isNonInteractiveSession`
- `agentDefinitions`

#### B. 状态读写能力

- `getAppState()`
- `setAppState(...)`
- `setAppStateForTasks(...)`

#### C. UI 与通知能力

- `setToolJSX`
- `addNotification`
- `appendSystemMessage`
- `sendOSNotification`
- `setStreamMode`
- `openMessageSelector`

#### D. agent / 资源 / 环境能力

- `mcpClients`
- `mcpResources`
- `agentId`
- `agentType`
- `messages`
- file/glob limits

### 为什么它这么重

回答：
因为这里的工具已经不是“纯计算函数”，而是会修改会话状态、驱动 UI、发通知、影响下一轮 query 的运行时参与者。

### 应该如何理解这种“重”

不要立刻把它判断成设计失败。它更像是在暴露一个事实：

这个系统里，工具执行天然跨越多个边界。

---

## 二、`src/tools.ts`

### 先看 `getAllBaseTools()`

这个函数是工具真源。

它不是简单列一个工具名数组，而是定义：

- 系统理论上的全量基础工具集合
- 哪些工具受 feature gate 控制
- 哪些工具受环境变量控制
- 哪些工具是特定模式下才引入

### 这里最重要的理解

工具池不是静态的。

工具池会随下面这些条件变化：

- `process.env.USER_TYPE`
- feature flags
- REPL mode
- simple mode
- worktree mode
- LSP enablement
- agent swarms enablement

### 为什么这很关键

因为在 agent 系统里，“模型能看到什么工具”本身就是运行时语义的一部分。

---

### 再看 `filterToolsByDenyRules(...)`

它会根据 `ToolPermissionContext` 过滤掉被 blanket deny 的工具。

### 为什么这一步不是多余的

因为权限不应该只在调用时生效，还应该在暴露时生效。

如果模型能看到一个永远不会成功执行的工具，它的推理会被污染。

---

### 再看 `getTools(permissionContext)`

这里做了几件事：

#### 1. 处理 simple mode

simple mode 下不是返回全量工具，而是一个简化子集。

#### 2. 在 REPL mode 下处理特殊工具暴露策略

比如 REPL mode 会隐藏某些 primitive tools，因为它们已经通过 VM 封装后暴露。

#### 3. 先排除 special tools，再做 deny rule 过滤

这说明系统并不是“有工具就直接给模型”，而是经过多层策略裁剪。

### 这里最值得学的地方

是两层分离：

- `getAllBaseTools()`：回答“系统有什么”
- `getTools(...)`：回答“当前会话应暴露什么”

---

## 三、`src/query.ts`

这一部分最重要，但也最容易看晕。建议你按“状态 -> 准备 -> 分叉 -> 继续”来读。

---

### 1. `State` 类型

```ts
type State = {
  messages
  toolUseContext
  autoCompactTracking
  maxOutputTokensRecoveryCount
  hasAttemptedReactiveCompact
  maxOutputTokensOverride
  pendingToolUseSummary
  stopHookActive
  turnCount
  transition
}
```

### 为什么这是关键

它告诉你：`queryLoop()` 不是普通递归函数，而是在维护一个跨 iteration 的显式状态机。

`transition` 字段尤其关键，因为它把“为什么继续”变成了可观察状态。

---

### 2. `query()` 外层包装

`query()` 自己并不做太多业务，只是：

- 调用 `queryLoop()`
- 在正常退出时补发 `notifyCommandLifecycle(..., 'completed')`

### 这说明什么

说明作者刻意把：

- 对外 API
- 内部主循环

拆成了两层。

---

### 3. `queryLoop()` 开头：immutable params + mutable state

这里有一个很成熟的设计：

- 不变参数单独解构
- 可变状态统一放进 `state`

### 为什么值得学

因为 query loop 有非常多 continue 路径。如果把每个状态拆成散落变量，后面几乎不可维护。

---

### 4. 每轮开头先处理准备工作

这一段包括：

- 记忆预取
- skill discovery prefetch
- `queryTracking`
- `messagesForQuery` 组装
- `applyToolResultBudget(...)`
- snip / microcompact / collapse / autocompact

### 这里最容易被忽略的一点

作者并不是“等模型报错了再救”，而是在请求前就主动做预算和压缩控制。

这是一种运行时稳定性思维。

---

### 5. 工具调用前：消息已经被整理成适合 query 的形态

这一步意味着：

- query loop 不只是负责“调用模型”
- 它也负责“决定模型该看到怎样的历史”

这就是为什么它必须掌控 compact 和 tool result budget。

---

### 6. 无工具调用时：进入 budget / complete 判断

在没有 tool use blocks 的情况下，系统不会立刻简单返回，而会先看：

- stop hook blocking
- token budget continuation
- completion 事件

### 为什么这样设计

因为“没工具”不等于“可以结束”。运行时还有其他继续条件。

---

### 7. 有工具调用时：进入 `runTools(...)`

这里是主循环最核心的分叉之一。

系统会：

- 执行工具批处理
- 流式接收工具更新
- `yield` 工具消息
- 把工具结果 normalize 回用户消息
- 合并可能更新过的 context

### 这说明什么

说明工具不是外围副作用，而是 query loop 中段的主流程。

---

### 8. 工具执行后：异步生成 tool summary

系统会提取：

- tool name
- tool input
- tool output
- 最后一个 assistant text

然后异步启动 `generateToolUseSummary(...)`。

### 为什么不阻塞下一轮

回答：
因为 summary 有价值，但不应卡主链路。这体现了明显的“主链路优先”思想。

---

### 9. 工具执行后还要继续处理很多事情

包括：

- abort
- hook stopped continuation
- queued commands snapshot
- attachments
- memory prefetch consume

### 为什么 query loop 会这么大

回答：
因为这些事情都直接影响“下一轮到底该看到什么消息”。它们不适合散到外围，否则消息主线会断。

---

## 四、把三个文件串起来看

```text
Tool.ts
  -> 定义运行时协议边界

tools.ts
  -> 定义全量工具真源
  -> 根据当前上下文裁剪可见工具池

query.ts
  -> 驱动消息、模型、工具、预算、恢复形成完整闭环
```

## 这一套设计回答了什么更大的问题

回答：
它回答的是“当 AI 系统进入真实 agent 场景后，如何避免工具调用、流式输出、恢复逻辑和预算控制散成一堆补丁”。

Claude Code 的答案是：

- 把工具抽象升级成运行时协议
- 把工具池暴露控制做成显式层
- 把一切继续与恢复逻辑统一放进 query loop
