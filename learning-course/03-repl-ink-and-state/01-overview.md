# 第三课概览

## 核心问题

这节课围绕 4 个问题展开：

1. REPL 在 Claude Code 里到底扮演什么角色？
2. 为什么它需要一个很重的状态中心？
3. 为什么 `AppState` 几乎等于产品能力地图？
4. 为什么交互层必须参与运行时，而不是只显示输出？

## 你会读到哪些文件

- `src/replLauncher.tsx`
- `src/components/App.tsx`
- `src/interactiveHelpers.tsx`
- `src/state/AppStateStore.ts`
- `src/state/AppState.tsx`
- `src/screens/REPL.*`

## 先给结论

Claude Code 的 REPL 本质上不是聊天窗口，而是：

- 会话面板
- 任务面板
- 权限交互面板
- 远程/桥接状态面板
- 插件/MCP 状态入口

所以这里的 UI 不是“最后一层皮肤”，而是运行时的一部分。

## 这一课最值得学的地方

### 1. 学“终端前端化”

终端界面不等于简单。只要产品开始承载长期会话、工具执行和多任务，终端应用也会走向前端式状态管理。

### 2. 学“状态是架构图”

在复杂系统中，状态模型往往比 README 更诚实。它会暴露系统真正需要长期维护的核心实体。

### 3. 学“交互 orchestration”

`interactiveHelpers.tsx` 这类文件最容易被忽略，但它们常常决定启动、退出、setup screen、trust flow 和 REPL 装配的质量。

## 推荐你带着什么视角读

读这节课时，反复问自己：

- 为什么这些状态必须长期存在？
- 为什么这些状态要进统一 store？
- 为什么 `launchRepl()` 故意这么薄？
- 为什么 `App.tsx` 更像 provider 容器，而不是业务组件？

## 学完后的判断标准

如果你能完整说出这句话，方向就是对的：

“Claude Code 的 REPL 不是输入输出壳，而是承载会话、权限、任务、扩展和远程能力的运行时驾驶舱。”
