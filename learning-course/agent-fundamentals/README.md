# Agent 设计基础课

这条主线不是教你“先读哪个源码文件”，而是先帮你建立 Agent 的核心设计框架。

如果你真正想学的是：

- Agent 是怎么设计的
- 为什么 Agent 不是“模型 + 工具”这么简单
- 工程上如何把 Agent 做成可控系统

那这条主线应该是你的第一站。

## 推荐顺序

1. [什么是 Agent，和 Chatbot 有什么不同](./01-what-is-an-agent.md)
2. [Agent 的最小闭环：感知、决策、执行、反馈](./02-agent-loop.md)
3. [Tools、Planning、Memory 各自解决什么问题](./03-tools-planning-memory.md)
4. [Human-in-the-loop、权限与安全为什么是核心设计](./04-hitl-permissions-safety.md)
5. [Single-Agent、Workflow、Multi-Agent 的区别](./05-single-agent-vs-multi-agent.md)
6. [Claude Code 如何映射这些 Agent 概念](./06-how-claude-code-maps-to-agent-concepts.md)

## 这条主线的目标

学完后，你应该能回答：

1. Agent 和普通聊天机器人到底差在哪
2. 一个 Agent 的核心闭环是什么
3. 为什么工具、计划、记忆、权限、状态会一起出现
4. 什么时候需要单 Agent，什么时候需要多 Agent
5. Claude Code 为什么值得作为 Agent 工程案例

## 学完后怎么接正式课程

推荐顺序：

1. 先看 [小白友好版入门路径](../beginner-track/README.md)
2. 再看 [预备课](../00-orientation/README.md)
3. 然后进入 [第一课](../01-startup-and-commands/README.md)

## 一句话定位

这条线是“Agent 设计课”，Claude Code 是案例；  
后面的 1 到 6 课是“Claude Code 源码课”，Agent 概念会落到真实实现里。
