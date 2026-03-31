# 第二课：工具抽象与 Query Loop

这一课已经升级成和第一课同等级别的精读专题，建议按顺序阅读。

## 阅读顺序

1. [课程概览](./01-overview.md)
2. [工具系统与 Query Loop 流程分析](./02-flow-analysis.md)
3. [逐段精读：`Tool.ts -> tools.ts -> query.ts`](./03-guided-reading-tool-tools-query.md)
4. [设计分析：为什么这样设计](./04-design-analysis.md)
5. [练习与输出](./05-exercises.md)
6. [源码索引表](./06-source-index.md)

## 本课目标

学完后你应该能回答：

1. Claude Code 的工具系统为什么不是“暴露几个函数给模型”
2. `ToolUseContext` 为什么这么重
3. `query.ts` 为什么是系统心脏
4. 为什么 query loop 更像状态机而不是普通函数

## 配套图解

- [运行时循环图](../diagrams/runtime-loop.md)
