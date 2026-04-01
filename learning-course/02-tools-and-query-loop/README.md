# 第二课：工具抽象与 Query Loop

难度：中级到深读
预计阅读时间：75-90 分钟
建议方式：必须精读

输入要求：

- 建议先读第一课
- 至少先懂 Agent loop、Tool、Message 这些基本概念

输出成果：

- 能解释 `ToolUseContext` 的角色
- 能解释 query loop 为什么是运行时心脏
- 能说明工具结果为什么必须回到消息系统

完成标准：

- 你能自己讲清楚 Claude Code 的“输入 -> query -> tool -> 继续”闭环

这一课已经升级成和第一课同等级别的精读专题，建议按顺序阅读。

## 阅读顺序

1. [课程概览](./01-overview.md)
2. [工具系统与 Query Loop 流程分析](./02-flow-analysis.md)
3. [逐段精读：`Tool.ts -> tools.ts -> query.ts`](./03-guided-reading-tool-tools-query.md)
4. [设计分析：为什么这样设计](./04-design-analysis.md)
5. [练习与输出](./05-exercises.md)
6. [源码索引表](./06-source-index.md)
7. [学习检查表 / 打卡表](./07-study-checklist.md)

## 本课目标

学完后你应该能回答：

1. Claude Code 的工具系统为什么不是“暴露几个函数给模型”
2. `ToolUseContext` 为什么这么重
3. `query.ts` 为什么是系统心脏
4. 为什么 query loop 更像状态机而不是普通函数

## 小白先看

如果你是第一次读这种项目，先只记住 3 句话：

1. `Tool` 就是模型能调用的能力
2. `query loop` 就是系统调度“问模型还是调工具”的主循环
3. 工具结果不会消失，而是会回到消息里

可以先跳过：

- `04-design-analysis.md` 里的复杂取舍讨论
- `06-source-index.md` 里的函数和行号
- `03-guided-reading...` 中太长的状态细节

## 配套图解

- [运行时循环图](../diagrams/runtime-loop.md)
