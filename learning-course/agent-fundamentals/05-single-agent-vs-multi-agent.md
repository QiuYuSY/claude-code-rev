# Single-Agent、Workflow、Multi-Agent 的区别

难度：入门到中级
预计阅读时间：8 分钟
建议方式：必须读

这三个词经常被混着用，但其实层次不一样。

## 1. Single-Agent

最简单。

一个 Agent：

- 接收目标
- 自己调用工具
- 自己推进任务

适合：

- 单线程任务
- 范围清晰的问题

## 2. Workflow

不是多个 agent，而是：

- 预先规定好的流程步骤

适合：

- 重复任务
- 稳定场景
- 需要高可控性

## 3. Multi-Agent

多个 agent 角色分工。

适合：

- 任务明显可拆
- 需要不同能力角色
- 团队化协作

## 小白最容易踩的坑

一上来就追 multi-agent。

其实大多数系统在前期更应该先把：

- 单 agent
- 工具闭环
- 权限治理

做好。

## 一句话建议

先把 Single-Agent 做稳，  
再决定是否需要 Workflow，  
最后再考虑 Multi-Agent。
