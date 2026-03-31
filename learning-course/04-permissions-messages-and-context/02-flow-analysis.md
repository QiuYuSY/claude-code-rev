# 权限、消息与上下文流程分析

## 主流程

```text
CLI flags / settings / disk rules
  -> initializeToolPermissionContext(...)
      -> ToolPermissionContext
          -> getTools(permissionContext)
              -> model sees allowed tool pool

user / system / tool / attachment events
  -> create*Message(...)
      -> normalizeMessagesForAPI(...)
          -> API-facing message stream

git / CLAUDE.md / date / env
  -> getSystemContext()
  -> getUserContext()
      -> context assembly
          -> prepend / append into query path
```

## 第 1 层：权限初始化

在 `main.tsx` 的启动过程中，会调用：

- `initializeToolPermissionContext(...)`

这一阶段会考虑：

- `allowedToolsCli`
- `disallowedToolsCli`
- `baseToolsCli`
- `permissionMode`
- `allowDangerouslySkipPermissions`
- `addDirs`

### 为什么这一步很早

因为它不是在问“执行时是否放行”，而是在问：

- 当前会话应该暴露哪些工具
- 当前权限模式是什么
- 是否要自动剥离危险规则

## 第 2 层：消息创建与消息标准化

Claude Code 里不是直接手写 message 对象，而是通过工厂函数创建：

- `createUserMessage(...)`
- `createSystemMessage(...)`
- `createAssistantAPIErrorMessage(...)`
- `createToolUseSummaryMessage(...)`

然后在真正发给 API 前，通过：

- `normalizeMessagesForAPI(...)`

把内部消息历史整理成 API 可消费形态。

### 为什么需要两步

因为内部运行时历史和最终发给模型的消息不是完全相同的东西。

内部历史要保留：

- UI-only 信息
- 虚拟消息
- 系统事件
- 本地命令输出

而 API 输入必须更严格、更稳定。

## 第 3 层：上下文构建

在 `context.ts` 里，系统会分别构建：

- `getSystemContext()`
- `getUserContext()`

### `getSystemContext()` 会关心什么

- git 状态
- 当前分支和主分支
- recent commits
- 某些调试性 system prompt injection

### `getUserContext()` 会关心什么

- CLAUDE.md 内容
- memory files
- 当前日期

### 为什么它们值得单独建模

因为这些信息：

- 来源不同
- 开销不同
- 生命周期不同
- 缓存策略不同

## 这一整套设计在解决什么问题

### 问题 1：权限不能太晚生效

解决方式：
权限上下文前置初始化，参与工具池暴露。

### 问题 2：运行时历史不能直接等于 API 输入

解决方式：
内部消息结构和 API 归一化分层。

### 问题 3：上下文来源复杂，不能到处临时拼接

解决方式：
显式 `getSystemContext()` / `getUserContext()`。

## 阶段性总结

如果你只记一句话，应该记这句：

“Claude Code 先用权限决定能力边界，再用消息维护运行时历史，最后用上下文装配决定模型看到的世界。”
