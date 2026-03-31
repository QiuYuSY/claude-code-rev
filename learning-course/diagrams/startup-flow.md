# 启动链路图

## 主图

```text
package.json
  └─ dev/start/version
      └─ src/bootstrap-entry.ts
          ├─ ensureBootstrapMacro()
          └─ import('./entrypoints/cli.tsx')
              └─ src/entrypoints/cli.tsx
                  ├─ fast-path: --version
                  ├─ fast-path: bridge / daemon / bg / template jobs / runners
                  ├─ fast-path: special MCP host modes
                  └─ full-path
                      ├─ startCapturingEarlyInput()
                      ├─ import('../main.js')
                      └─ main()
                          └─ src/main.tsx
                              ├─ interactive / non-interactive mode detection
                              ├─ early settings loading
                              ├─ init() in preAction hook
                              ├─ permission context initialization
                              ├─ setup() + commands loading + agent loading
                              ├─ bundled plugins / bundled skills registration
                              └─ launchRepl() / headless path
                                  └─ commands.ts / tools.ts / query.ts / REPL
```

## 这张图想表达什么

### 1. 入口是分层的

这个系统不是“一个入口文件通吃全部模式”，而是把：

- 最早期 bootstrap
- CLI 分流
- 重型初始化
- 交互或 headless 运行

拆成了不同层级。

### 2. `cli.tsx` 是分流器，不是业务层

很多学习者第一次看到 `src/entrypoints/cli.tsx`，会误以为这就是主业务入口。实际上它更像是一个流量网关，只负责：

- 判断是否能快速返回
- 判断是否走专用模式
- 判断是否需要完整运行时

### 3. `main.tsx` 是启动编排器

`main.tsx` 的核心价值不在“有多少业务逻辑”，而在于它控制了：

- 初始化顺序
- 并行加载时机
- 交互模式与 headless 模式的分歧点

## 设计收益

- 轻量命令不会被重量初始化拖慢
- 各种特殊模式可以独立演化
- 初始化顺序可被显式维护

## 设计代价

- 分层越多，理解入口越需要全局视角
- `main.tsx` 容易变成单点复杂度中心

## 复盘问题

1. 为什么 `--version` 应该尽量停留在 `cli.tsx`？
2. 为什么 bundled skills / bundled plugins 要在 `getCommands()` 之前注册？
3. 如果只有一个总入口文件，这张图会在哪些地方坍塌？
