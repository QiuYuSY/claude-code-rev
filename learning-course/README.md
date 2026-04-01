# Claude Code 源码学习课程

这套课程现在不再只有“源码精读”一条线，而是拆成了多条入口，适合不同阶段的人。

## 课程结构

### Agent 主线

- [Agent 设计基础课](./agent-fundamentals/README.md)

### 小白入口

- [小白友好版入门路径](./beginner-track/README.md)

### 预备入口

- [预备课：面向已懂别的 Agent、但不懂 Claude Code 的入口层](./00-orientation/README.md)

### 正式课程

- [第一课：启动链路与命令系统](./01-startup-and-commands/README.md)
- [第二课：工具抽象与 Query Loop](./02-tools-and-query-loop/README.md)
- [第三课：REPL、Ink 与状态管理](./03-repl-ink-and-state/README.md)
- [第四课：权限、消息与上下文拼装](./04-permissions-messages-and-context/README.md)
- [第五课：MCP、插件与 Skills 扩展机制](./05-mcp-plugins-and-skills/README.md)
- [第六课：恢复版源码的阅读策略与复盘方法](./06-restored-source-reading/README.md)

### 附加材料

- [企业内部设计 Agent 时，如何借鉴 Claude Code 的设计](./07-enterprise-agent-report/README.md)

### 配套图解

- [图解总览](./diagrams/README.md)
- [启动链路图](./diagrams/startup-flow.md)
- [运行时循环图](./diagrams/runtime-loop.md)
- [扩展机制图](./diagrams/extension-architecture.md)

## 最推荐的学习顺序

### 如果你真正想学的是 Agent 设计

1. 先读 [Agent 设计基础课](./agent-fundamentals/README.md)
2. 再读 [小白友好版入门路径](./beginner-track/README.md)
3. 然后进入正式课程

### 如果你是小白，但还不确定是否要深入源码

1. 先读 [小白友好版入门路径](./beginner-track/README.md)
2. 再读 [Agent 设计基础课](./agent-fundamentals/README.md)
3. 然后按兴趣进入正式课程

### 如果你已经懂别的 Agent，但不懂 Claude Code

1. 先读 [预备课](./00-orientation/README.md)
2. 再读 [Agent 设计基础课](./agent-fundamentals/README.md)
3. 然后进入正式课程

## 这套课程现在分别解决什么问题

### `agent-fundamentals`

解决：

- Agent 到底是什么
- Agent 的核心闭环是什么
- Tools / Planning / Memory / HITL / Multi-Agent 各自解决什么问题

### `beginner-track`

解决：

- 小白如何不被复杂工程直接劝退
- 如何用最小概念集先建立感觉

### `00-orientation`

解决：

- 如果你已经懂别的 agent，如何迁移认知到 Claude Code

### `01` 到 `06`

解决：

- Claude Code 这些 agent 概念在真实工程里是如何落地的

## 课程设计原则

这套课不只是告诉你：

- 看哪些文件

更想帮你回答：

- 这个模块解决什么问题？
- 为什么这样设计？
- 它的收益和代价分别是什么？
- 如果换成自己的项目，该借鉴什么、该警惕什么？

## 建议输出

建议你最终至少产出下面 6 份内容：

1. 一份 Agent 设计概念总结
2. 一张你自己画的启动链路图
3. 一张运行时循环图
4. 一张扩展机制总图
5. 一份设计评估文档
6. 一份概念迁移总结：Claude Code 和你熟悉的 agent 系统差异在哪里
