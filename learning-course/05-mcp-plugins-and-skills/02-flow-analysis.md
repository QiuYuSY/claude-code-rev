# MCP、插件与 Skills 流程分析

## 主流程

```text
MCP configs
  -> MCP clients
      -> tools / resources / mcp commands / mcp skills

plugin markdown + frontmatter
  -> collectMarkdownFiles()
      -> createPluginCommand(...)
          -> Command[]

skills / bundled skills / plugin skills / workflows / builtins
  -> loadAllCommands(cwd)
      -> getCommands(cwd)
          -> filtered, merged command list
```

## 第 1 层：MCP 能力接入

在 `src/services/mcp/client.ts` 中，系统要做的不只是“调用远程工具”，而是一整套协议接入工作：

- transport
- auth
- tool discovery
- resource discovery
- skill discovery
- timeout
- session 失效恢复
- tool result persistence

### 为什么 MCP 值得单独成为一层

因为它解决的是“如何把外部系统纳入 Claude Code 运行时”，而不是简单增加一个内建命令。

## 第 2 层：插件命令生成

在 `src/utils/plugins/loadPluginCommands.ts` 中，系统会：

- 收集 markdown 文件
- 对 skill 目录做特殊变换
- 解析 frontmatter
- 处理 allowed-tools、arguments、model、effort
- 最终生成统一 `Command`

### 为什么这很重要

因为它让“内容资产”也能变成扩展能力，降低了扩展门槛。

## 第 3 层：统一命令汇总

在 `src/commands.ts` 中，系统会把这些来源合并：

- bundled skills
- built-in plugin skills
- skill directory commands
- workflow commands
- plugin commands
- plugin skills
- built-in commands
- dynamic skills

### 为什么这是平台化关键一步

因为多来源扩展如果没有统一收口，最终一定会：

- 展示不一致
- 可用性判断不一致
- 排序与过滤不一致

## MCP 为什么还会进入命令视图

`commands.ts` 里还有：

- `getMcpSkillCommands(...)`

这说明 MCP 并不是只影响工具池，也能通过技能形态影响命令/技能视图。

## 这一整套设计在解决什么问题

### 问题 1：外部能力不应写死在内建命令里

解决方式：
MCP 协议接入层。

### 问题 2：扩展不应该只靠编程能力

解决方式：
markdown/frontmatter 插件命令。

### 问题 3：多来源能力必须统一管理

解决方式：
`loadAllCommands()` + `getCommands()`

## 阶段性总结

如果你只记一句话，应该记这句：

“Claude Code 把外部协议能力、本地内容扩展和模型能力入口同时接入系统，并最终用统一注册中心完成平台化收口。”
