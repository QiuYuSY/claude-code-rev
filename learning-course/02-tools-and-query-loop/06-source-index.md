# 源码索引表

## 这一课先读什么

推荐顺序：

1. `src/Tool.ts`
2. `src/tools.ts`
3. `src/query.ts`
4. `src/query/config.ts`
5. `src/query/tokenBudget.ts`

## 关键文件

### `src/Tool.ts`

关注点：

- `ToolPermissionContext`：[`src/Tool.ts:123`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts:123)
- `ToolUseContext`：[`src/Tool.ts:158`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts:158)

为什么重要：
这是工具运行时协议层。

### `src/tools.ts`

关注点：

- `getAllBaseTools()`：[`src/tools.ts:193`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts:193)
- `getTools(...)`：[`src/tools.ts:271`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts:271)

为什么重要：
它区分了“系统有什么能力”和“当前会话暴露什么能力”。

### `src/query.ts`

关注点：

- `State`：[`src/query.ts:204`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:204)
- `query()`：[`src/query.ts:219`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:219)
- `queryLoop()`：[`src/query.ts:241`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:241)
- `checkTokenBudget(...)` 调用：[`src/query.ts:1309`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1309)
- `runTools(...)` 调用：[`src/query.ts:1382`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1382)
- `generateToolUseSummary(...)` 调用：[`src/query.ts:1469`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1469)

为什么重要：
这是 agent runtime 主循环。

## 关键函数

- `getAllBaseTools`
- `getTools`
- `query`
- `queryLoop`
- `checkTokenBudget`
- `runTools`
- `generateToolUseSummary`

## 关键类型

- `ToolPermissionContext`
- `ToolUseContext`
- `State`
- `QueryParams`

## 建议重点看的代码段

### 代码段 A：工具上下文边界

- [`src/Tool.ts:123`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts:123)
- [`src/Tool.ts:158`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts:158)

看点：
为什么工具会接触状态、UI、权限和资源。

### 代码段 B：工具真源与会话工具池

- [`src/tools.ts:193`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts:193)
- [`src/tools.ts:271`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts:271)

看点：
为什么要分 `getAllBaseTools()` 和 `getTools(...)`。

### 代码段 C：主循环状态初始化

- [`src/query.ts:204`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:204)
- [`src/query.ts:241`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:241)

看点：
为什么 `State` 是显式状态机而不是一堆散变量。

### 代码段 D：工具执行与继续决策

- [`src/query.ts:1309`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1309)
- [`src/query.ts:1382`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1382)
- [`src/query.ts:1469`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1469)

看点：
预算、工具执行和 tool summary 如何一起进入主循环。

## 阅读时要回答的问题

1. 为什么工具不能只是 `run(input)`？
2. 为什么工具结果必须写回消息系统？
3. 为什么 `query.ts` 更像状态机而不是普通 API helper？
