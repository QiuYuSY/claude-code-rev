# 逐段精读：`permissionSetup.ts -> messages.ts -> context.ts`

这份文档按“先权限，再消息，再上下文”的顺序带你读第四课的关键文件。

---

## 一、`src/utils/permissions/permissionSetup.ts`

### 第一眼应该看什么

先抓这几个函数：

- `parseToolListFromCLI(...)`
- `initialPermissionModeFromCLI(...)`
- `initializeToolPermissionContext(...)`
- `removeDangerousPermissions(...)`
- `stripDangerousPermissionsForAutoMode(...)`

---

### 1. `initializeToolPermissionContext(...)`

这个函数接收：

- `allowedToolsCli`
- `disallowedToolsCli`
- `baseToolsCli`
- `permissionMode`
- `allowDangerouslySkipPermissions`
- `addDirs`

然后做几件关键的事：

#### A. 解析并规范化 CLI 提供的工具规则

这一步并不是简单 split string，而是要做 legacy name 兼容与规范化。

#### B. 如果指定了 base tools，就自动拒绝其余工具

这说明 base tool list 不是建议，而是能力边界。

#### C. 建立 `additionalWorkingDirectories`

说明权限系统不仅管工具名，还管工作目录范围。

#### D. 读取磁盘规则，并识别危险 shell 权限

这里包括：

- overly broad bash/powershell permissions
- auto mode 下危险规则识别

### 为什么这一步意义重大

因为它在启动阶段就把“权限策略”从输入参数转成了“运行时上下文对象”。

---

### 2. `removeDangerousPermissions(...)` / `stripDangerousPermissionsForAutoMode(...)`

这两个函数很能体现 Claude Code 的安全设计思路。

### 它们在做什么

不是等危险调用发生时再拦截，而是先把危险规则从上下文里剥离掉。

### 为什么值得学

因为这是“预防式权限控制”，不是“事后弹窗式控制”。

---

## 二、`src/utils/messages.ts`

这部分最重要的不是全部实现，而是理解“消息工厂 + API 标准化”两层结构。

---

### 1. `createAssistantAPIErrorMessage(...)`

这个工厂函数说明：

- API error 不是普通字符串
- 它要以 assistant message 的形式进入运行时历史

### 为什么这样设计

因为错误本身也是系统历史的一部分，它会影响后续恢复与用户理解。

---

### 2. `createUserMessage(...)`

这是消息系统的核心工厂之一。

它除了 `content` 之外，还支持：

- `isMeta`
- `isVisibleInTranscriptOnly`
- `isVirtual`
- `isCompactSummary`
- `toolUseResult`
- `mcpMeta`
- `permissionMode`
- `origin`

### 这说明什么

说明 “user message” 在这里不是“人类手打文本”这么简单，而是统一承载各种运行时输入。

### 为什么一定要用工厂函数

回答：
因为 message 是主线对象。只要它的语义开始复杂，统一工厂就比手写对象稳定得多。

---

### 3. `normalizeMessagesForAPI(...)`

这是第四课最值得重点读的函数之一。

它会做：

#### A. 先重排 attachment

说明 attachment 在 API 语义中有顺序要求。

#### B. 剔除 virtual messages

因为它们只服务于 UI，不应该泄漏给模型。

#### C. 过滤不该发给 API 的 system/progress/synthetic error 等消息

说明“运行时内部历史”与“模型最终输入”是两个层次。

#### D. 合并连续 user messages

这是在适配 API 侧约束，同时保证内部表达灵活。

### 为什么这个函数重要

因为它扮演了“内部运行时历史 -> 外部模型输入”的边界转换器。

---

## 三、`src/context.ts`

这个文件的关键在于：系统没有把上下文当成一个全局字符串，而是拆成两类 memoized 生成器。

---

### 1. `getSystemContext()`

它会收集：

- git status
- branch / main branch
- recent commits
- git user
- 某些调试注入信息

### 为什么这些信息属于 system context

因为它们更像环境事实，而不是用户显式输入。

---

### 2. `getUserContext()`

它会收集：

- CLAUDE.md
- memory files
- 当前日期

### 为什么这些信息属于 user context

因为它们更贴近当前仓库、当前用户工作上下文和当前任务环境。

---

### 3. 为什么 `getSystemContext()` / `getUserContext()` 都做了 memoize

回答：
因为这些上下文通常在一个会话中会被多次使用，但它们的构造可能涉及：

- Git 命令
- 文件系统扫描
- CLAUDE.md 读取

如果不缓存，会对体验和一致性都造成伤害。

---

## 四、把三组文件串起来看

```text
permissionSetup.ts
  -> 把 CLI / 磁盘规则 / 模式选择
  -> 转成 ToolPermissionContext
  -> 决定当前会话的能力边界

messages.ts
  -> 把内部运行时事件统一建模成 message
  -> 再把内部历史转换成 API 输入

context.ts
  -> 把环境、仓库和用户相关信息装配成系统上下文与用户上下文
```

## 这一套设计回答了什么更大的问题

回答：
它回答的是“如何在复杂 agent 系统里让能力暴露、历史表达和模型输入保持一致且可控”。

Claude Code 的答案是：

- 用权限系统控制能力边界
- 用消息系统控制运行时历史表达
- 用上下文装配控制模型输入视野
