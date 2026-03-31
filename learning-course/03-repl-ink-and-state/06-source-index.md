# 源码索引表

## 这一课先读什么

推荐顺序：

1. `src/replLauncher.tsx`
2. `src/components/App.tsx`
3. `src/interactiveHelpers.tsx`
4. `src/state/AppStateStore.ts`
5. `src/state/onChangeAppState.ts`
6. `src/screens/REPL.tsx`

## 关键文件

### `src/replLauncher.tsx`

关注点：

- `launchRepl(...)`：[`src/replLauncher.tsx:12`](/d:/Code/learn-claude/claude-code-rev/src/replLauncher.tsx:12)

为什么重要：
这是极薄的 REPL 启动连接层。

### `src/components/App.tsx`

关注点：

- `App(...)`：[`src/components/App.tsx:50`](/d:/Code/learn-claude/claude-code-rev/src/components/App.tsx:50)
- `BootstrapBoundary`

为什么重要：
它定义了 UI 根容器的 Provider 结构。

### `src/interactiveHelpers.tsx`

关注点：

- `renderAndRun(...)`：[`src/interactiveHelpers.tsx:98`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:98)
- `showSetupScreens(...)`：[`src/interactiveHelpers.tsx:104`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:104)
- `getRenderContext(...)`：[`src/interactiveHelpers.tsx:299`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:299)

为什么重要：
这是交互生命周期编排层。

### `src/state/AppStateStore.ts`

关注点：

- `AppState`：[`src/state/AppStateStore.ts:89`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts:89)
- `getDefaultAppState()`：[`src/state/AppStateStore.ts:456`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts:456)

为什么重要：
这是长期会话状态中心。

### `src/state/onChangeAppState.ts`

关注点：

- `onChangeAppState(...)`：[`src/state/onChangeAppState.ts:43`](/d:/Code/learn-claude/claude-code-rev/src/state/onChangeAppState.ts:43)

为什么重要：
这里能看出状态变化之后系统还会触发哪些联动。

## 关键函数

- `launchRepl`
- `App`
- `renderAndRun`
- `showSetupScreens`
- `getDefaultAppState`
- `onChangeAppState`

## 关键类型

- `AppState`
- `FooterItem`
- `TaskState`
- `Notification`

## 建议重点看的代码段

### 代码段 A：最薄 REPL 启动器

- [`src/replLauncher.tsx:12`](/d:/Code/learn-claude/claude-code-rev/src/replLauncher.tsx:12)

看点：
为什么启动连接层只负责接线。

### 代码段 B：Provider 根容器

- [`src/components/App.tsx:50`](/d:/Code/learn-claude/claude-code-rev/src/components/App.tsx:50)

看点：
为什么 `App.tsx` 更像容器而不是业务组件。

### 代码段 C：render / setup / shutdown 主线

- [`src/interactiveHelpers.tsx:98`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:98)
- [`src/interactiveHelpers.tsx:104`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:104)

看点：
为什么交互编排层是运行时的一部分。

### 代码段 D：状态总表

- [`src/state/AppStateStore.ts:89`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts:89)

看点：
如何按状态域阅读 `AppState`，而不是逐字段硬背。

## 阅读时要回答的问题

1. 为什么 REPL 不是输入框，而是驾驶舱？
2. 为什么终端产品也会需要很重的状态中心？
3. `AppState` 里哪些状态最能体现 Claude Code 的产品边界？
