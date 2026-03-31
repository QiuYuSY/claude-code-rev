# 源码索引表

## 这一课先读什么

推荐顺序：

1. `src/services/mcp/client.ts`
2. `src/utils/plugins/loadPluginCommands.ts`
3. `src/commands.ts`
4. `src/services/mcp/config.*`

## 关键文件

### `src/services/mcp/client.ts`

关注点：

- `McpAuthError`：[`src/services/mcp/client.ts:152`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:152)
- `isMcpSessionExpiredError(...)`：[`src/services/mcp/client.ts:193`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:193)
- `getMcpToolTimeoutMs()`：[`src/services/mcp/client.ts:224`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:224)
- MCP tools/resources/skills 聚合：[`src/services/mcp/client.ts:2166`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:2166)
- `persistToolResult(...)` 调用：[`src/services/mcp/client.ts:2773`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:2773)
- `runElicitationHooks(...)` 调用：[`src/services/mcp/client.ts:2924`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:2924)

为什么重要：
这是协议型外部能力接入层。

### `src/utils/plugins/loadPluginCommands.ts`

关注点：

- `collectMarkdownFiles(...)`：[`src/utils/plugins/loadPluginCommands.ts:102`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:102)
- `transformPluginSkillFiles(...)`：[`src/utils/plugins/loadPluginCommands.ts:135`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:135)
- `loadCommandsFromDirectory(...)`：[`src/utils/plugins/loadPluginCommands.ts:169`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:169)
- `createPluginCommand(...)`：[`src/utils/plugins/loadPluginCommands.ts:218`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:218)

为什么重要：
这里展示“内容即扩展”的命令生成链。

### `src/commands.ts`

关注点：

- `loadAllCommands(...)`：[`src/commands.ts:449`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:449)
- `getCommands(...)`：[`src/commands.ts:476`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:476)
- `getMcpSkillCommands(...)`
- `getSkillToolCommands(...)`

为什么重要：
这是统一注册中心的收口点。

## 关键函数

- `isMcpSessionExpiredError`
- `getMcpToolTimeoutMs`
- `collectMarkdownFiles`
- `transformPluginSkillFiles`
- `loadCommandsFromDirectory`
- `createPluginCommand`
- `loadAllCommands`
- `getCommands`

## 关键类型

- `MCPServerConnection`
- `ServerResource`
- `PluginManifest`
- `Command`
- `FrontmatterData`

## 建议重点看的代码段

### 代码段 A：MCP 会话过期识别

- [`src/services/mcp/client.ts:152`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:152)
- [`src/services/mcp/client.ts:193`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:193)

看点：
协议接入层为什么必须显式建模认证和会话失效。

### 代码段 B：MCP tools/resources/skills 聚合

- [`src/services/mcp/client.ts:2166`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:2166)

看点：
为什么一个 MCP server 在 Claude Code 里不只贡献工具。

### 代码段 C：markdown -> Command 生成链

- [`src/utils/plugins/loadPluginCommands.ts:169`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:169)
- [`src/utils/plugins/loadPluginCommands.ts:218`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:218)

看点：
为什么插件系统可以走“内容驱动扩展”路线。

### 代码段 D：统一注册中心收口

- [`src/commands.ts:449`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:449)
- [`src/commands.ts:476`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:476)

看点：
为什么多来源扩展最终必须统一汇总、过滤和排序。

## 阅读时要回答的问题

1. MCP 和插件为什么不能混成同一种扩展机制？
2. 为什么插件命令要统一转成 `Command`？
3. 为什么平台化扩展的关键不是来源统一，而是出口统一？
