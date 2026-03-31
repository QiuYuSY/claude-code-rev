# REPL 与状态系统流程分析

## 主流程

```text
main.tsx
  -> launchRepl(root, appProps, replProps, renderAndRun)
      -> replLauncher.tsx
          -> import('./components/App.js')
          -> import('./screens/REPL.js')
          -> renderAndRun(root, <App><REPL /></App>)
              -> interactiveHelpers.tsx
                  -> root.render(...)
                  -> startDeferredPrefetches()
                  -> waitUntilExit()
                  -> gracefulShutdown()
```

## 第 1 层：`replLauncher.tsx`

这是一个很薄的装配层。

它的职责只有三件事：

1. 动态加载 `App`
2. 动态加载 `REPL`
3. 调用 `renderAndRun()`

### 为什么它这么薄

标准回答：
因为它的职责只是拼接 REPL 启动链，而不是持有会话状态和 UI 逻辑。

## 第 2 层：`App.tsx`

这个文件看起来不复杂，但非常关键。

它把这几个 Provider 组合起来：

- `AppStateProvider`
- `StatsProvider`
- `FpsMetricsProvider`
- `BootstrapBoundary`

### 为什么 `App.tsx` 值得学

因为它展示了顶层 UI 外壳真正要负责的东西：

- 提供上下文
- 提供状态根
- 提供监控信息
- 提供 bootstrap 错误边界

也就是说，它不是业务组件，而是“交互根容器”。

## 第 3 层：`interactiveHelpers.tsx`

这层负责把“根渲染能力”和“运行时行为”接起来。

例如：

- `renderAndRun(...)`
- `showSetupScreens(...)`
- `exitWithError(...)`
- `exitWithMessage(...)`
- `getRenderContext(...)`

### 为什么这层重要

因为真正的交互系统不只是 render，它还必须负责：

- setup flow
- trust dialog
- onboarding
- graceful shutdown
- 通过 Ink 渲染错误与退出消息

## 第 4 层：`AppStateStore.ts`

这是第三课最值得重点读的文件。

你不用一开始就逐字段硬背，而应该按主题看状态域。

### 会话与模型域

- `settings`
- `mainLoopModel`
- `mainLoopModelForSession`
- `verbose`
- `statusLineText`
- `thinkingEnabled`

### 权限与交互域

- `toolPermissionContext`
- `footerSelection`
- `viewSelectionMode`
- `spinnerTip`

### 任务与 agent 域

- `tasks`
- `agentNameRegistry`
- `foregroundedTaskId`
- `viewingAgentTaskId`

### MCP 与插件域

- `mcp.clients / tools / commands / resources`
- `plugins.enabled / disabled / commands / errors`

### remote / bridge 域

- `remoteSessionUrl`
- `remoteConnectionStatus`
- `replBridgeEnabled`
- `replBridgeConnected`
- `replBridgeSessionActive`
- `replBridgeError`

### 历史与辅助域

- `fileHistory`
- `attribution`
- `todos`
- `notifications`
- `elicitation`

## 为什么说 `AppState` 是项目认知地图

因为只有真正影响长期会话和交互的东西，才会被提升到全局状态。

它暴露了系统真正关心的核心实体：

- 会话
- 权限
- 任务
- 扩展
- 远程连接
- 历史

## 这一整套设计在解决什么问题

### 问题 1：终端 UI 也会有长期复杂状态

解决方式：
统一 AppState。

### 问题 2：UI 不是单纯显示，而要驱动运行时

解决方式：
让 App 根容器、interactive helpers 和 AppState 一起承担 orchestration。

### 问题 3：系统能力越来越多，局部状态会失控

解决方式：
把跨模块共享的长期状态放进统一 store。

## 阶段性总结

如果你只记一句话，应该记这句：

“Claude Code 把 REPL 设计成一个长期会话驾驶舱，因此状态中心和交互编排层自然成为产品核心，而不是配角。”
