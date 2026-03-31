# 学习检查表 / 打卡表

## 阅读完成度

- [ ] 我读完了 `01-overview.md`
- [ ] 我读完了 `02-flow-analysis.md`
- [ ] 我读完了 `03-guided-reading-tool-tools-query.md`
- [ ] 我读完了 `04-design-analysis.md`
- [ ] 我做过 `05-exercises.md`
- [ ] 我浏览过 `06-source-index.md`

## 理解检查

- [ ] 我能解释 `ToolPermissionContext` 是什么
- [ ] 我能解释 `ToolUseContext` 为什么这么重
- [ ] 我能解释 `getAllBaseTools()` 和 `getTools(...)` 的区别
- [ ] 我能解释 `query()` 和 `queryLoop()` 的关系
- [ ] 我能解释 `State` 为什么是显式状态机

## 关键判断检查

- [ ] 我能解释为什么工具结果必须回到消息系统
- [ ] 我能解释为什么 token budget 在主循环里处理
- [ ] 我能解释为什么 tool summary 异步生成而不阻塞主链路
- [ ] 我能说出这套设计最强的收益和最大的复杂度代价

## 通过标准

如果下面 3 题你都能脱稿回答，就算完成本课：

1. 为什么 Claude Code 的工具不是几个简单函数？
2. 为什么 `query.ts` 更像运行时状态机？
3. 为什么工具执行、中断恢复和预算控制应该在同一条主循环里？
