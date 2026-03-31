# 预备课：面向已懂别的 Agent、但不懂 Claude Code 的入口层

这一组文档不是正式“第零课”，而是正式课程前的认知桥梁。

适合这样的人：

- 你已经懂别的 agent 系统
- 你知道 tool calling、multi-agent、memory、workflow 这些概念
- 但你还不清楚 Claude Code 在这些概念上有哪些特殊设计

## 阅读顺序

1. [Claude Code 与其他 Agent 的差异地图](./01-claude-code-vs-other-agents.md)
2. [Claude Code 核心术语表](./02-core-concepts-glossary.md)
3. [一次完整用户请求的端到端 walkthrough](./03-end-to-end-request-walkthrough.md)
4. [学习检查表 / 打卡表](./04-study-checklist.md)

## 这一组文档的目标

它想解决的不是“源码怎么读”，而是“认知怎么迁移”。

读完后你应该能回答：

1. Claude Code 和通用 chat agent / tool agent / multi-agent framework 最大的差异是什么
2. Claude Code 里的 `Command`、`Tool`、`Skill`、`AppState`、`query loop` 到底分别指什么
3. 一次真实用户输入在 Claude Code 里会怎么流过 REPL、message、query、tool execution 和 UI

## 最佳使用方式

建议你先读完这 3 份文档，再进入正式课程：

- [第一课：启动链路与命令系统](../01-startup-and-commands/README.md)

这样会更容易建立 Claude Code 的专属心智模型，而不是一直拿别的 agent 框架硬套。
