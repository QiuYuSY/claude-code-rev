# 源码索引表

## 这一课先读什么

推荐顺序：

1. `src/utils/permissions/permissionSetup.ts`
2. `src/main.tsx` 中权限初始化片段
3. `src/utils/messages.ts`
4. `src/context.ts`
5. `src/Tool.ts`

## 关键文件

### `src/utils/permissions/permissionSetup.ts`

关注点：

- `removeDangerousPermissions(...)`：[`src/utils/permissions/permissionSetup.ts:472`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:472)
- `stripDangerousPermissionsForAutoMode(...)`：[`src/utils/permissions/permissionSetup.ts:510`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:510)
- `initializeToolPermissionContext(...)`：[`src/utils/permissions/permissionSetup.ts:872`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:872)

为什么重要：
这里定义了权限如何从输入规则转成运行时边界。

### `src/main.tsx`

关注点：

- `initializeToolPermissionContext(...)` 调用：[`src/main.tsx:1753`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:1753)

为什么重要：
它说明权限初始化在启动主线上，而不是执行末端。

### `src/utils/messages.ts`

关注点：

- `createAssistantAPIErrorMessage(...)`：[`src/utils/messages.ts:435`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:435)
- `createUserMessage(...)`：[`src/utils/messages.ts:460`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:460)
- `normalizeMessagesForAPI(...)`：[`src/utils/messages.ts:1989`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:1989)
- `createSystemMessage(...)`：[`src/utils/messages.ts:4335`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:4335)

为什么重要：
这里定义了内部运行时历史与 API 输入边界。

### `src/context.ts`

关注点：

- `getSystemContext`：[`src/context.ts:116`](/d:/Code/learn-claude/claude-code-rev/src/context.ts:116)
- `getUserContext`：[`src/context.ts:155`](/d:/Code/learn-claude/claude-code-rev/src/context.ts:155)

为什么重要：
这里定义了上下文装配机制。

## 关键函数

- `initializeToolPermissionContext`
- `removeDangerousPermissions`
- `stripDangerousPermissionsForAutoMode`
- `createUserMessage`
- `createSystemMessage`
- `createAssistantAPIErrorMessage`
- `normalizeMessagesForAPI`
- `getSystemContext`
- `getUserContext`

## 关键类型

- `ToolPermissionContext`
- `UserMessage`
- `AssistantMessage`
- `SystemMessage`
- `Message`

## 建议重点看的代码段

### 代码段 A：权限上下文构建

- [`src/utils/permissions/permissionSetup.ts:872`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:872)

看点：
CLI 规则、disk 规则和 mode 如何合并成运行时权限对象。

### 代码段 B：危险权限剥离

- [`src/utils/permissions/permissionSetup.ts:472`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:472)
- [`src/utils/permissions/permissionSetup.ts:510`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:510)

看点：
为什么系统要做预防式权限控制。

### 代码段 C：消息工厂

- [`src/utils/messages.ts:435`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:435)
- [`src/utils/messages.ts:460`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:460)

看点：
为什么 message 必须统一工厂化。

### 代码段 D：运行时历史 -> API 输入

- [`src/utils/messages.ts:1989`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:1989)

看点：
为什么内部历史和模型输入必须分层。

### 代码段 E：上下文装配

- [`src/context.ts:116`](/d:/Code/learn-claude/claude-code-rev/src/context.ts:116)
- [`src/context.ts:155`](/d:/Code/learn-claude/claude-code-rev/src/context.ts:155)

看点：
为什么 system context 和 user context 值得单独建模与缓存。

## 阅读时要回答的问题

1. 为什么权限属于运行时边界，而不是最后确认框？
2. 为什么 message 是统一历史语言？
3. 为什么 context assembly 不能散落在各模块里？
