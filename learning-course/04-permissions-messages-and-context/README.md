# 第四课：权限、消息与上下文拼装

这一课已经升级成和前 3 课同等级别的精读专题，建议按顺序阅读。

## 阅读顺序

1. [课程概览](./01-overview.md)
2. [权限、消息与上下文流程分析](./02-flow-analysis.md)
3. [逐段精读：`permissionSetup.ts -> messages.ts -> context.ts`](./03-guided-reading-permissions-messages-context.md)
4. [设计分析：为什么这样设计](./04-design-analysis.md)
5. [练习与输出](./05-exercises.md)
6. [源码索引表](./06-source-index.md)
7. [学习检查表 / 打卡表](./07-study-checklist.md)

## 本课目标

学完后你应该能回答：

1. 为什么权限是运行时边界，而不是简单弹窗
2. 为什么 message 是系统主线，而不是聊天记录
3. 为什么 context 不是一大段 prompt，而是一套装配机制
4. 为什么这三者必须形成闭环
