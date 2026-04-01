# Extension Registry Pattern

## 解决什么问题

多来源扩展一多，系统会很快失控。

## 模式概述

不管能力来自哪里，最终都进入统一注册中心治理。

## Claude Code 如何实现

核心落点：

- `src/commands.ts`
- `src/services/mcp/client.ts`
- `src/utils/plugins/loadPluginCommands.ts`

## 优势

- 可统一过滤、排序、治理

## 代价

- 可见性排查链会变长

## 适用场景

- 平台化 Agent
- 插件 / MCP / Skills 并存

## 不适用场景

- 完全封闭、固定功能工具

## 反例

如果每种扩展各搞一套注册逻辑，最后用户和模型看到的能力集合都会变乱。
