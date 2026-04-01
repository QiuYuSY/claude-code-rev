# 附录：Claude Code vs Cline vs Roo Code 的 Agent 设计差异

这份附录适合放在企业内部汇报的最后，回答一个很常见的问题：

“如果市面上已经有 Cline、Roo Code、Claude Code 这些 coding agent，它们在 Agent 设计上到底有什么不同？我们应该借鉴谁的什么？”

## 一句话结论

- `Cline` 更像“人在回路的 IDE agent”
- `Roo Code` 更像“模式化 / 团队化的 IDE+Cloud agent”
- `Claude Code` 更像“runtime-first 的终端 / 平台型 agent”

如果你在做企业内部 Agent 平台：

- 想借鉴“审批和可控自动化”，优先看 `Cline`
- 想借鉴“模式化、多角色、团队工作流”，优先看 `Roo Code`
- 想借鉴“运行时、权限、状态、扩展治理”，优先看 `Claude Code`

## 一、三者各自的产品重心

## Claude Code

从本仓库源码可以看出，Claude Code 的设计重心是：

- 终端 REPL / TUI 作为主交互面
- query loop 作为系统心脏
- 工具、权限、消息、上下文形成运行时闭环
- AppState 承载长期会话复杂度
- MCP、插件、Skills 统一纳入平台扩展治理

它更像一个：

“可长期运行、可治理、可扩展的 coding agent runtime”

## Cline

Cline 官方定位强调：

- “Autonomous coding agent right in your IDE”
- 在 IDE 中工作
- 对文件、命令、浏览器、MCP 工具进行逐步审批或 auto-approve

从其官方文档看，Cline 很强调：

- Auto-approve 粒度控制
- Plan / Act 模式切换
- YOLO Mode
- 用户随时中断

它更像一个：

“编辑器内、强审批、强人在回路的执行型 agent”

参考：
- [Cline GitHub](https://github.com/cline/cline)
- [Cline Auto Approve](https://docs.cline.bot/features/auto-approve)
- [Cline Interactive Mode](https://docs.cline.bot/cline-cli/interactive-mode)

## Roo Code

Roo Code 官方定位强调：

- “Your AI-Powered Dev Team, Right in Your Editor”
- 多模式：Code / Architect / Ask / Debug / Custom Modes
- IDE 内 dev team 体验
- MCP、Custom Modes、Cloud/Router 等能力

它更像一个：

“以角色/模式为核心抽象的团队型 agent 套件”

参考：
- [Roo Code GitHub](https://github.com/RooCodeInc/Roo-Code)
- [Roo Code Docs](https://docs.roocode.com/)

## 二、按 Agent 设计维度对比

## 1. 交互中心

### Claude Code

- 终端 REPL/TUI 优先
- REPL 不是壳，而是运行时驾驶舱
- 状态中心、setup flow、remote/bridge 都围绕会话展开

### Cline

- IDE 面板优先
- 强调你在编辑器里实时看它一步步做事
- 审批与自动化都服务于 IDE 内体验

### Roo Code

- 也是编辑器优先
- 但比 Cline 更强调模式与“开发团队角色化”

### 企业借鉴

如果企业主入口是：

- IDE：更适合参考 Cline / Roo Code 的交互形态
- Web / CLI / 多入口统一：更适合参考 Claude Code 的运行时和状态设计

## 2. 运行时抽象

### Claude Code

核心抽象是：

- query loop
- ToolUseContext
- 消息闭环
- 状态中心

它把 Agent 看成运行时。

### Cline

核心抽象更偏：

- 任务执行
- 模式切换
- 工具审批
- 用户可随时干预

它更像“以执行和审批为中心的 agent”。

### Roo Code

核心抽象更偏：

- modes
- custom modes
- agent team / cloud workflows

它更像“以角色/模式 orchestration 为中心的 agent”。

### 企业借鉴

如果你在设计企业平台层，Claude Code 的 runtime-first 思路更值得借鉴；如果你在设计 IDE 侧体验层，Cline/Roo Code 的交互抽象更值得借鉴。

## 3. 权限模型

### Claude Code

权限更前置：

- 不是只在执行前审批
- 而是先构建权限上下文，再决定模型可见能力集合

### Cline

权限更强调：

- approval-required
- auto-approve
- YOLO mode
- 对 reads / writes / commands / browser / MCP 做粒度控制

### Roo Code

也有较强的模式和可控执行语义，但更强调模式/角色差异而不是纯审批开关。

### 企业借鉴

企业内部治理最该借鉴的是：

- Claude Code 的“权限前置到能力暴露层”
- Cline 的“审批粒度清晰、用户心智明确”

最好不要二选一，而是组合借鉴。

## 4. 状态设计

### Claude Code

状态非常重，而且是显式的：

- 会话
- 任务
- agent
- MCP
- plugins
- remote / bridge
- notifications

### Cline

更多是“IDE 中当前任务执行状态”的感觉。

### Roo Code

状态更偏“模式/角色/团队工作流”。

### 企业借鉴

如果你的企业 Agent 有：

- 长会话
- 后台任务
- 多入口客户端
- 多 Agent

那 Claude Code 式的统一状态模型更有参考价值。

## 5. 扩展架构

### Claude Code

扩展层非常平台化：

- built-in commands
- skills
- plugins
- workflows
- MCP tools/resources/skills

最终都统一进入注册中心治理。

### Cline

也支持 MCP，扩展能力已经很强，但整体仍更偏“IDE 中执行型 agent”的扩展。

### Roo Code

支持 MCP、Modes、Custom Modes、Cloud/Router 等，扩展重点更偏“角色化与产品能力扩展”。

### 企业借鉴

如果企业内部需要建设“长期可治理的扩展生态”，Claude Code 的统一注册中心思路更适合做底座参考。

## 三、谁更像你要做的东西

## 如果你要做 IDE 内 coding copilot

优先参考：

- `Cline`
- `Roo Code`

因为它们的交互形态和用户心智更贴近编辑器工作流。

## 如果你要做企业内部 Agent 平台

优先参考：

- `Claude Code`

因为它在运行时、权限、状态、扩展治理上更像平台底座。

## 如果你要做“团队型 Agent 套件”

优先参考：

- `Roo Code`

因为它的模式和角色化设计更强。

## 如果你要做“强审批、可控自动化”

优先参考：

- `Cline`

因为它在审批、auto-approve、YOLO 的产品语义上更直接。

## 四、企业内部最推荐的借鉴组合

我更建议企业不要只借鉴其中一个，而是组合借鉴。

## 组合建议

### 运行时与平台治理

借鉴 `Claude Code`

拿来做：

- runtime loop
- 状态中心
- 权限前置
- 扩展注册中心

### 用户可控自动化体验

借鉴 `Cline`

拿来做：

- 审批分级
- auto-approve 策略
- 用户可理解的安全模式

### 团队角色与工作流模式

借鉴 `Roo Code`

拿来做：

- 模式化角色
- 团队工作流入口
- 组织级定制模式

## 五、适合汇报时怎么讲

你可以直接用下面这段作为汇报附录总结：

“从 Agent 设计角度看，Claude Code、Cline 和 Roo Code 分别代表了三种不同重心。Cline 更强调人在回路与审批控制，Roo Code 更强调模式化与团队化体验，Claude Code 更强调运行时、权限、状态和扩展治理。对于企业内部 Agent 平台建设，我们建议优先借鉴 Claude Code 的运行时与治理设计，同时吸收 Cline 的审批体验设计和 Roo Code 的模式化组织设计，形成更适合企业场景的组合方案。”

## 六、可直接复制到 PPT 的对比页

标题建议：

`Claude Code / Cline / Roo Code：Agent 设计重心对比`

你可以直接放下面这张表：

| 维度 | Claude Code | Cline | Roo Code |
|---|---|---|---|
| 交互中心 | 终端 REPL/TUI | IDE 面板 | IDE 面板 |
| 运行时抽象 | query loop / runtime-first | 执行 + 审批 | 模式/角色驱动 |
| 权限模型 | 权限前置 | 审批/auto-approve/YOLO | 模式化可控执行 |
| 状态设计 | 重状态中心 | 任务执行导向 | 模式与团队导向 |
| 扩展设计 | 平台统一收口 | IDE agent 扩展 | 模式 + MCP + Cloud |
| 最适合借鉴 | 平台底座 | 可控自动化体验 | 团队角色化设计 |

## 七、源码与官方资料参考

### Claude Code

- 本仓库源码：
  - [`src/query.ts`](/d:/Code/learn-claude/claude-code-rev/src/query.ts)
  - [`src/Tool.ts`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts)
  - [`src/state/AppStateStore.ts`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts)
  - [`src/commands.ts`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts)

### Cline

- [Cline GitHub](https://github.com/cline/cline)
- [Cline Auto Approve](https://docs.cline.bot/features/auto-approve)
- [Cline Interactive Mode](https://docs.cline.bot/cline-cli/interactive-mode)

### Roo Code

- [Roo Code GitHub](https://github.com/RooCodeInc/Roo-Code)
- [Roo Code Docs](https://docs.roocode.com/)
