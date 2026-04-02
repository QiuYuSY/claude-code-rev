$ErrorActionPreference = 'Stop'
$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$output = Join-Path $PSScriptRoot 'course-data.js'
$docs = @(
  [ordered]@{ id='tracks-agent-fundamentals'; title='Agent 设计基础课'; category='主线'; group='tracks'; level='入门-中级'; time='60-90 分钟'; href='../tracks/agent-fundamentals/README.md'; summary='先建立 Agent 设计框架，再把概念映射回 Claude Code。'; tags=@('agent','loop','planning','memory'); next=@('tracks-beginner-track'); path='tracks/agent-fundamentals/README.md' },
  [ordered]@{ id='tracks-beginner-track'; title='小白友好版入门路径'; category='主线'; group='tracks'; level='入门'; time='45-60 分钟'; href='../tracks/beginner-track/README.md'; summary='先建立感觉，不要一上来被大工程劝退。'; tags=@('beginner','route','intro'); next=@('tracks-00-orientation'); path='tracks/beginner-track/README.md' },
  [ordered]@{ id='tracks-00-orientation'; title='预备课：认知迁移'; category='主线'; group='tracks'; level='入门-中级'; time='30-45 分钟'; href='../tracks/00-orientation/README.md'; summary='如果你懂别的 Agent，但不懂 Claude Code，从这里迁移心智模型。'; tags=@('orientation','comparison','glossary'); next=@('course-01-startup-and-commands'); path='tracks/00-orientation/README.md' },
  [ordered]@{ id='course-01-startup-and-commands'; title='第一课：启动链路与命令系统'; category='正式课程'; group='course'; level='中级'; time='60 分钟'; href='../course/01-startup-and-commands/README.md'; summary='理解 Claude Code 如何分层启动，以及命令系统如何统一装配。'; tags=@('startup','commands'); next=@('course-02-tools-and-query-loop'); path='course/01-startup-and-commands/README.md' },
  [ordered]@{ id='course-02-tools-and-query-loop'; title='第二课：工具抽象与 Query Loop'; category='正式课程'; group='course'; level='中级-深读'; time='75-90 分钟'; href='../course/02-tools-and-query-loop/README.md'; summary='理解工具系统、消息闭环和 query loop 作为运行时心脏的意义。'; tags=@('tool','query','runtime'); next=@('course-03-repl-ink-and-state'); path='course/02-tools-and-query-loop/README.md' },
  [ordered]@{ id='course-03-repl-ink-and-state'; title='第三课：REPL、Ink 与状态管理'; category='正式课程'; group='course'; level='中级'; time='60-75 分钟'; href='../course/03-repl-ink-and-state/README.md'; summary='理解 REPL 为什么是运行时驾驶舱，以及状态中心为何关键。'; tags=@('repl','state','ui'); next=@('course-04-permissions-messages-and-context'); path='course/03-repl-ink-and-state/README.md' },
  [ordered]@{ id='course-04-permissions-messages-and-context'; title='第四课：权限、消息与上下文拼装'; category='正式课程'; group='course'; level='中级'; time='60-75 分钟'; href='../course/04-permissions-messages-and-context/README.md'; summary='理解权限、消息、上下文如何一起构成运行时边界。'; tags=@('permission','message','context'); next=@('course-05-mcp-plugins-and-skills'); path='course/04-permissions-messages-and-context/README.md' },
  [ordered]@{ id='course-05-mcp-plugins-and-skills'; title='第五课：MCP、插件与 Skills'; category='正式课程'; group='course'; level='中级-深读'; time='60-75 分钟'; href='../course/05-mcp-plugins-and-skills/README.md'; summary='理解多来源扩展如何统一收口成平台化能力。'; tags=@('mcp','plugin','skills'); next=@('course-06-restored-source-reading'); path='course/05-mcp-plugins-and-skills/README.md' },
  [ordered]@{ id='course-06-restored-source-reading'; title='第六课：恢复版源码阅读方法'; category='正式课程'; group='course'; level='中级'; time='45-60 分钟'; href='../course/06-restored-source-reading/README.md'; summary='学习如何区分架构主干与兼容噪音，避免被恢复版细节带偏。'; tags=@('restored','reading','review'); next=@('extras-agent-design-patterns'); path='course/06-restored-source-reading/README.md' },
  [ordered]@{ id='extras-example-thread'; title='固定案例线'; category='辅助'; group='extras'; level='入门-中级'; time='15-20 分钟'; href='../extras/example-thread/README.md'; summary='用一个固定案例把整套课程串起来，减少模块割裂感。'; tags=@('case','thread'); next=@('extras-agent-design-patterns'); path='extras/example-thread/README.md' },
  [ordered]@{ id='extras-agent-design-patterns'; title='Agent 设计模式总结'; category='辅助'; group='extras'; level='中级'; time='30-45 分钟'; href='../extras/agent-design-patterns/README.md'; summary='把 Claude Code 的实现提炼成可迁移的方法，而不是只停留在案例理解。'; tags=@('pattern','methodology'); next=@('extras-stop-points'); path='extras/agent-design-patterns/README.md' },
  [ordered]@{ id='extras-do-not-start-here'; title='先别从这里开始'; category='辅助'; group='extras'; level='入门'; time='5 分钟'; href='../extras/do-not-start-here.md'; summary='避免从最复杂的文件开始，把自己第一天就劝退。'; tags=@('beginner','avoid'); next=@('extras-stop-points'); path='extras/do-not-start-here.md' },
  [ordered]@{ id='extras-stop-points'; title='学到哪里可以先停'; category='辅助'; group='extras'; level='入门'; time='5 分钟'; href='../extras/stop-points.md'; summary='告诉你学到哪里已经足够，不必强迫自己一口气读完整套课。'; tags=@('stop','milestone'); next=@('extras-enterprise'); path='extras/stop-points.md' },
  [ordered]@{ id='extras-enterprise'; title='企业汇报材料包'; category='汇报'; group='extras'; level='中级'; time='30-45 分钟'; href='../extras/07-enterprise-agent-report/README.md'; summary='把 Claude Code 的设计翻译成企业内部可复用的汇报语言。'; tags=@('enterprise','report'); next=@(); path='extras/07-enterprise-agent-report/README.md' }
)
$groups = @([ordered]@{ id='tracks'; title='学习主线' }, [ordered]@{ id='course'; title='正式课程' }, [ordered]@{ id='extras'; title='辅助与扩展' })
$routes = @(
  [ordered]@{ title='先学 Agent 设计'; badge='路线'; tone='warm'; start='tracks-agent-fundamentals'; summary='先建立 Agent 的核心概念，再回看 Claude Code 的真实实现。'; steps=@('Agent 设计基础课','固定案例线','小白友好版入门路径','正式课程') },
  [ordered]@{ title='我是小白，先建立感觉'; badge='路线'; tone='cool'; start='tracks-beginner-track'; summary='先理解 Claude Code 是什么、一次请求如何流动、先看什么先跳过什么。'; steps=@('小白友好版入门路径','Agent 设计基础课','再回来选路线') },
  [ordered]@{ title='我懂别的 Agent，只是不懂 Claude Code'; badge='路线'; tone='cool'; start='tracks-00-orientation'; summary='先做认知迁移，再看 Claude Code 的实现落点。'; steps=@('预备课','Agent 设计基础课','正式课程') },
  [ordered]@{ title='系统读源码'; badge='源码'; tone='warm'; start='course-01-startup-and-commands'; summary='从启动链路、query loop、REPL 状态、权限消息到扩展架构的完整精读。'; steps=@('启动链路','query loop','REPL 与状态','权限与消息','扩展架构','恢复版阅读方法') },
  [ordered]@{ title='做企业内部汇报'; badge='汇报'; tone='warm'; start='extras-enterprise'; summary='直接进入企业汇报材料包，把 Claude Code 的经验翻译成平台与治理语言。'; steps=@('主报告','PPT 提纲版','管理层 1 页摘要','技术评审版','竞品对比附录') }
)
$stopPoints = @(
  [ordered]@{ title='只学 Agent 原理'; badge='建议节奏'; tone='cool'; text='读完 Agent 基础课，你已经能解释 Agent loop、tool、planning、memory、HITL 和 multi-agent 的关系。' },
  [ordered]@{ title='够用就停'; badge='推荐停点'; tone='warm'; text='读完 beginner-track + 正式课程前 3 课，你已经能理解 Claude Code 的主骨架，不必强迫自己一口气读完整套。' },
  [ordered]@{ title='做源码分析'; badge='建议节奏'; tone='cool'; text='读完正式课程 1 到 6 课，再配合图解和设计模式总结，就已经具备做结构化源码复盘的能力。' },
  [ordered]@{ title='做企业汇报'; badge='推荐停点'; tone='warm'; text='如果目标是企业内部方案汇报，可以直接读汇报材料包，不必强求先看完整个源码课程。' }
)
$diagrams = @(
  [ordered]@{ title='启动链路图'; href='../extras/diagrams/startup-flow.md'; summary='从 package.json 到 bootstrap、cli 分流，再到 main 与 commands 的整体结构。' },
  [ordered]@{ title='运行时循环图'; href='../extras/diagrams/runtime-loop.md'; summary='输入、messages、query、tools、继续决策如何形成 Agent runtime 闭环。' },
  [ordered]@{ title='扩展机制图'; href='../extras/diagrams/extension-architecture.md'; summary='MCP、插件、Skills、Workflows 等多来源能力如何统一进入注册中心。' }
)
$cleanDocs = @()
foreach ($doc in $docs) {
  $path = Join-Path $root $doc.path
  $content = [string](Get-Content $path -Raw -Encoding UTF8)
  $cleanDocs += [PSCustomObject]@{
    id = $doc.id
    title = $doc.title
    category = $doc.category
    group = $doc.group
    level = $doc.level
    time = $doc.time
    href = $doc.href
    summary = $doc.summary
    tags = $doc.tags
    next = $doc.next
    content = $content
  }
}
$data = [PSCustomObject]@{
  groups = $groups
  routes = $routes
  stopPoints = $stopPoints
  diagrams = $diagrams
  docs = $cleanDocs
}
$json = $data | ConvertTo-Json -Depth 8 -Compress
Set-Content -Path $output -Value ("window.COURSE_DATA = $json;") -Encoding UTF8
Write-Output 'rebuilt course-data.js'
