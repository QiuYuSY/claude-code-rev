# 运行时循环图

## 主图

```text
User Input
  └─ messages
      └─ query()
          └─ queryLoop()
              ├─ buildQueryConfig()
              ├─ assemble messagesForQuery
              ├─ send request to model
              ├─ stream assistant output
              ├─ inspect assistant message
              │   ├─ no tool use
              │   │   ├─ token budget decision
              │   │   ├─ stop / continue decision
              │   │   └─ return completed
              │   └─ tool use detected
              │       ├─ runTools(...)
              │       ├─ collect tool results
              │       ├─ normalize tool results to messages
              │       ├─ generate tool summary (async)
              │       └─ continue next iteration
              ├─ compact / recovery / interruption branches
              └─ terminal reason
```

## 这张图想表达什么

### 1. query loop 才是运行时中心

你可以把模型 API 看作一个子步骤，但不能把它当作整个系统。真正驱动系统的是 `queryLoop()`。

### 2. tools 不在外围，而在中段主流程

模型输出一旦包含 tool use，系统会立即转入工具批处理，再把结果回填到消息中继续下一轮。

### 3. message 是闭环载体

用户消息、助手消息、工具结果、系统元消息，都会回到同一条消息主线上。

## 关键支路

### 正常完成

- 模型输出
- 无工具调用
- budget 允许
- 返回 completed

### 工具继续

- 模型请求工具
- 工具执行
- 工具结果写回 messages
- query loop 继续下一轮

### 恢复继续

- max output tokens
- compact
- stop hooks
- token budget continuation

## 设计收益

- 复杂行为都被放进一条显式运行主线
- 工具、恢复、预算不会散落在外围
- 更适合长期 agent 会话

## 设计代价

- 单个文件认知负担很高
- continue 路径多时，需要强纪律维护状态

## 复盘问题

1. 为什么 query loop 更像状态机而不是普通函数？
2. 为什么工具结果必须再次进入消息系统？
3. 如果去掉 generator，只保留 Promise，会丢失哪些能力？
