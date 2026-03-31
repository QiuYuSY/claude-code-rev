# 源码索引表

## 这一课先读什么

推荐顺序：

1. `package.json`
2. `src/bootstrap-entry.ts`
3. `src/entrypoints/cli.tsx`
4. `src/main.tsx`
5. `src/commands.ts`

## 关键文件

### `package.json`

关注点：

- `scripts.dev`
- `scripts.start`
- `scripts.version`

为什么重要：
它告诉你进程不是直接从业务主文件启动，而是统一经过 bootstrap 入口。

### `src/bootstrap-entry.ts`

关注点：

- `ensureBootstrapMacro`
- 动态导入 `entrypoints/cli.tsx`

为什么重要：
这是最外层极轻壳入口。

### `src/entrypoints/cli.tsx`

关注点：

- `main()`：[`src/entrypoints/cli.tsx:33`](/d:/Code/learn-claude/claude-code-rev/src/entrypoints/cli.tsx:33)
- fast-path 分流
- 最终导入 `../main.js`

为什么重要：
这是 CLI 分流器，不是完整业务层。

### `src/main.tsx`

关注点：

- `initializeEntrypoint(...)`：[`src/main.tsx:517`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:517)
- `main()`：[`src/main.tsx:585`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:585)
- `initializeToolPermissionContext(...)` 调用：[`src/main.tsx:1753`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:1753)
- bundled plugins / skills 注册：[`src/main.tsx:1930`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:1930)

为什么重要：
这是重量级初始化编排器。

### `src/commands.ts`

关注点：

- `COMMANDS`：[`src/commands.ts:258`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:258)
- `loadAllCommands(...)`：[`src/commands.ts:449`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:449)
- `getCommands(...)`：[`src/commands.ts:476`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:476)

为什么重要：
这是多来源命令注册中心。

## 关键函数

- `ensureBootstrapMacro`
- `main` in `cli.tsx`
- `initializeEntrypoint`
- `main` in `main.tsx`
- `COMMANDS`
- `loadAllCommands`
- `getCommands`

## 关键类型

- `Command`
- `CommandBase`
- `PromptCommand`

建议在 [`src/types/command.ts`](/d:/Code/learn-claude/claude-code-rev/src/types/command.ts) 里配合看。

## 建议重点看的代码段

### 代码段 A：最轻入口

- [`src/bootstrap-entry.ts:1`](/d:/Code/learn-claude/claude-code-rev/src/bootstrap-entry.ts:1)

看点：
为什么壳入口只保留 bootstrap 和动态导入。

### 代码段 B：`--version` fast-path

- [`src/entrypoints/cli.tsx:33`](/d:/Code/learn-claude/claude-code-rev/src/entrypoints/cli.tsx:33)

看点：
为什么最常见的轻命令不应该承担完整初始化成本。

### 代码段 C：interactive / non-interactive 分流

- [`src/main.tsx:585`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:585)
- [`src/main.tsx:821`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:821)

看点：
为什么 `main.tsx` 更像初始化编排器。

### 代码段 D：命令统一汇总

- [`src/commands.ts:449`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:449)
- [`src/commands.ts:476`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:476)

看点：
多来源能力如何统一收束为最终命令表。

## 阅读时要回答的问题

1. 为什么 `cli.tsx` 不能直接等于 `main.tsx`？
2. 为什么 `COMMANDS` 不是一个顶层常量数组？
3. 为什么 bundled skills/plugins 的注册时机会影响 `getCommands()` 的结果？
