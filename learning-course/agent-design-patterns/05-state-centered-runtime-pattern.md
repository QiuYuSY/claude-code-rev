# State-Centered Interactive Runtime Pattern

## 解决什么问题

长期会话系统的复杂度不能散在各组件和各模块里。

## 模式概述

用统一状态中心承载：

- 会话状态
- 任务状态
- 权限状态
- 扩展状态

## Claude Code 如何实现

核心落点：

- `src/state/AppStateStore.ts`

## 优势

- 跨模块联动更容易

## 代价

- 状态中心会膨胀

## 适用场景

- REPL / IDE / Web 这类长期交互应用

## 不适用场景

- 短命单次命令工具

## 反例

如果状态散落各处，任务、权限、插件和 UI 很快会互相打架。
