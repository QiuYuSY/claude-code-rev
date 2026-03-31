# 第五课：MCP、插件与 Skills 扩展机制

这一课已经升级成和前 4 课同等级别的精读专题，建议按顺序阅读。

## 阅读顺序

1. [课程概览](./01-overview.md)
2. [MCP、插件与 Skills 流程分析](./02-flow-analysis.md)
3. [逐段精读：`mcp/client.ts -> loadPluginCommands.ts -> commands.ts`](./03-guided-reading-mcp-plugins-commands.md)
4. [设计分析：为什么这样设计](./04-design-analysis.md)
5. [练习与输出](./05-exercises.md)
6. [源码索引表](./06-source-index.md)
7. [学习检查表 / 打卡表](./07-study-checklist.md)

## 本课目标

学完后你应该能回答：

1. 为什么 Claude Code 已经是平台，而不是单体 CLI
2. MCP、插件、Skills 分别在解决什么扩展问题
3. 为什么多来源扩展必须进入统一注册中心
4. 为什么平台化能力会显著提高系统复杂度，但仍然值得

## 配套图解

- [扩展机制图](../diagrams/extension-architecture.md)
