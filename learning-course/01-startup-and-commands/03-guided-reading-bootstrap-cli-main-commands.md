# 逐段精读：`bootstrap-entry.ts -> cli.tsx -> main.tsx -> commands.ts`

这份文档按真实调用顺序带你读第一课的关键文件。

---

## 一、`src/bootstrap-entry.ts`

代码非常短：

```ts
import { ensureBootstrapMacro } from './bootstrapMacro'

ensureBootstrapMacro()

await import('./entrypoints/cli.tsx')
```

### 这三行分别在做什么

#### 1. 导入 bootstrap 宏初始化函数

这表明项目需要在最早阶段注入某些构建或运行时宏能力。

#### 2. 立即执行 `ensureBootstrapMacro()`

设计含义：

- 这是全局前置条件
- 后续任何路径都应该建立在它已经完成的前提上

#### 3. 延迟导入真正 CLI 入口

设计含义：

- bootstrap 层不承担 CLI 逻辑
- CLI 逻辑可以独立演化

### 为什么这一层要短到近乎空壳

回答：
因为这层是所有路径共享的“最早共同祖先”。这里越短，系统越稳，也越容易控制启动成本。

### 值得学习的地方

- 极早期层只保留真正必要的逻辑
- 通过动态导入把复杂度推迟到下一层

---

## 二、`src/entrypoints/cli.tsx`

这是第一份真正需要精读的文件。

### 第一段：极早期环境修正

它会做一些必须在模块加载前就确定的环境设置，例如：

- 关闭 corepack 自动 pin
- 在远程环境下设置 `NODE_OPTIONS`
- 某些 feature gate 下提前设置简化环境变量

### 为什么这些事情放在这里

回答：
因为有些子模块会在 import 时读取环境变量。如果等 `init()` 再设置，就已经太晚了。

### 第二段：`--version` 快速路径

```ts
if (args.length === 1 && (args[0] === '--version' || ...)) {
  console.log(`${MACRO.VERSION} (Claude Code)`)
  return
}
```

### 为什么这段设计很关键

它说明作者非常明确地知道：

- `version` 是一个高频命令
- 它不值得引入全量初始化
- 它应该尽可能稳定

### 第三段：启动 profiler，再处理其余特殊模式

在 fast-path 之后，文件会加载 startup profiler，然后继续处理：

- `--dump-system-prompt`
- Chrome 相关 MCP host
- computer-use MCP
- daemon worker
- remote-control / bridge
- daemon
- bg session 子命令
- template jobs
- environment runner
- self-hosted runner
- tmux worktree 快路径

### 这段最值得学什么

是“分流原则”。

这些路径的共同点是：

- 不一定需要完整 UI
- 不一定需要加载所有命令
- 能独立完成自己职责

### 第四段：真正 full-path 才进入 `main.tsx`

最后才会：

```ts
const { startCapturingEarlyInput } = await import('../utils/earlyInput.js')
startCapturingEarlyInput()
const { main: cliMain } = await import('../main.js')
await cliMain()
```

### 为什么这里先启动 early input capture

回答：
因为从开始加载 `main.js` 到真正 REPL ready 之间，用户可能已经输入内容。一个交互型 CLI 如果不能覆盖这段窗口期，体验会很差。

### 小结

`cli.tsx` 的角色不是“主应用”，而是：

- 环境修正层
- 快速路径分流层
- 完整运行时加载闸门

---

## 三、`src/main.tsx`

`main.tsx` 非常大，所以这一课不追求通读，而是抓启动相关主线。

### 第一段：`initializeEntrypoint(isNonInteractive)`

这段逻辑负责设置 `CLAUDE_CODE_ENTRYPOINT`。

它会区分：

- `mcp serve`
- GitHub Action
- local-agent
- 非交互 `sdk-cli`
- 交互 `cli`

### 为什么这一层重要

回答：
因为 entrypoint 不只是埋点字段，它会影响系统如何理解自己当前所处的运行模式。

### 第二段：`main()` 一开始做的事情

它会先做：

- 处理调试别名
- 设置 Windows 安全相关环境变量
- 初始化 warning handler
- 注册 `exit` / `SIGINT` 处理
- 处理 `cc://` 和 deep link
- 处理 assistant / ssh 等特殊交互路径

### 为什么这些事情放在最前面

回答：
因为这类逻辑属于“还没进入 commander 和业务层之前，必须先稳定运行时边界”的部分。

### 第三段：判断 interactive / non-interactive

这一步会基于：

- `-p / --print`
- `--init-only`
- `--sdk-url`
- `stdout.isTTY`

得到 `isNonInteractive`。

### 为什么这一步要早做

回答：
因为后续 telemetry、auth、UI、stdin 处理都会依赖这个判断。

### 第四段：`run()` 中的 `preAction` hook

这是 `main.tsx` 的一个关键设计点。

系统并不是在模块加载时就执行 `init()`，而是在 commander 的 `preAction` 里执行：

- 等待 MDM / keychain prefetch
- 执行 `init()`
- 设置终端标题

### 为什么不是顶层初始化

回答：
因为 help 等路径不应承担完整初始化成本。把初始化推迟到命令真正执行前，是成熟 CLI 的常见做法。

### 第五段：权限上下文初始化

这里会调用：

- `initializeToolPermissionContext(...)`

并处理：

- `allowedToolsCli`
- `disallowedToolsCli`
- `baseToolsCli`
- `permissionMode`
- `allowDangerouslySkipPermissions`
- `addDirs`

### 为什么这一步是启动主线的一部分

回答：
因为工具池暴露什么能力，必须先知道权限上下文。否则模型可能先看到不该看到的工具。

### 第六段：`setup()`、`getCommands()`、`getAgentDefinitions...` 并行

这是 `main.tsx` 很值得学习的一点。

系统会：

- 先注册 bundled skills/plugins
- 再启动 `setupPromise`
- 再启动 `commandsPromise`
- 再启动 `agentDefsPromise`
- 最后 `await` 这些结果

### 这里为什么先注册 bundled skills/plugins

源码注释已经说明：

如果先并行执行 `getCommands()`，而 bundled skills/plugins 还没注册进去，`getCommands()` 可能会 memoize 到空结果。

### 这里最值得学的不是 API，而是“初始化时序语义”

也就是：

- 哪些事情可以并行
- 哪些事情必须先发生
- 哪些缓存如果时机错了会把错误状态记住

---

## 四、`src/commands.ts`

### 第一段：`COMMANDS()`

`COMMANDS` 被声明成 memoized function，而不是顶层常量数组。

### 为什么？

源码注释给了直接答案：

- 底层函数会读取 config
- config 不能在模块初始化时过早读取

### 这说明什么

说明“命令定义”并不是完全静态的，它部分依赖运行时状态。

### 第二段：`loadAllCommands(cwd)`

这里会并行收集：

- `getSkills(cwd)`
- `getPluginCommands()`
- `getWorkflowCommands(cwd)`

然后再把这些来源与 `COMMANDS()` 合并。

### 为什么它很重要

因为这一步把“多来源命令装配”抽象成了独立阶段。

### 第三段：`getCommands(cwd)`

这一步会：

1. 取 `loadAllCommands(cwd)` 的结果
2. 读取动态发现的 skills
3. 先过滤 availability 和 `isEnabled()`
4. 再把 dynamic skills 插入合适位置

### 为什么 dynamic skills 不是简单 append

回答：
因为命令表不仅是数据，还体现语义分层和用户体验。

### 第四段：skill/tool 视图与 user command 视图分离

`commands.ts` 还定义了：

- `getSkillToolCommands()`
- `getSlashCommandToolSkills()`

这说明：

- “用户能看到的命令”
- “模型能调用的技能”

不是同一集合。

### 这是平台型系统很常见的分层

因为同一种能力，可能会有不同受众：

- 人类用户
- 模型
- 远程客户端

---

## 五、把四个文件串起来看

```text
bootstrap-entry.ts
  -> 确保最早期 bootstrap 完成
  -> 把复杂度延后到 cli.tsx

cli.tsx
  -> 处理最轻量和最特殊的路径
  -> 只在必要时进入 main.tsx

main.tsx
  -> 编排初始化时序
  -> 构造当前运行模式
  -> 生成当前会话的命令、工具、权限和状态基础

commands.ts
  -> 把多来源命令装配成最终可用命令集
```

## 这一套设计回答了什么更大的问题

回答：
它回答的是“一个复杂 AI CLI 怎么避免成为一团启动期泥球”。

它的答案是：

- 提前分层
- 提前分流
- 明确时序
- 统一装配
