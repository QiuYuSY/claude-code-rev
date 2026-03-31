# 工具系统与 Query Loop 流程分析

## 主流程

```text
User Input
  -> messages
      -> query()
          -> queryLoop()
              -> buildQueryConfig()
              -> prepare messagesForQuery
              -> model streaming
              -> inspect assistant output
                  -> no tool use
                      -> budget / stop / complete
                  -> tool use
                      -> runTools(...)
                      -> normalize tool results
                      -> write results back to messages
                      -> continue next iteration
```

## 第 1 层：`src/Tool.ts`

这个文件最应该被理解成“运行时协议层”。

它定义的不是一个孤立的工具签名，而是工具在系统里生存所需要的边界信息。

### 这里最值得关注的对象

- `ToolInputJSONSchema`
- `ToolPermissionContext`
- `ToolUseContext`
- 若干 progress / permission / message 相关类型

### 为什么它重要

因为你从这个文件里就能看出：

- 工具要接触消息
- 工具要接触 UI
- 工具要接触权限
- 工具要接触 AppState
- 工具要接触 agent / MCP / resources

这说明工具已经不是“纯函数”。

## 第 2 层：`src/tools.ts`

这个文件做两件关键的事：

1. 定义全量基础工具集 `getAllBaseTools()`
2. 根据当前上下文得到实际工具池 `getTools(permissionContext)`

### 为什么要分这两层

因为系统需要区分：

- 理论上的总能力
- 当前会话实际允许暴露的能力

### `getAllBaseTools()` 在做什么

它列出全量基础工具，包括：

- 文件读写编辑
- Bash / PowerShell
- 搜索工具
- Web 工具
- Agent / Team / Message 工具
- 计划与任务工具
- MCP 资源工具

### `getTools()` 在做什么

它再基于：

- simple mode
- repl mode
- deny rules
- coordinator mode
- 特殊工具排除

来裁剪最终工具池。

## 第 3 层：`src/query.ts`

这里才是运行时主线。

### `query()` 做什么

它是对外暴露的 async generator 包装器，负责：

- 调用 `queryLoop()`
- 在正常结束时回收命令生命周期状态

### `queryLoop()` 做什么

它才是真正的主循环，负责：

- 初始化状态
- 预取记忆与技能发现
- 构造 queryTracking
- 处理 tool result budget
- 处理 snip / microcompact / autocompact
- 请求模型并流式消费输出
- 进入工具执行
- 判断继续还是完成

## 为什么 `State` 是这节课的重点

`State` 保存了跨 iteration 的关键状态：

- `messages`
- `toolUseContext`
- `autoCompactTracking`
- `maxOutputTokensRecoveryCount`
- `hasAttemptedReactiveCompact`
- `maxOutputTokensOverride`
- `pendingToolUseSummary`
- `stopHookActive`
- `turnCount`
- `transition`

这说明作者在刻意把“继续路径”显式化。

## 关键行为链

### 行为链 1：进入主循环

- 读取 immutable params
- 初始化 mutable `state`
- 构建 `config`
- 开始预取

### 行为链 2：准备当前轮 query

- 从状态中解构变量
- 组装 `messagesForQuery`
- 执行 tool result budget 限制
- 执行 compact / collapse 相关逻辑

### 行为链 3：模型输出后分叉

- 如果没有 tool use，进入 budget / complete 判断
- 如果有 tool use，进入工具批处理

### 行为链 4：工具执行后继续

- 产出工具消息
- 把结果 normalize 回消息流
- 异步启动 tool summary
- 判断是否中断、阻止继续或进入下一轮

## 这一整套设计在解决什么问题

### 问题 1：单次请求表达不了长期 agent 会话

解决方式：
显式 query loop。

### 问题 2：工具结果不能游离于模型历史之外

解决方式：
工具结果消息化，再回到消息主线。

### 问题 3：预算、恢复和中断很容易散成补丁逻辑

解决方式：
统一进主循环。

## 阶段性总结

如果你只记一句话，应该记这句：

“Claude Code 把工具系统、消息系统和恢复控制统一放进 query loop，因此它更像一个运行时，而不是一个 API 调用器。”
