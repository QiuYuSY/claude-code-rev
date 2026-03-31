# 扩展机制图

## 主图

```text
                    +------------------+
                    | Built-in Commands|
                    +------------------+
                              |
                              v
                    +------------------+
                    |   COMMANDS()     |
                    +------------------+
                              |
   +--------------------------+---------------------------+
   |                          |                           |
   v                          v                           v
skill dirs              plugin commands             workflow commands
   |                          |                           |
   v                          v                           v
plugin skills           bundled skills            built-in plugin skills
   |                          |                           |
   +--------------------------+---------------------------+
                              |
                              v
                    +------------------+
                    | loadAllCommands()|
                    +------------------+
                              |
                              v
                    +------------------+
                    |  getCommands()   |
                    | availability     |
                    | isEnabled        |
                    | dynamic skills   |
                    +------------------+
                              |
                              v
                    +------------------+
                    | user command list|
                    +------------------+

MCP side:

MCP configs -> MCP clients -> MCP tools / MCP resources / MCP skills
                         └─ threaded into tool system and command-adjacent views
```

## 这张图想表达什么

### 1. 扩展来源很多，但出口要统一

Claude Code 的命令和技能不是来自单一来源。它们分别来自：

- 内建命令
- skills 目录
- plugin commands
- plugin skills
- bundled skills
- workflow commands
- dynamic skills
- 以及 MCP 侧的外部能力

### 2. `getCommands()` 是统一门面

它真正做的是把“多来源能力”收束成“当前会话可见能力”。

### 3. MCP 不只是命令扩展

MCP 还能引入：

- tools
- resources
- skills

所以它更像协议型能力层，而不是简单插件。

## 设计收益

- 平台扩展可以持续增长
- 各来源能力能共享过滤、排序和展示逻辑
- 更适合企业和生态化场景

## 设计代价

- 命令不可见问题会变成多链路排查
- 元信息质量控制要求高
- 初学者容易看不出哪些能力来自哪里

## 复盘问题

1. 为什么多来源能力最终必须汇总到统一注册中心？
2. 为什么 skills 和 commands 不能简单视为同一种东西？
3. MCP 为什么同时值得引入 tools 和 resources 两类抽象？
