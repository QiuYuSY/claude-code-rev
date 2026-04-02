window.COURSE_DATA = {
  groups: [
    { id: 'tracks', title: '学习主线' },
    { id: 'course', title: '正式课程' },
    { id: 'extras', title: '辅助与扩展' }
  ],
  routes: [
    { title: '先学 Agent 设计', badge: '路线', tone: 'warm', start: 'tracks-agent-fundamentals', summary: '先建立 Agent 的核心概念，再回看 Claude Code 的真实实现。', steps: ['Agent 设计基础课', '固定案例线', '小白友好版入门路径', '正式课程'] },
    { title: '我是小白，先建立感觉', badge: '路线', tone: 'cool', start: 'tracks-beginner-track', summary: '先理解 Claude Code 是什么、一次请求如何流动、先看什么先跳过什么。', steps: ['小白友好版入门路径', 'Agent 设计基础课', '再回来选路线'] },
    { title: '我懂别的 Agent，只是不懂 Claude Code', badge: '路线', tone: 'cool', start: 'tracks-00-orientation', summary: '先做认知迁移，再看 Claude Code 的实现落点。', steps: ['预备课', 'Agent 设计基础课', '正式课程'] },
    { title: '系统读源码', badge: '源码', tone: 'warm', start: 'course-01-startup-and-commands', summary: '从启动链路、query loop、REPL 状态、权限消息到扩展架构的完整精读。', steps: ['启动链路', 'query loop', 'REPL 与状态', '权限与消息', '扩展架构', '恢复版阅读方法'] },
    { title: '做企业内部汇报', badge: '汇报', tone: 'warm', start: 'extras-enterprise', summary: '直接进入企业汇报材料包，把 Claude Code 的经验翻译成平台与治理语言。', steps: ['主报告', 'PPT 提纲版', '管理层 1 页摘要', '技术评审版', '竞品对比附录'] }
  ],
  stopPoints: [
    { title: '只学 Agent 原理', badge: '建议节奏', tone: 'cool', text: '读完 Agent 基础课，你已经能解释 Agent loop、tools、planning、memory、HITL 和 multi-agent 的关系。' },
    { title: '够用就停', badge: '推荐停点', tone: 'warm', text: '读完 beginner-track + 正式课程前 3 课，你已经能理解 Claude Code 的主骨架，不必强迫自己一口气读完整套。' },
    { title: '做源码分析', badge: '建议节奏', tone: 'cool', text: '读完正式课程 1 到 6 课，再配合图解和设计模式总结，就已经具备做结构化源码复盘的能力。' },
    { title: '做企业汇报', badge: '推荐停点', tone: 'warm', text: '如果目标是企业内部方案汇报，可以直接读汇报材料包，不必强求先看完整个源码课程。' }
  ],
  diagrams: [
    { title: '启动链路图', href: '../extras/diagrams/startup-flow.md', summary: '从 package.json 到 bootstrap、cli 分流，再到 main 与 commands 的整体结构。' },
    { title: '运行时循环图', href: '../extras/diagrams/runtime-loop.md', summary: '输入、messages、query、tools、继续决策如何形成 Agent runtime 闭环。' },
    { title: '扩展机制图', href: '../extras/diagrams/extension-architecture.md', summary: 'MCP、插件、Skills、Workflows 等多来源能力如何统一进入注册中心。' }
  ],
  docs: [
    {
      id: 'tracks-agent-fundamentals',
      title: 'Agent 设计基础课',
      category: '主线',
      group: 'tracks',
      level: '入门-中级',
      time: '60-90 分钟',
      href: '../tracks/agent-fundamentals/README.md',
      summary: '先建立 Agent 设计框架，再把概念映射回 Claude Code。',
      tags: ['agent', 'loop', 'planning', 'memory'],
      next: ['tracks-beginner-track'],
      content: `# Agent 设计基础课

## 适合谁
- 真正想学 Agent 设计的人
- 想先理解方法，再回看源码的人

## 学完你会得到什么
- 能定义 Agent 和 Chatbot 的区别
- 能画出最小 Agent loop
- 能解释 tools、planning、memory、HITL、multi-agent 各自解决什么问题

## 推荐顺序
1. 什么是 Agent，和 Chatbot 有什么不同
2. Agent 的最小闭环：感知、决策、执行、反馈
3. Tools、Planning、Memory 各自解决什么问题
4. Human-in-the-loop、权限与安全为什么是核心设计
5. Single-Agent、Workflow、Multi-Agent 的区别
6. Claude Code 如何映射这些 Agent 概念

## 一句话总结
这条线是“Agent 设计课”，Claude Code 是案例；后面的正式课程才是“Claude Code 源码课”。`
    },
    {
      id: 'tracks-beginner-track',
      title: '小白友好版入门路径',
      category: '主线',
      group: 'tracks',
      level: '入门',
      time: '45-60 分钟',
      href: '../tracks/beginner-track/README.md',
      summary: '先建立感觉，不要一上来被大工程劝退。',
      tags: ['beginner', 'route', 'intro'],
      next: ['tracks-00-orientation'],
      content: `# 小白友好版入门路径

## 适合谁
- 害怕大工程源码的人
- 没系统学过 Agent 的人
- 先想搞清楚“这个项目到底在干嘛”的人

## 你会先弄清楚什么
1. Claude Code 是什么
2. 一次请求大致怎么流过系统
3. 只需要先懂哪 4 个核心概念
4. 先看什么、先跳过什么

## 推荐顺序
1. Claude Code 是什么
2. 一次请求，简单讲明白
3. 你只需要先懂的 4 个核心概念
4. 小白如何读这个仓库而不迷路
5. 7 天入门路线
6. 常见问题与误区

## 一句话总结
这条线不是让你立刻精读源码，而是先建立感觉，不被课程和工程复杂度劝退。`
    },
    {
      id: 'tracks-00-orientation',
      title: '预备课：认知迁移',
      category: '主线',
      group: 'tracks',
      level: '入门-中级',
      time: '30-45 分钟',
      href: '../tracks/00-orientation/README.md',
      summary: '如果你懂别的 Agent，但不懂 Claude Code，从这里迁移心智模型。',
      tags: ['orientation', 'comparison', 'glossary'],
      next: ['course-01-startup-and-commands'],
      content: `# 预备课：认知迁移

## 适合谁
- 已经接触过 Cline、Roo Code、LangGraph、AutoGen 等
- 想把熟悉的 Agent 概念映射到 Claude Code 的人

## 你会获得什么
- 知道 Claude Code 和其他 Agent 的差异
- 能区分 Command、Tool、Skill、AppState、query loop
- 能用一条端到端请求理解 Claude Code

## 推荐顺序
1. Claude Code 与其他 Agent 的差异地图
2. Claude Code 核心术语表
3. 一次完整用户请求的端到端 walkthrough
4. 学习检查表

## 一句话总结
这条线是在做“认知迁移”，不是在精读源码。`
    },
    {
      id: 'course-01-startup-and-commands',
      title: '第一课：启动链路与命令系统',
      category: '正式课程',
      group: 'course',
      level: '中级',
      time: '60 分钟',
      href: '../course/01-startup-and-commands/README.md',
      summary: '理解 Claude Code 如何分层启动，以及命令系统如何统一装配。',
      tags: ['startup', 'commands'],
      next: ['course-02-tools-and-query-loop'],
      content: `# 第一课：启动链路与命令系统

## 一句话总结
Claude Code 先解决启动分流问题，再解决完整运行时装配问题，最后才解决命令统一暴露问题。

## 你会学到什么
- 为什么入口不是直接 main.tsx
- 为什么 cli.tsx 像分流器
- 为什么 commands.ts 是注册中心

## 推荐阅读
1. 课程概览
2. 启动流程分析
3. 逐段精读：bootstrap-entry.ts -> cli.tsx -> main.tsx -> commands.ts
4. 设计分析
5. 练习与输出
6. 源码索引
7. 学习检查表`
    },
    {
      id: 'course-02-tools-and-query-loop',
      title: '第二课：工具抽象与 Query Loop',
      category: '正式课程',
      group: 'course',
      level: '中级-深读',
      time: '75-90 分钟',
      href: '../course/02-tools-and-query-loop/README.md',
      summary: '理解工具系统、消息闭环和 query loop 作为运行时心脏的意义。',
      tags: ['tool', 'query', 'runtime'],
      next: ['course-03-repl-ink-and-state'],
      content: `# 第二课：工具抽象与 Query Loop

## 一句话总结
Claude Code 的核心不是调用模型，而是维护一个带工具闭环的 query loop。

## 你会学到什么
- ToolUseContext 为什么这么重
- 为什么工具结果必须回到消息系统
- 为什么 query loop 更像状态机而不是普通函数

## 推荐阅读
1. 课程概览
2. 工具系统与 Query Loop 流程分析
3. 逐段精读：Tool.ts -> tools.ts -> query.ts
4. 设计分析
5. 练习与输出
6. 源码索引
7. 学习检查表`
    },
    {
      id: 'course-03-repl-ink-and-state',
      title: '第三课：REPL、Ink 与状态管理',
      category: '正式课程',
      group: 'course',
      level: '中级',
      time: '60-75 分钟',
      href: '../course/03-repl-ink-and-state/README.md',
      summary: '理解 REPL 为什么是运行时驾驶舱，以及状态中心为何关键。',
      tags: ['repl', 'state', 'ui'],
      next: ['course-04-permissions-messages-and-context'],
      content: `# 第三课：REPL、Ink 与状态管理

## 一句话总结
REPL 是运行时驾驶舱，不是输入框；AppState 是长期会话状态总表，不是普通页面状态。

## 你会学到什么
- launchRepl 为什么故意很薄
- App.tsx 为什么是根容器
- 为什么终端产品也会需要前端式状态中心

## 推荐阅读
1. 课程概览
2. REPL 与状态系统流程分析
3. 逐段精读：replLauncher.tsx -> App.tsx -> interactiveHelpers.tsx -> AppStateStore.ts
4. 设计分析
5. 练习与输出
6. 源码索引
7. 学习检查表`
    },
    {
      id: 'course-04-permissions-messages-and-context',
      title: '第四课：权限、消息与上下文拼装',
      category: '正式课程',
      group: 'course',
      level: '中级',
      time: '60-75 分钟',
      href: '../course/04-permissions-messages-and-context/README.md',
      summary: '理解权限、消息、上下文如何一起构成运行时边界。',
      tags: ['permission', 'message', 'context'],
      next: ['course-05-mcp-plugins-and-skills'],
      content: `# 第四课：权限、消息与上下文拼装

## 一句话总结
权限、消息、上下文不是三个散功能，而是同一套运行时边界的三个侧面。

## 你会学到什么
- 为什么权限必须前置到能力暴露层
- 为什么 message 是系统主线，不只是聊天记录
- 为什么 context assembly 不能散在各处

## 推荐阅读
1. 课程概览
2. 流程分析
3. 逐段精读：permissionSetup.ts -> messages.ts -> context.ts
4. 设计分析
5. 练习与输出
6. 源码索引
7. 学习检查表`
    },
    {
      id: 'course-05-mcp-plugins-and-skills',
      title: '第五课：MCP、插件与 Skills',
      category: '正式课程',
      group: 'course',
      level: '中级-深读',
      time: '60-75 分钟',
      href: '../course/05-mcp-plugins-and-skills/README.md',
      summary: '理解多来源扩展如何统一收口成平台化能力。',
      tags: ['mcp', 'plugin', 'skills'],
      next: ['course-06-restored-source-reading'],
      content: `# 第五课：MCP、插件与 Skills

## 一句话总结
平台化的关键不是支持扩展，而是统一治理扩展。

## 你会学到什么
- MCP、插件、Skills 各自解决什么问题
- 为什么多来源扩展必须回到统一注册中心
- 为什么“出口统一”比“来源统一”更重要

## 推荐阅读
1. 课程概览
2. MCP、插件与 Skills 流程分析
3. 逐段精读：mcp/client.ts -> loadPluginCommands.ts -> commands.ts
4. 设计分析
5. 练习与输出
6. 源码索引
7. 学习检查表`
    },
    {
      id: 'course-06-restored-source-reading',
      title: '第六课：恢复版源码阅读方法',
      category: '正式课程',
      group: 'course',
      level: '中级',
      time: '45-60 分钟',
      href: '../course/06-restored-source-reading/README.md',
      summary: '学习如何区分架构主干与兼容噪音，避免被恢复版细节带偏。',
      tags: ['restored', 'reading', 'review'],
      next: ['extras-agent-design-patterns'],
      content: `# 第六课：恢复版源码阅读方法

## 一句话总结
恢复版仓库要先抓主干，再辨噪音，最后做自己的设计评估。

## 你会学到什么
- 如何区分架构主干与兼容噪音
- 如何使用图解和课程主线重新组织理解
- 如何对 Claude Code 做正反评价

## 推荐阅读
1. 课程概览
2. 恢复版仓库阅读与复盘流程分析
3. 逐段精读：README.md -> shims/ -> 主干图解
4. 设计分析
5. 练习与输出
6. 源码索引
7. 学习检查表`
    },
    {
      id: 'extras-example-thread',
      title: '固定案例线',
      category: '辅助',
      group: 'extras',
      level: '入门-中级',
      time: '15-20 分钟',
      href: '../extras/example-thread/README.md',
      summary: '用一个固定案例把整套课程串起来，减少模块割裂感。',
      tags: ['case', 'thread'],
      next: ['extras-agent-design-patterns'],
      content: `# 固定案例线

## 固定案例
案例任务：让 Claude Code 帮我分析一个仓库的命令系统是怎么组织的。

## 这条线解决什么问题
- 让课程不再只是模块陈列
- 帮你把“一个真实任务”映射到不同课程里

## 阅读顺序
1. 案例概览
2. 这个案例在课程各模块里分别发生了什么
3. 如果换成修改一个函数，会多出什么复杂度

## 一句话总结
这条线不是独立课程，而是帮助你把所有课程内容串成一条真实任务故事线。`
    },
    {
      id: 'extras-agent-design-patterns',
      title: 'Agent 设计模式总结',
      category: '辅助',
      group: 'extras',
      level: '中级',
      time: '30-45 分钟',
      href: '../extras/agent-design-patterns/README.md',
      summary: '把 Claude Code 的实现提炼成可迁移的方法，而不是只停留在案例理解。',
      tags: ['pattern', 'methodology'],
      next: ['extras-stop-points'],
      content: `# Agent 设计模式总结

## 你会看到什么
- Agent Loop Pattern
- Tool Orchestration Pattern
- Permission-First Pattern
- Unified Message Model Pattern
- State-Centered Runtime Pattern
- Extension Registry Pattern
- 常见反例

## 这组材料为什么重要
它把“读懂 Claude Code”升级成“提炼可迁移方法”。

## 一句话总结
从案例理解，升级到方法抽象。`
    },
    {
      id: 'extras-do-not-start-here',
      title: '先别从这里开始',
      category: '辅助',
      group: 'extras',
      level: '入门',
      time: '5 分钟',
      href: '../extras/do-not-start-here.md',
      summary: '避免从最复杂的文件开始，把自己第一天就劝退。',
      tags: ['beginner', 'avoid'],
      next: ['extras-stop-points'],
      content: `# 先别从这里开始

## 不建议的起点
- 不要先啃 main.tsx
- 不要先啃 query.ts
- 不要先钻 shims/
- 不要试图第一遍看懂所有 feature gate

## 为什么
因为这些区域都需要你先有主线概念，否则只会被复杂度压住。

## 更好的顺序
先走 Agent 主线或小白路线，再回来看这些核心文件。`
    },
    {
      id: 'extras-stop-points',
      title: '学到哪里可以先停',
      category: '辅助',
      group: 'extras',
      level: '入门',
      time: '5 分钟',
      href: '../extras/stop-points.md',
      summary: '告诉你学到哪里已经足够，不必强迫自己一口气读完整套课。',
      tags: ['stop', 'milestone'],
      next: ['extras-enterprise'],
      content: `# 学到哪里可以先停

## 停点 1
读完 agent-fundamentals，你已经能理解 Agent 核心原理。

## 停点 2
读完 beginner-track，你已经能不迷路地看这个仓库。

## 停点 3
读完正式课程前 3 课，你已经能理解 Claude Code 主骨架。

## 停点 4
读完 1-6 课，你已经能做源码级分析。

## 停点 5
读完企业汇报材料包，你已经能做内部汇报。`
    },
    {
      id: 'extras-enterprise',
      title: '企业汇报材料包',
      category: '汇报',
      group: 'extras',
      level: '中级',
      time: '30-45 分钟',
      href: '../extras/07-enterprise-agent-report/README.md',
      summary: '把 Claude Code 的设计翻译成企业内部可复用的汇报语言。',
      tags: ['enterprise', 'report'],
      next: [],
      content: `# 企业汇报材料包

## 适合谁
- 需要做企业内部 Agent 方案汇报的人
- 需要做管理层摘要、技术评审的人

## 包含什么
1. 主报告
2. PPT 提纲版
3. 管理层 1 页摘要版
4. 技术评审版
5. Claude Code vs Cline vs Roo Code 对比附录

## 一句话总结
这不是源码学习讲义，而是把 Claude Code 的设计翻译成企业平台与治理语言。`
    }
  ]
};
