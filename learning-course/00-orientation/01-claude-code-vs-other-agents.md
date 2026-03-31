# Claude Code 与其他 Agent 的差异地图

## 这份文档解决什么问题

如果你已经接触过别的 agent 系统，最大的问题通常不是“看不懂代码”，而是：

- 我应该把 Claude Code 看成哪一类系统？
- 它和我熟悉的那类 agent 到底差在哪？

这份文档就是在帮你做认知迁移。

## 先给一句总结

Claude Code 不是：

- 纯 chat agent
- 纯 tool-calling wrapper
- 纯多 agent 编排框架
- 纯 IDE 插件

它更像是：

“一个以终端 REPL 为核心交互面、以 query loop 为运行时心脏、以工具/权限/状态/扩展系统为一等公民的 coding agent 平台。”

## 一、Claude Code vs 通用 Chat Agent

### 通用 Chat Agent 的典型特征

- 以 prompt-response 为主
- 上下文主要是消息历史
- 工具要么没有，要么很轻
- UI 常常只是聊天窗口

### Claude Code 的差异

- 核心交互不是聊天窗口，而是 REPL/TUI
- 运行时不是“发一次请求”，而是 query loop
- 工具系统很重，会影响消息、状态、权限和后续轮次
- 会话中存在任务、agent、MCP、插件、远程状态等长期实体

### 迁移提醒

如果你带着“聊天机器人”的心智模型来看 Claude Code，你会低估：

- 状态复杂度
- 工具闭环的重要性
- 权限前置的重要性

## 二、Claude Code vs 通用 Tool-Calling Agent

### 通用 Tool Agent 的典型特征

- 模型输出 tool call
- 外围执行工具
- 把结果再喂回模型

### Claude Code 的差异

Claude Code 当然也做这个，但它更进一步：

- 工具池会先被权限和模式裁剪
- 工具执行上下文能访问 AppState、UI、通知、agent、MCP 资源
- 工具结果还会受到 budget / compact / normalize 规则影响
- 工具执行不是外围 helper，而是 query loop 中段主流程

### 迁移提醒

如果你来自普通 tool-calling 系统，Claude Code 最容易让你惊讶的是：

“工具在这里不是函数列表，而是运行时插件接口。”

## 三、Claude Code vs 多 Agent 编排框架

### 多 Agent 框架的典型特征

- 更关注 agent 之间的角色分工
- 更关注 delegation / orchestration
- UI 往往不是核心

### Claude Code 的差异

Claude Code 当然也支持 agent / task / teammate 一类能力，但它的重心明显不同：

- 主入口仍然是单个 REPL 会话
- 多 agent 协作被纳入同一会话状态中心
- 任务、前后台 agent、foreground transcript 都是 UI 级状态

### 迁移提醒

不要把 Claude Code 理解成一个“纯 coordinator framework”。它更像：

- 以个人编码会话为中心
- 再向多 agent 扩展

## 四、Claude Code vs IDE Coding Agent

### IDE Agent 的典型特征

- 编辑器上下文是中心
- UI 是 IDE 面板或内嵌交互
- 状态通常附着在 IDE 工作区

### Claude Code 的差异

- 它的原生心智模型是终端会话，不是 IDE 面板
- 即使有 IDE/remote/bridge 扩展，REPL 仍是产品核心
- 它对 shell、worktree、permissions、CLI modes 非常重视

### 迁移提醒

如果你来自 IDE agent 视角，不要先找“编辑器功能”；先找：

- 启动链路
- REPL
- query loop
- 工具与权限边界

## 五、Claude Code 最特别的 6 个点

### 1. REPL 是产品核心，不是外壳

很多 agent 产品把 UI 当展示层，Claude Code 不是。

### 2. query loop 是系统心脏

很多系统把 query 藏在 API service 里，Claude Code 明确把它做成主循环。

### 3. 权限被前置成运行时边界

它不是最后弹一个确认框，而是影响工具能见度和自动模式行为。

### 4. 工具系统重量级

`ToolUseContext` 明确表明工具会跨越状态、UI、权限和 agent 边界。

### 5. AppState 很重，但不是偶然

这反映的是长期会话、任务、插件、MCP、remote/bridge 的真实复杂度。

### 6. 平台化扩展很强

MCP、插件、Skills 不是零散功能，而是系统演进方向。

## 六、如果你来自别的 Agent 系统，建议你先看什么

### 如果你熟悉 chat agent

先看：

- 第三课 REPL / AppState
- 第二课 query loop

因为你最容易低估交互与状态复杂度。

### 如果你熟悉 tool-calling agent

先看：

- 第二课工具系统
- 第四课权限、消息、上下文

因为你最容易把工具系统想得太轻。

### 如果你熟悉多 agent 框架

先看：

- 第三课 AppState
- 第五课扩展架构

因为你最容易忽略 Claude Code 的单会话中心设计。

### 如果你熟悉 IDE coding agent

先看：

- 第一课启动链路
- 第三课 REPL

因为你最需要重新建立“终端会话优先”的心智模型。

## 最后一句话

理解 Claude Code 最重要的切换，不是从“不会 agent”到“会 agent”，而是从“我熟悉的 agent 是 X”切换到“Claude Code 是一个以终端运行时为中心的 coding agent 平台”。
