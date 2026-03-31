# 第一课：启动链路与命令系统

这一课现在拆成 5 份文档，适合按顺序精读。

## 阅读顺序

1. [课程概览](./01-overview.md)
2. [启动流程分析](./02-startup-flow-analysis.md)
3. [逐段精读：`bootstrap-entry.ts -> cli.tsx -> main.tsx -> commands.ts`](./03-guided-reading-bootstrap-cli-main-commands.md)
4. [设计分析：为什么这样设计](./04-design-analysis.md)
5. [练习与输出](./05-exercises.md)
6. [源码索引表](./06-source-index.md)

## 本课目标

学完后你应该能回答：

1. Claude Code 为什么不是直接从 `main.tsx` 启动
2. `cli.tsx` 为什么像一个“分流网关”
3. `main.tsx` 为什么承担初始化编排而不是全业务逻辑
4. `commands.ts` 为什么是注册中心而不是命令数组

## 配套图解

- [启动链路图](../diagrams/startup-flow.md)
