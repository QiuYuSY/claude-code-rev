# 第三课：REPL、Ink 与状态管理

这一课已经升级成和前两课同等级别的精读专题，建议按顺序阅读。

## 阅读顺序

1. [课程概览](./01-overview.md)
2. [REPL 与状态系统流程分析](./02-flow-analysis.md)
3. [逐段精读：`replLauncher.tsx -> App.tsx -> interactiveHelpers.tsx -> AppStateStore.ts`](./03-guided-reading-repl-app-interactivehelpers-state.md)
4. [设计分析：为什么这样设计](./04-design-analysis.md)
5. [练习与输出](./05-exercises.md)
6. [源码索引表](./06-source-index.md)
7. [学习检查表 / 打卡表](./07-study-checklist.md)

## 本课目标

学完后你应该能回答：

1. 为什么 Claude Code 的 REPL 不是一个输入框，而是运行时控制台
2. 为什么终端产品会需要重状态架构
3. `AppState` 为什么可以当作项目认知地图来读
4. 为什么 UI 在 agent 项目里不是外围展示层

## 小白先看

如果你是第一次读这种项目，先只记住 3 句话：

1. REPL 不只是输入框，而是会话控制台
2. `AppState` 就是当前会话的大状态表
3. 终端产品也可能像前端应用一样需要状态中心

可以先跳过：

- `04-design-analysis.md` 里的风险与迁移讨论
- `06-source-index.md` 的代码段索引
