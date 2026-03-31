# 启动流程分析

## 主流程

```text
package.json
  -> src/bootstrap-entry.ts
      -> src/entrypoints/cli.tsx
          -> src/main.tsx
              -> run() / preAction init
                  -> permissions / setup / commands / agents / REPL
```

## 第 1 层：`package.json`

这里决定了用户输入命令后，进程首先进入哪里。

关键点不是脚本名字，而是它们统一指向了 `src/bootstrap-entry.ts`，这说明：

- 项目作者有意避免把业务主文件暴露成直接入口
- 希望所有运行模式先经过统一 bootstrap

## 第 2 层：`src/bootstrap-entry.ts`

文件内容极小：

- 执行 `ensureBootstrapMacro()`
- 动态导入 `./entrypoints/cli.tsx`

### 为什么这层要这么薄

标准回答：
因为这层会被所有路径共享。一旦这里太重，所有命令都会一起变慢。

### 这层最值得学的点

不是“逻辑多”，而是“逻辑克制”。

## 第 3 层：`src/entrypoints/cli.tsx`

这里是第一道真正的决策层。

它负责判断：

- 有没有简单 flag 可以快速返回
- 有没有特殊模式应进入独立路径
- 什么时候必须加载完整运行时

### 典型 fast-path

- `--version`
- `--dump-system-prompt`
- Chrome / computer-use MCP host 模式
- `remote-control`
- `daemon`
- `ps/logs/attach/kill`
- template job 模式
- environment/self-hosted runner

### 为什么这些逻辑要在这里

标准回答：
因为它们都是“可以在完整 CLI 之前独立完成”的路径。把它们拦在前面，能显著减少无效初始化。

## 第 4 层：`src/main.tsx`

只有 full-path 才会进到这里。

它负责：

- 再次判断 interactive / non-interactive
- 设置 entrypoint 类型与 client type
- 提前加载 settings
- 在 `preAction` 中执行 `init()`
- 初始化权限上下文
- 提前注册 bundled plugins / skills
- 并行启动 `setup()`、`getCommands()`、`getAgentDefinitions...`

### 关键认识

`main.tsx` 不是简单入口，而是“初始化编排器”。

## 第 5 层：`src/commands.ts`

这是命令装配层。

它要收集：

- 内建命令
- skill dir commands
- plugin commands
- plugin skills
- bundled skills
- built-in plugin skills
- workflows
- dynamic skills

### 为什么它重要

因为真正要交给系统使用的不是“定义过的命令”，而是“按当前环境装配后可用的命令”。

## 这一整套设计在解决什么问题

### 问题 1：启动慢

解决方式：
入口分层 + fast-path + 动态导入。

### 问题 2：模式多

解决方式：
在 `cli.tsx` 做模式分流，在 `main.tsx` 做重量初始化。

### 问题 3：命令来源多

解决方式：
统一注册中心 + 按需装配。

## 阶段性总结

如果你只记一句话，应该记这句：

“Claude Code 先解决启动路径分流问题，再解决完整运行时装配问题，最后才解决命令统一暴露问题。”
