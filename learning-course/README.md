# Claude Code 学习平台

这里不是一个普通的文档目录，而是一套围绕 Claude Code 与 Agent 设计组织起来的学习平台入口。

如果你第一次进来，不要先随机点开文件夹。  
先回答一个问题：

**你现在最想得到什么？**

## 入口选择

### 网页入口

如果你更喜欢网页式浏览，而不是直接翻 Markdown：

- [前端课程门户](./portal/index.html)

### 1. 我想先学 Agent 设计

适合：

- 想搞懂 Agent 是什么
- 想理解 tool、planning、memory、HITL、multi-agent
- 暂时不急着啃 Claude Code 源码

从这里进入：

- [Agent 设计基础课](./tracks/agent-fundamentals/README.md)

你学完后会得到：

- 一套 Agent 设计的基础框架
- 一套可以迁移到别的系统的方法论

### 2. 我是小白，想先建立感觉

适合：

- 害怕大工程源码
- 还没有建立 Claude Code 的整体心智模型
- 想知道先看什么、先跳过什么

从这里进入：

- [小白友好版入门路径](./tracks/beginner-track/README.md)

你学完后会得到：

- 不会再被课程结构吓住
- 能用通俗语言解释 Claude Code 大概是什么

### 3. 我懂别的 Agent，但不懂 Claude Code

适合：

- 已经接触过 Cline、Roo Code、LangGraph、AutoGen 等
- 想做认知迁移

从这里进入：

- [预备课：面向已懂别的 Agent、但不懂 Claude Code 的入口层](./tracks/00-orientation/README.md)

你学完后会得到：

- 能快速把熟悉的 Agent 概念映射到 Claude Code

### 4. 我想系统读 Claude Code 源码

适合：

- 想做结构化源码分析
- 想理解 Claude Code 的工程实现

从这里进入：

- [正式课程](./course/01-startup-and-commands/README.md)

课程顺序：

1. [第一课：启动链路与命令系统](./course/01-startup-and-commands/README.md)
2. [第二课：工具抽象与 Query Loop](./course/02-tools-and-query-loop/README.md)
3. [第三课：REPL、Ink 与状态管理](./course/03-repl-ink-and-state/README.md)
4. [第四课：权限、消息与上下文拼装](./course/04-permissions-messages-and-context/README.md)
5. [第五课：MCP、插件与 Skills 扩展机制](./course/05-mcp-plugins-and-skills/README.md)
6. [第六课：恢复版源码的阅读策略与复盘方法](./course/06-restored-source-reading/README.md)

### 5. 我想做企业内部汇报

适合：

- 想把 Claude Code 的设计提炼成企业可借鉴经验
- 想做管理层摘要、技术评审或方案汇报

从这里进入：

- [企业内部设计 Agent 时，如何借鉴 Claude Code 的设计](./extras/07-enterprise-agent-report/README.md)

## 推荐学习路线

### 路线 A：Agent 优先

推荐顺序：

1. [Agent 设计基础课](./tracks/agent-fundamentals/README.md)
2. [固定案例线](./extras/example-thread/README.md)
3. [小白友好版入门路径](./tracks/beginner-track/README.md)
4. [正式课程](./course/01-startup-and-commands/README.md)

适合：

- 真正想学 Agent 设计的人

### 路线 B：小白友好

推荐顺序：

1. [小白友好版入门路径](./tracks/beginner-track/README.md)
2. [Agent 设计基础课](./tracks/agent-fundamentals/README.md)
3. [从这里开始](./START-HERE.md)
4. 进入正式课程

适合：

- 希望低压力开始的人

### 路线 C：源码分析

推荐顺序：

1. [预备课](./tracks/00-orientation/README.md)
2. [正式课程](./course/01-startup-and-commands/README.md)
3. [图解总览](./extras/diagrams/README.md)

适合：

- 想系统读源码的人

## 你可以在哪停下来

如果你不想读完整套课，也完全没问题。

- 读完 `agent-fundamentals`
  - 你已经能理解 Agent 核心原理
- 读完 `beginner-track`
  - 你已经能不迷路地看这个仓库
- 读完 `01-03` 课
  - 你已经能理解 Claude Code 主骨架
- 读完 `01-06` 课
  - 你已经能做源码级分析
- 读完 `07-enterprise-agent-report`
  - 你已经能做企业内部汇报

详细说明：

- [学到哪里可以先停](./extras/stop-points.md)

## 导航工具

- [前端课程门户](./portal/index.html)
- [从这里开始](./START-HERE.md)
- [先别从这里开始](./extras/do-not-start-here.md)
- [固定案例线](./extras/example-thread/README.md)
- [Agent 设计模式总结](./extras/agent-design-patterns/README.md)
- [图解总览](./extras/diagrams/README.md)

## 学完这套课后，你应该能得到什么

至少可以获得 6 项成果：

1. 一份 Agent 设计概念总结
2. 一张 Claude Code 启动链路图
3. 一张运行时循环图
4. 一张扩展机制总图
5. 一份设计评估文档
6. 一份“Claude Code 与其他 Agent 系统差异”的迁移总结

## 最后一句话

如果你现在还不知道从哪开始，就点这里：

- [从这里开始](./START-HERE.md)
