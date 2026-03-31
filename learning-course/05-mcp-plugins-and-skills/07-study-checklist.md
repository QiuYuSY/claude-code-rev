# 学习检查表 / 打卡表

## 阅读完成度

- [ ] 我读完了 `01-overview.md`
- [ ] 我读完了 `02-flow-analysis.md`
- [ ] 我读完了 `03-guided-reading-mcp-plugins-commands.md`
- [ ] 我读完了 `04-design-analysis.md`
- [ ] 我做过 `05-exercises.md`
- [ ] 我浏览过 `06-source-index.md`

## 理解检查

- [ ] 我能解释 MCP client 在处理哪些问题
- [ ] 我能解释为什么 MCP 不只提供 tools，还可能提供 resources 和 skills
- [ ] 我能解释 `createPluginCommand(...)` 在做什么
- [ ] 我能解释为什么插件命令最终要统一转成 `Command`
- [ ] 我能解释 `loadAllCommands()` 和 `getCommands()` 的区别

## 关键判断检查

- [ ] 我能解释为什么 MCP 和插件不能混成同一种扩展机制
- [ ] 我能解释为什么“出口统一”比“来源统一”更重要
- [ ] 我能解释为什么平台化扩展一定会提高系统复杂度
- [ ] 我能说出这套扩展设计最值得借鉴的一点和最值得警惕的一点

## 通过标准

如果下面 3 题你都能脱稿回答，就算完成本课：

1. MCP、插件、Skills 在 Claude Code 里各自解决什么问题？
2. 为什么多来源扩展必须进入统一注册中心？
3. 为什么平台化扩展的难点不在“支持扩展”，而在“统一治理扩展”？
