# 学习检查表 / 打卡表

## 阅读完成度

- [ ] 我读完了 `01-overview.md`
- [ ] 我读完了 `02-flow-analysis.md`
- [ ] 我读完了 `03-guided-reading-permissions-messages-context.md`
- [ ] 我读完了 `04-design-analysis.md`
- [ ] 我做过 `05-exercises.md`
- [ ] 我浏览过 `06-source-index.md`

## 理解检查

- [ ] 我能解释 `initializeToolPermissionContext(...)` 在做什么
- [ ] 我能解释危险权限为什么要被提前剥离
- [ ] 我能解释 `createUserMessage(...)` 为什么是工厂函数
- [ ] 我能解释 `normalizeMessagesForAPI(...)` 的职责
- [ ] 我能解释 `getSystemContext()` / `getUserContext()` 为什么值得单独建模

## 关键判断检查

- [ ] 我能解释为什么权限不是最后一道确认框
- [ ] 我能解释为什么 message 是系统主线
- [ ] 我能解释为什么内部历史不能直接等于 API 输入
- [ ] 我能解释为什么 context assembly 不能散落在各模块里

## 通过标准

如果下面 3 题你都能脱稿回答，就算完成本课：

1. 为什么权限必须前置到工具暴露层？
2. 为什么消息模型必须统一工厂化与标准化？
3. 为什么大型 agent 系统必须显式做上下文装配？
