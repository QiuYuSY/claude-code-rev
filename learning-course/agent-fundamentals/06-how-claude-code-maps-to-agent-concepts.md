# Claude Code 如何映射这些 Agent 概念

难度：中级
预计阅读时间：10-12 分钟
建议方式：建议精读

前面 5 篇讲的是通用 Agent 设计，这一篇把它们映射回 Claude Code。

## Agent loop 对应哪里

对应：

- `src/query.ts`

因为这里负责：

- 决定什么时候问模型
- 什么时候调工具
- 什么时候继续下一轮

## Tools 对应哪里

对应：

- `src/Tool.ts`
- `src/tools.ts`

因为这里定义了：

- 工具是什么
- 工具能访问什么上下文
- 当前会话暴露什么工具

## Memory / Context 对应哪里

对应：

- `src/context.ts`
- `src/utils/messages.ts`

因为这里负责：

- 系统上下文
- 用户上下文
- 会话消息历史

## Human-in-the-loop / Permissions 对应哪里

对应：

- `src/utils/permissions/permissionSetup.ts`

因为这里负责：

- 权限模式
- 工具暴露边界
- 危险规则剥离

## Long-lived State 对应哪里

对应：

- `src/state/AppStateStore.ts`

因为这里承载：

- 会话状态
- 任务状态
- 插件状态
- MCP 状态

## Platform Extensibility 对应哪里

对应：

- `src/commands.ts`
- `src/services/mcp/client.ts`
- `src/utils/plugins/loadPluginCommands.ts`

因为这里负责：

- built-in commands
- skills
- plugins
- MCP

## 最后一句话

如果你学完 Agent 概念后再回来看 Claude Code，就会发现：

它不是“很多零散功能拼起来”，而是把 Agent 设计里的关键要素都落实成了具体工程模块。
