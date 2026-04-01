# 小白友好版入门路径

难度：入门
预计阅读时间：45-60 分钟
建议方式：必须精读

输入要求：

- 不要求先懂 Agent
- 不要求先懂 Claude Code 源码

输出成果：

- 不会再被大文件和术语直接劝退
- 知道应该先看什么、先跳过什么
- 能说清一次请求的大致路径

完成标准：

- 你能解释 Claude Code 大概是什么
- 你能复述“一次用户请求怎么走”
- 你知道现在最适合自己停在哪个阶段

这条路径是专门给“小白”准备的。

这里的“小白”不是完全不会编程的人，而是：

- 没系统读过大型源码
- 对 Agent 只有模糊印象
- 一看到 `query loop`、`ToolUseContext`、`AppState` 就容易有压力的人

## 这条路径的目标

它不要求你一下子读懂所有源码。

它只想先帮你搞明白 4 件事：

1. Claude Code 到底是什么
2. 它和聊天机器人、IDE 插件、普通 agent 有什么不同
3. 一次用户输入到底怎么流过系统
4. 你应该先看什么，先跳过什么

## 推荐顺序

1. [Claude Code 是什么](./01-what-is-claude-code.md)
2. [一次请求，简单讲明白](./02-one-request-explained-simply.md)
3. [你只需要先懂的 4 个核心概念](./03-four-core-concepts.md)
4. [小白如何读这个仓库而不迷路](./04-how-to-read-without-getting-lost.md)
5. [7 天入门路线](./05-7-day-roadmap.md)
6. [常见问题与误区](./06-faq-and-common-mistakes.md)

## 小白看完这条路径后，再怎么走

### 如果你想先建立感觉

去看：

- [第一课](../01-startup-and-commands/README.md)
- [第三课](../03-repl-ink-and-state/README.md)

### 如果你已经开始有点感觉了

再看：

- [第二课](../02-tools-and-query-loop/README.md)
- [第四课](../04-permissions-messages-and-context/README.md)

### 如果你已经不怕抽象了

再看：

- [第五课](../05-mcp-plugins-and-skills/README.md)
- [第六课](../06-restored-source-reading/README.md)

## 最重要的提醒

你完全不需要一开始就读懂全部。

对于小白来说，最重要的不是“全懂”，而是先建立 3 个直觉：

1. Claude Code 是一个运行时，不只是聊天工具
2. REPL 是核心，不是外壳
3. 工具、消息、权限和状态是连在一起的
