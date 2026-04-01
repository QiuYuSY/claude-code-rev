# 第六课：恢复版源码的阅读策略与复盘方法

这一课已经升级成和前 5 课同等级别的精读专题，建议按顺序阅读。

## 阅读顺序

1. [课程概览](./01-overview.md)
2. [恢复版仓库阅读与复盘流程分析](./02-flow-analysis.md)
3. [逐段精读：`README.md -> shims/ -> 课程主干图解`](./03-guided-reading-restored-repo-method.md)
4. [设计分析：如何评价这样一个复杂恢复版项目](./04-design-analysis.md)
5. [练习与输出](./05-exercises.md)
6. [源码索引表](./06-source-index.md)
7. [学习检查表 / 打卡表](./07-study-checklist.md)

## 本课目标

学完后你应该能回答：

1. 如何区分“架构主干”和“恢复版噪音”
2. 如何避免被 shim / fallback 细节带偏
3. 如何对 Claude Code 做自己的设计评估
4. 如何把前 5 课的内容收束成一套自己的工程认知

## 小白先看

如果你是第一次读恢复版仓库，先只记住 3 句话：

1. 这不是原始 pristine 仓库，而是恢复版
2. 先抓主干结构，不要先钻 shim 细节
3. 你不需要把所有兼容逻辑都看懂，先看大图

可以先跳过：

- `04-design-analysis.md` 里的长评估框架
- `06-source-index.md` 的回看清单
