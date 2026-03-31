# 逐段精读：`mcp/client.ts -> loadPluginCommands.ts -> commands.ts`

这份文档按“先接外部协议，再生成本地扩展命令，最后统一注册中心收口”的顺序带你读第五课的关键文件。

---

## 一、`src/services/mcp/client.ts`

### 第一眼应该看什么

先抓这些锚点：

- `McpAuthError`
- `isMcpSessionExpiredError(...)`
- `getMcpToolTimeoutMs()`
- `buildMcpToolName(...)`
- `fetchMcpSkillsForClient`
- `persistToolResult(...)`

---

### 1. `McpAuthError`

这里专门定义了一个认证错误类型，而不是全都混在普通 Error 里。

### 为什么值得学

因为协议接入层必须能明确地区分：

- 普通执行错误
- 认证错误
- 会话过期错误

否则上层无法做正确恢复。

---

### 2. `isMcpSessionExpiredError(...)`

这个函数专门识别：

- HTTP 404
- JSON-RPC `-32001`

组合起来判断 “Session not found”。

### 为什么这说明设计成熟

因为作者没有只写 happy path，而是明确考虑了外部协议连接中的失效恢复问题。

---

### 3. `getMcpToolTimeoutMs()`

这里通过环境变量和默认值来控制 MCP tool call 超时。

### 为什么这重要

因为外部协议工具的延迟特征和本地工具不同，平台必须给它单独的运行时参数空间。

---

### 4. `supportsResources` 分支

源码里会看到：

- 如果 MCP server 支持 resources，就同时拉：
  - tools
  - commands
  - mcp skills
  - resources

而且必要时会自动补上：

- `ListMcpResourcesTool`
- `ReadMcpResourceTool`

### 这说明什么

说明 MCP 在 Claude Code 里不只是“远程工具调用”，而是一个完整的外部能力层：

- 有动作
- 有资源
- 还有模型可用技能

---

### 5. `persistToolResult(...)` 和 `runElicitationHooks(...)`

这两个点很值得注意。

它们说明：

- MCP tool result 可能需要落盘或持久化
- MCP tool call 可能触发额外交互流程

### 为什么这重要

因为平台型能力接入不能只考虑一次调用，还要考虑：

- 结果如何管理
- 失败如何恢复
- 用户交互如何补充

---

## 二、`src/utils/plugins/loadPluginCommands.ts`

### 第一眼应该看什么

先抓这几个函数：

- `collectMarkdownFiles(...)`
- `transformPluginSkillFiles(...)`
- `loadCommandsFromDirectory(...)`
- `createPluginCommand(...)`

---

### 1. `collectMarkdownFiles(...)`

它负责遍历插件目录并读取 markdown 文件，同时解析 frontmatter。

### 为什么这一步重要

因为插件系统在这里已经明确选择了：

- 文件系统即扩展边界
- markdown 即内容载体
- frontmatter 即元数据载体

---

### 2. `transformPluginSkillFiles(...)`

这个函数会对目录中出现 `SKILL.md` 的情况做特殊处理：

- 如果某目录下存在 skill 文件，就优先按 skill 处理

### 为什么这很关键

因为它说明“技能”和“普通插件命令”虽然共享一部分加载机制，但语义并不完全相同。

---

### 3. `loadCommandsFromDirectory(...)`

这个函数的主线很清楚：

1. 收集 markdown
2. 处理 skill 转换
3. 遍历每个文件
4. 交给 `createPluginCommand(...)`

### 这说明什么

说明插件命令不是“散落脚本”，而是一个清晰的编译式流程：

- 发现
- 规范化
- 生成

---

### 4. `createPluginCommand(...)`

这是插件命令系统最核心的函数。

它会处理：

- `description`
- `allowed-tools`
- `arguments`
- `when_to_use`
- `version`
- `displayName`
- `model`
- `effort`
- `disable-model-invocation`
- `user-invocable`
- `shell`

最终返回统一的 `Command` 结构。

### 为什么它很值得学

因为它把“插件内容”提升成了“平台统一命令抽象”。

这一步让后续系统就不需要关心命令来自哪里，只需要面对统一的 `Command`。

---

## 三、`src/commands.ts`

### 先看 `loadAllCommands(cwd)`

这个函数会并行收集：

- `getSkills(cwd)`
- `getPluginCommands()`
- `getWorkflowCommands(cwd)`

然后再与 `COMMANDS()` 合并。

### 为什么这个函数关键

因为它是平台收口的第一步：先把所有来源统一收集。

---

### 再看 `getCommands(cwd)`

它会做：

1. 读取 `loadAllCommands(cwd)` 的结果
2. 读取动态技能
3. 先做 availability + `isEnabled()` 过滤
4. 再把 dynamic skills 插回合适位置

### 这说明什么

这说明统一注册中心不是简单拼接，而是要负责：

- 收集
- 去重
- 过滤
- 排序插入

---

### 再看 `getMcpSkillCommands(...)` / `getSkillToolCommands(...)`

这一步更进一步说明：

- 命令视图
- 技能视图
- MCP 技能视图

这些并不是简单相等的集合。

### 为什么这很平台化

因为不同受众需要不同切面：

- 用户想看命令
- 模型想看技能
- 外部接入想看资源/工具

---

## 四、把三组文件串起来看

```text
mcp/client.ts
  -> 把外部协议能力接入本地运行时

loadPluginCommands.ts
  -> 把 markdown/frontmatter 内容生成统一 Command

commands.ts
  -> 把多来源能力收束成当前会话可见的统一命令/技能集合
```

## 这一套设计回答了什么更大的问题

回答：
它回答的是“当 AI 产品开始平台化时，如何让外部协议能力、本地扩展内容和模型可调用能力同时进入一个统一系统，而不是各搞各的”。

Claude Code 的答案是：

- MCP 解决协议接入
- 插件解决本地扩展
- Skills 解决模型入口
- 注册中心解决统一收口
