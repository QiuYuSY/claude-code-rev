# 一次完整用户请求的端到端 Walkthrough

这份文档要解决一个很实际的问题：

“如果我在 Claude Code 里输入一句话，到底会发生什么？”

它不是每个分支的完整实现，而是一条足够真实的主干路径。

## 场景

假设用户在 REPL 里输入：

`帮我看看这个仓库的命令系统是怎么组织的`

## 总流程

```text
用户在 REPL 输入
  -> REPL 触发 submit
      -> handlePromptSubmit(...)
          -> processUserInput(...)
              -> createUserMessage(...)
              -> 生成本轮 messages
                  -> onQuery(...)
                      -> query(...)
                          -> queryLoop()
                              -> 模型流式输出
                              -> 如有 tool use 则执行工具
                              -> 工具结果回填消息
                              -> 决定是否继续
                  -> REPL 消费 stream event / message
                      -> setMessages(...)
                      -> 渲染到 UI
```

## 第一步：用户在 REPL 里提交输入

在 [`src/screens/REPL.tsx`](/d:/Code/learn-claude/claude-code-rev/src/screens/REPL.tsx) 里，用户提交后会走到：

- `handlePromptSubmit(...)`

这一步的关键含义是：

- REPL 自己不把输入直接扔给模型
- 它先进入一个专门的“输入处理层”

## 第二步：`handlePromptSubmit(...)`

在 [`src/utils/handlePromptSubmit.ts`](/d:/Code/learn-claude/claude-code-rev/src/utils/handlePromptSubmit.ts) 里，会做几件关键的事：

- reserve query guard，避免并发 turn 混乱
- 调用 `processUserInput(...)`
- 收集这次 turn 生成的新 messages
- 再通过 `onQuery(...)` 把这些 messages 推入 query 主循环

### 为什么这一步单独存在

因为“用户提交输入”不是单纯把字符串发出去，还涉及：

- 队列
- workload
- slash command / bash command / prompt 模式分流
- 处理中的 placeholder
- turn 生命周期控制

## 第三步：`processUserInput(...)`

在 [`src/utils/processUserInput/processUserInput.ts`](/d:/Code/learn-claude/claude-code-rev/src/utils/processUserInput/processUserInput.ts) 里，会做：

- 处理 prompt / slash command / bash command 等不同输入模式
- 执行用户提交相关 hooks
- 生成消息对象
- 追加 attachment、hook 结果、meta 消息

### 一个关键点

这里不会直接“执行模型请求”，而是先把输入转成统一消息结构。

也就是说：

用户输入先变成 `message`，再进入 query loop。

## 第四步：`createUserMessage(...)`

在 [`src/utils/messages.ts`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts) 中，用户输入最终会被包装成结构化 `UserMessage`。

### 为什么不能直接保留字符串

因为系统后面还要用同一套消息结构来承载：

- meta 信息
- tool result
- permission mode
- origin
- attachment

所以一开始就进入统一消息模型，后面才不会散掉。

## 第五步：REPL 把本轮 messages 交给 `onQuery(...)`

在 REPL 里，`onQuery(...)` 会进一步进入 [`src/query.ts`](/d:/Code/learn-claude/claude-code-rev/src/query.ts) 的：

- `query()`
- `queryLoop()`

这里正式进入 Claude Code 的运行时主循环。

## 第六步：`queryLoop()` 准备本轮模型输入

在进入模型前，`queryLoop()` 会做很多准备：

- 构造 `queryTracking`
- 处理 `messagesForQuery`
- 应用 tool result budget
- 执行 snip / microcompact / autocompact
- 装配 system prompt、system context、user context

### 这一步最关键的理解

Claude Code 不是“拿消息直接发模型”，而是会先决定：

- 模型这轮该看到哪些历史
- 历史该以怎样的形态被压缩和整理

## 第七步：模型开始流式输出

`queryLoop()` 会一边从模型拿 stream event，一边把：

- assistant message
- request start event
- 其他运行时事件

逐步 `yield` 出去。

### 为什么是 generator

因为 REPL 需要边接收边渲染，而不是等整轮完成才看到结果。

## 第八步：如果模型请求工具

一旦 assistant 输出里包含 tool use blocks，`queryLoop()` 会：

- 调用 `runTools(...)`
- 逐步消费工具更新
- 把工具结果转换成消息
- 再把这些结果回填到 message 主线上

### 这是 Claude Code 和普通聊天系统最大的差异之一

它不是“模型说完了再顺便调个工具”，而是：

- 模型输出
- 工具执行
- 结果回写
- 下一轮继续

共同构成一条主流程。

## 第九步：决定是否继续下一轮

工具执行后，系统还要继续判断：

- 是否被中断
- 是否被 hook 阻止继续
- 是否要生成 tool summary
- 是否因为 token budget 而继续
- 是否直接完成

### 这说明什么

Claude Code 的一次用户请求，常常并不是“一进一出”，而是多轮内部迭代。

## 第十步：REPL 消费 `query()` 的输出并渲染

在 [`src/screens/REPL.tsx`](/d:/Code/learn-claude/claude-code-rev/src/screens/REPL.tsx) 中，REPL 会 `for await` 消费 `query(...)` 产出的事件。

它会做的事情包括：

- `setMessages(...)`
- 增量更新 assistant 输出
- 追加系统消息、工具消息、duration/message metrics
- 把变化反映到 UI

### 为什么 REPL 必须和 query 绑定得这么深

因为它不是只显示最终结果，而是要显示：

- 过程
- 中间状态
- 工具执行
- 恢复与继续

## 把整条链压缩成一句话

用户输入在 Claude Code 中的大致路径是：

`REPL submit -> handlePromptSubmit -> processUserInput -> createUserMessage -> queryLoop -> model stream -> tool execution -> message回填 -> REPL 渲染`

## 如果你来自别的 Agent 系统，最该注意什么

### 1. 输入不是直接进模型

中间会经过输入处理和消息建模。

### 2. 输出不是直接回 UI

中间会经过 query loop 的预算、工具、恢复和继续逻辑。

### 3. REPL 不只是显示层

它和 query、messages、AppState 一起构成完整会话运行时。

## 最后一句话

理解 Claude Code 的关键，不是盯着“模型怎么回答”，而是看清“一次用户请求如何在 REPL、消息、query loop、工具执行和 UI 渲染之间形成闭环”。
