# 学习检查表 / 打卡表

## 使用方式

这份表不是考试，而是帮助你确认：

- 你是否已经完成这组预备材料
- 你是否真的把“别的 agent 认知”迁移到了 Claude Code

建议做法：

- 每完成一项就手动勾掉
- 不会的项不要硬勾，回去重看对应文档

## 阅读完成度

- [ ] 我读完了 `01-claude-code-vs-other-agents.md`
- [ ] 我读完了 `02-core-concepts-glossary.md`
- [ ] 我读完了 `03-end-to-end-request-walkthrough.md`

## 认知迁移检查

- [ ] 我能用一句话说明 Claude Code 不是纯 chat agent
- [ ] 我能用一句话说明 Claude Code 不是普通 tool-calling wrapper
- [ ] 我能用一句话说明 Claude Code 不是纯多 agent 编排框架
- [ ] 我能说出 Claude Code 最特别的 3 个点

## 术语理解检查

- [ ] 我能区分 `Command` 和 `Tool`
- [ ] 我能区分 `Skill` 和 `Command`
- [ ] 我能解释 `ToolUseContext` 为什么比普通 context 重
- [ ] 我能解释 `AppState` 为什么不是普通 UI state
- [ ] 我能解释 `query loop` 为什么不是普通 API helper

## 端到端流程检查

- [ ] 我能复述一次用户输入从 REPL 到 query loop 的路径
- [ ] 我能解释为什么用户输入会先被转成 `message`
- [ ] 我能解释为什么工具结果会回到消息系统
- [ ] 我能解释为什么 REPL 不是只显示最终答案

## 通过标准

如果下面 3 题你都能脱稿回答，就可以进入第一课：

1. Claude Code 和你熟悉的 agent 系统最大的差异是什么？
2. 一次用户输入在 Claude Code 里怎么走？
3. `Command`、`Tool`、`Skill` 在 Claude Code 里分别是什么？

## 产出建议

建议写一段 200 到 400 字小结：

“如果我用一句话向一个懂 agent 的人介绍 Claude Code，我会怎么说？”
