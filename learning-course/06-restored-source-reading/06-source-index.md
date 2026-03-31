# 源码索引表

## 这一课先读什么

推荐顺序：

1. 根目录 `README.md`
2. `shims/`
3. `vendor/`
4. 回看 3 张配套图解
5. 再回看前 5 课里的核心文件

## 关键材料

### 根目录 `README.md`

关注点：

- `Current status`：[`README.md:13`](/d:/Code/learn-claude/claude-code-rev/README.md:13)
- `Restored so far`：[`README.md:22`](/d:/Code/learn-claude/claude-code-rev/README.md:22)
- `Why this exists`：[`README.md:33`](/d:/Code/learn-claude/claude-code-rev/README.md:33)

为什么重要：
它定义了“这是 restored workspace，不是 pristine upstream”这个前提。

### `shims/`

关注点：

- 目录级认知，不是逐文件通读

为什么重要：
它提醒你哪些区域更像恢复工程和兼容层，而不是产品主干。

### `learning-course/diagrams/*`

关注点：

- [`startup-flow.md`](/d:/Code/learn-claude/claude-code-rev/learning-course/diagrams/startup-flow.md)
- [`runtime-loop.md`](/d:/Code/learn-claude/claude-code-rev/learning-course/diagrams/runtime-loop.md)
- [`extension-architecture.md`](/d:/Code/learn-claude/claude-code-rev/learning-course/diagrams/extension-architecture.md)

为什么重要：
它们帮助你从局部代码回到系统主干。

## 建议回看的核心文件

### 启动主干

- [`src/bootstrap-entry.ts`](/d:/Code/learn-claude/claude-code-rev/src/bootstrap-entry.ts)
- [`src/entrypoints/cli.tsx`](/d:/Code/learn-claude/claude-code-rev/src/entrypoints/cli.tsx)
- [`src/main.tsx`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx)

### 运行时主干

- [`src/Tool.ts`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts)
- [`src/tools.ts`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts)
- [`src/query.ts`](/d:/Code/learn-claude/claude-code-rev/src/query.ts)

### 交互与状态主干

- [`src/replLauncher.tsx`](/d:/Code/learn-claude/claude-code-rev/src/replLauncher.tsx)
- [`src/state/AppStateStore.ts`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts)

### 平台扩展主干

- [`src/services/mcp/client.ts`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts)
- [`src/utils/plugins/loadPluginCommands.ts`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts)
- [`src/commands.ts`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts)

## 阅读时要重点抓什么

### 重点 1：主干结构，而不是兼容细节

问自己：

- 这段代码是在表达产品能力，还是在补恢复缺口？

### 重点 2：抽象边界，而不是每个条件分支

问自己：

- 这里在定义什么边界？

### 重点 3：设计取舍，而不是“它能不能跑”

问自己：

- 这套设计的收益是什么，代价是什么？

## 建议重点看的“代码段”

这一课的重点不是具体几行代码，而是具体几类说明材料：

- `README.md` 里对 restored 性质的说明
- `shims/` 作为兼容层存在这一事实
- 3 张主干图解
- 前 5 课里每条主线的核心入口文件

## 阅读时要回答的问题

1. 哪些内容属于架构主干？
2. 哪些内容属于恢复版噪音？
3. 我最想借鉴的 5 个设计是什么？
4. 我最想重构的 5 个复杂度来源是什么？
