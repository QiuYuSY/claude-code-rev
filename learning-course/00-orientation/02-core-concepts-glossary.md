# Claude Code 核心术语表

这份术语表不是词典式罗列，而是为“懂别的 agent、但不懂 Claude Code”的读者做认知对齐。

每个词都回答 3 件事：

1. 在 Claude Code 里它是什么意思
2. 容易和什么混淆
3. 如果你来自别的 agent 框架，可以把它类比成什么

## Command

### 在 Claude Code 里是什么意思

统一的命令抽象。来源可以是：

- built-in commands
- plugin commands
- skills
- workflows
- MCP skill-like entries

### 容易和什么混淆

容易和 shell command 混淆。

### 更接近什么

更接近“统一能力入口”或“用户/模型可访问的命令型能力描述”，不是单纯终端命令。

## Tool

### 在 Claude Code 里是什么意思

模型可调用的运行时能力单元，例如：

- Bash
- FileRead
- FileEdit
- WebSearch
- Agent

### 容易和什么混淆

容易和 Command 混淆。

### 更接近什么

更接近 tool-calling agent 里的 function/tool，但 Claude Code 里的 Tool 更重，因为它带完整运行时上下文。

## ToolUseContext

### 在 Claude Code 里是什么意思

工具执行时可访问的完整运行时上下文，里面包括：

- AppState 读写
- 消息
- UI/notification 能力
- MCP clients/resources
- agent 身份
- 限制项

### 容易和什么混淆

容易和普通 dependency injection context 混淆。

### 更接近什么

更接近“运行时插件 API surface”，而不是简单 helper 参数。

## Skill

### 在 Claude Code 里是什么意思

一种面向模型和用户的结构化能力入口，通常来自：

- skills 目录
- bundled skills
- plugin skills
- MCP skills

### 容易和什么混淆

容易和普通命令、prompt template 混淆。

### 更接近什么

更接近“带元信息的 prompt capability”，不是简单别名命令。

## MCP Resource

### 在 Claude Code 里是什么意思

来自 MCP server 的可读取资源，不一定是可执行动作。

### 容易和什么混淆

容易和 MCP Tool 混淆。

### 更接近什么

更接近“外部信息源对象”，不是“可执行函数”。

## Query Loop

### 在 Claude Code 里是什么意思

`src/query.ts` 里的主循环，负责：

- 构造 query 输入
- 流式处理模型输出
- 执行工具
- 处理预算和恢复
- 决定是否继续下一轮

### 容易和什么混淆

容易被理解成“调用模型的函数”。

### 更接近什么

更接近 agent runtime state machine。

## Message

### 在 Claude Code 里是什么意思

系统统一历史载体，承载：

- user input
- assistant output
- tool use / tool result
- system message
- attachment
- compact boundary
- tool summary

### 容易和什么混淆

容易被当成聊天文本行。

### 更接近什么

更接近“统一运行时事件历史”。

## AppState

### 在 Claude Code 里是什么意思

REPL 会话的全局状态中心，包含：

- 会话和模型配置
- 权限状态
- 任务和 agent 状态
- MCP 与插件状态
- remote / bridge 状态
- 历史和通知

### 容易和什么混淆

容易被理解成普通前端页面 state。

### 更接近什么

更接近“交互运行时的全局状态树”。

## Permission Mode

### 在 Claude Code 里是什么意思

当前会话对工具调用的权限策略模式，会影响：

- 工具暴露
- 自动模式
- 是否提示用户
- 是否允许危险行为

### 容易和什么混淆

容易被理解成简单 yes/no 权限判断。

### 更接近什么

更接近“工具调用治理策略”。

## Compact

### 在 Claude Code 里是什么意思

控制上下文体积的一组机制，包括：

- microcompact
- autocompact
- snip
- context collapse

### 容易和什么混淆

容易被理解成单一摘要步骤。

### 更接近什么

更接近“上下文预算与压缩策略集合”。

## Bridge / Remote Control

### 在 Claude Code 里是什么意思

把本地 CLI 会话和远程/移动/网页控制场景连接起来的一组能力。

### 容易和什么混淆

容易和普通 remote execution 混淆。

### 更接近什么

更接近“远程会话桥接运行时”。

## REPL

### 在 Claude Code 里是什么意思

终端交互主界面，但它并不是简单输入输出窗口，而是会话驾驶舱。

### 容易和什么混淆

容易被理解成 shell prompt。

### 更接近什么

更接近“终端里的状态化应用界面”。

## 最后一句话

如果你想快速建立 Claude Code 心智模型，可以先记住这组关系：

`Command` 是统一能力入口  
`Tool` 是模型可调用能力  
`Skill` 是结构化能力描述  
`Message` 是统一历史载体  
`AppState` 是交互运行时状态树  
`query loop` 是系统心脏
