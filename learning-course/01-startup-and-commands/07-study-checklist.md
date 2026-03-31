# 学习检查表 / 打卡表

## 阅读完成度

- [ ] 我读完了 `01-overview.md`
- [ ] 我读完了 `02-startup-flow-analysis.md`
- [ ] 我读完了 `03-guided-reading-bootstrap-cli-main-commands.md`
- [ ] 我读完了 `04-design-analysis.md`
- [ ] 我做过 `05-exercises.md`
- [ ] 我浏览过 `06-source-index.md`

## 理解检查

- [ ] 我能复述 `package.json -> bootstrap-entry.ts -> cli.tsx -> main.tsx` 的链路
- [ ] 我能解释为什么 `bootstrap-entry.ts` 要保持极薄
- [ ] 我能解释为什么 `cli.tsx` 是分流器而不是主业务层
- [ ] 我能解释为什么 `main.tsx` 是初始化编排器
- [ ] 我能解释为什么 `commands.ts` 是注册中心

## 关键判断检查

- [ ] 我能说出至少 3 个 fast-path 的例子
- [ ] 我能解释为什么 `COMMANDS` 不是顶层常量数组
- [ ] 我能解释 bundled skills / plugins 的注册时机为什么重要
- [ ] 我能说出这套启动设计的最大收益和最大代价

## 通过标准

如果下面 3 题你都能脱稿回答，就算完成本课：

1. Claude Code 为什么不能直接从 `main.tsx` 启动？
2. 为什么 `commands.ts` 必须是统一注册中心？
3. 如果你维护这个项目，你会优先重构启动链路的哪一部分？
