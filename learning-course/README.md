# Claude Code 源码学习课程

这套课程现在按“每课一个文件夹”的方式组织，方便你把每节课当成一个独立专题来学，而不是在一个大文档里来回跳。

## 课程结构

### 小白入口

- [小白友好版入门路径](./beginner-track/README.md)

### 预备入口

- [预备课：面向已懂别的 Agent、但不懂 Claude Code 的入口层](./00-orientation/README.md)

### 课程总览

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

## 怎么使用这套课

推荐顺序：

1. 如果你是小白，先读 [小白友好版入门路径](./beginner-track/README.md)
2. 如果你已经懂别的 agent，但不懂 Claude Code，先读 [预备课](./00-orientation/README.md)
3. 再读某一课目录下的 `README.md`
4. 按编号顺序读子文档
5. 看完后做该课的练习与输出
6. 对照 `diagrams/` 里的图解复盘

## 课程设计原则

这套课不是“告诉你看哪些文件”，而是尽量回答这些问题：

- 这个模块解决什么问题？
- 为什么这样设计？
- 它的收益和代价分别是什么？
- 如果换成自己的项目，该借鉴什么、该警惕什么？

## 总学习目标

学完后，你应该能独立说明：

1. Claude Code 为什么采用分层启动结构
2. Query loop 为什么是系统心脏
3. 为什么工具、消息、权限和上下文必须形成闭环
4. 为什么 REPL 在这个项目里是运行时控制台
5. 为什么 MCP、插件、Skills 会一起走向平台化架构

## 建议输出

建议你最终至少产出下面 5 份内容：

1. 一张你自己画的启动链路图
2. 一张运行时循环图
3. 一张扩展机制总图
4. 一份设计评估文档：最想借鉴的 5 个设计与最想重构的 5 个设计
5. 一份概念迁移总结：Claude Code 和你之前熟悉的 agent 系统，最关键的 5 个差异是什么
