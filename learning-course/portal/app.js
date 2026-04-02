const routes = [
  {
    id: "agent",
    title: "先学 Agent 设计",
    tone: "warm",
    summary: "先建立 Agent 的核心概念，再回看 Claude Code 的真实实现。",
    outcome: "获得一套 Agent 设计框架，而不是只记一堆函数名。",
    href: "../tracks/agent-fundamentals/README.md",
    steps: [
      "Agent 设计基础课",
      "固定案例线",
      "小白友好版入门路径",
      "正式课程",
    ],
  },
  {
    id: "beginner",
    title: "我是小白，先建立感觉",
    tone: "cool",
    summary: "先理解 Claude Code 是什么、一次请求如何流动、先看什么先跳过什么。",
    outcome: "不再被大工程源码直接劝退，先建立稳的心智模型。",
    href: "../tracks/beginner-track/README.md",
    steps: [
      "小白友好版入门路径",
      "Agent 设计基础课",
      "再回到课程首页选下一步",
    ],
  },
  {
    id: "migration",
    title: "我懂别的 Agent，只是不懂 Claude Code",
    tone: "cool",
    summary: "先做认知迁移，再看 Claude Code 的实现落点。",
    outcome: "把熟悉的 Agent 概念映射到 Claude Code，不会拿错类比。",
    href: "../tracks/00-orientation/README.md",
    steps: [
      "预备课",
      "Agent 设计基础课",
      "正式课程",
    ],
  },
  {
    id: "source",
    title: "系统读源码",
    tone: "warm",
    summary: "从启动链路、query loop、REPL 状态、权限消息到扩展架构的完整精读。",
    outcome: "能对 Claude Code 做结构化源码分析和设计评估。",
    href: "../course/01-startup-and-commands/README.md",
    steps: [
      "第一课：启动链路",
      "第二课：query loop",
      "第三课：REPL 与状态",
      "第四课：权限与消息",
      "第五课：扩展架构",
      "第六课：恢复版阅读方法",
    ],
  },
  {
    id: "enterprise",
    title: "做企业内部汇报",
    tone: "warm",
    summary: "直接进入企业汇报材料包，把 Claude Code 的经验翻译成平台与治理语言。",
    outcome: "适合管理层摘要、技术评审、方案论证。",
    href: "../extras/07-enterprise-agent-report/README.md",
    steps: [
      "主报告",
      "PPT 提纲版",
      "管理层 1 页摘要",
      "技术评审版",
      "Cline / Roo Code 对比附录",
    ],
  },
]

const plannerCards = [
  {
    title: "只学 Agent 原理",
    tone: "cool",
    text: "读完 Agent 基础课，你已经能解释 Agent loop、tool、planning、memory、HITL 和 multi-agent 的关系。",
  },
  {
    title: "够用就停",
    tone: "warm",
    text: "读完 beginner-track + 正式课程前 3 课，你已经能理解 Claude Code 的主骨架，不必强迫自己一口气读完整套。",
  },
  {
    title: "做源码分析",
    tone: "cool",
    text: "读完正式课程 1 到 6 课，再配合图解和设计模式总结，就已经具备做结构化源码复盘的能力。",
  },
  {
    title: "做企业汇报",
    tone: "warm",
    text: "如果目标是企业内部方案汇报，可以直接读汇报材料包，不必强求先看完整个源码课程。",
  },
]

const docs = [
  {
    title: "Agent 设计基础课",
    category: "主线",
    audience: "Agent 设计",
    level: "入门-中级",
    time: "60-90 分钟",
    href: "../tracks/agent-fundamentals/README.md",
    summary: "先学 Agent 核心概念，再把这些概念映射回 Claude Code。",
    bullets: ["Agent loop", "Tools / Planning / Memory", "HITL / Multi-Agent"],
  },
  {
    title: "小白友好版入门路径",
    category: "主线",
    audience: "小白",
    level: "入门",
    time: "45-60 分钟",
    href: "../tracks/beginner-track/README.md",
    summary: "先建立感觉，不要一上来被大工程源码和术语吓退。",
    bullets: ["一次请求如何流动", "先看什么", "先跳过什么"],
  },
  {
    title: "预备课：认知迁移",
    category: "主线",
    audience: "已有 Agent 背景",
    level: "入门-中级",
    time: "30-45 分钟",
    href: "../tracks/00-orientation/README.md",
    summary: "适合懂别的 Agent、但不懂 Claude Code 的读者。",
    bullets: ["Claude Code vs 其他 Agent", "术语表", "端到端 walkthrough"],
  },
  {
    title: "第一课：启动链路与命令系统",
    category: "正式课程",
    audience: "源码阅读",
    level: "中级",
    time: "60 分钟",
    href: "../course/01-startup-and-commands/README.md",
    summary: "理解 Claude Code 如何分层启动，以及命令系统如何统一装配。",
    bullets: ["bootstrap-entry", "cli.tsx", "commands.ts"],
  },
  {
    title: "第二课：工具抽象与 Query Loop",
    category: "正式课程",
    audience: "源码阅读",
    level: "中级-深读",
    time: "75-90 分钟",
    href: "../course/02-tools-and-query-loop/README.md",
    summary: "理解工具系统、消息闭环和 query loop 作为运行时心脏的意义。",
    bullets: ["ToolUseContext", "query.ts", "tool execution"],
  },
  {
    title: "第三课：REPL、Ink 与状态管理",
    category: "正式课程",
    audience: "源码阅读",
    level: "中级",
    time: "60-75 分钟",
    href: "../course/03-repl-ink-and-state/README.md",
    summary: "理解 REPL 为什么是运行时驾驶舱，而不是输入框。",
    bullets: ["AppState", "interactiveHelpers", "REPL"],
  },
  {
    title: "第四课：权限、消息与上下文拼装",
    category: "正式课程",
    audience: "源码阅读",
    level: "中级",
    time: "60-75 分钟",
    href: "../course/04-permissions-messages-and-context/README.md",
    summary: "理解权限、消息、上下文如何一起构成运行时边界。",
    bullets: ["permissionSetup", "messages", "context"],
  },
  {
    title: "第五课：MCP、插件与 Skills",
    category: "正式课程",
    audience: "源码阅读",
    level: "中级-深读",
    time: "60-75 分钟",
    href: "../course/05-mcp-plugins-and-skills/README.md",
    summary: "理解多来源扩展如何统一收口成平台化能力。",
    bullets: ["MCP client", "plugin loader", "commands registry"],
  },
  {
    title: "第六课：恢复版源码阅读方法",
    category: "正式课程",
    audience: "源码阅读",
    level: "中级",
    time: "45-60 分钟",
    href: "../course/06-restored-source-reading/README.md",
    summary: "学习如何区分架构主干与兼容噪音，避免被恢复版细节带偏。",
    bullets: ["README", "shims", "设计评估"],
  },
  {
    title: "固定案例线",
    category: "辅助",
    audience: "全部",
    level: "入门-中级",
    time: "15-20 分钟",
    href: "../extras/example-thread/README.md",
    summary: "用一个固定案例把整套课程串起来，减少模块割裂感。",
    bullets: ["仓库命令系统案例", "跨课映射", "编辑型变体案例"],
  },
  {
    title: "Agent 设计模式总结",
    category: "辅助",
    audience: "进阶",
    level: "中级",
    time: "30-45 分钟",
    href: "../extras/agent-design-patterns/README.md",
    summary: "把 Claude Code 的实现提炼成可迁移的方法，而不是只停留在案例理解。",
    bullets: ["Agent loop pattern", "Permission-first", "Extension registry"],
  },
  {
    title: "先别从这里开始",
    category: "辅助",
    audience: "小白",
    level: "入门",
    time: "5 分钟",
    href: "../extras/do-not-start-here.md",
    summary: "避免从最复杂的文件开始，把自己第一天就劝退。",
    bullets: ["不要先啃 main.tsx", "不要先啃 query.ts", "不要先钻 shims"],
  },
  {
    title: "学到哪里可以先停",
    category: "辅助",
    audience: "全部",
    level: "入门",
    time: "5 分钟",
    href: "../extras/stop-points.md",
    summary: "告诉你学到哪里已经足够，不必强迫自己一口气读完整套课。",
    bullets: ["停点 1-5", "适合谁", "能获得什么"],
  },
  {
    title: "企业汇报材料包",
    category: "汇报",
    audience: "企业方案",
    level: "中级",
    time: "30-45 分钟",
    href: "../extras/07-enterprise-agent-report/README.md",
    summary: "把 Claude Code 的设计翻译成企业内部可复用的汇报语言。",
    bullets: ["PPT 提纲", "管理层摘要", "技术评审"],
  },
]

const diagrams = [
  {
    title: "启动链路图",
    href: "../extras/diagrams/startup-flow.md",
    copy: "从 package.json 到 bootstrap、cli 分流，再到 main 与 commands 的整体结构。",
    svg: `
      <svg viewBox="0 0 260 96" aria-hidden="true">
        <rect x="8" y="20" width="68" height="34" rx="10" fill="#f3d18b"/>
        <rect x="96" y="20" width="68" height="34" rx="10" fill="#fff"/>
        <rect x="184" y="20" width="68" height="34" rx="10" fill="#a7d4c7"/>
        <path d="M76 37 H96 M164 37 H184" stroke="#1d1b18" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
  },
  {
    title: "运行时循环图",
    href: "../extras/diagrams/runtime-loop.md",
    copy: "输入、messages、query、tools、继续决策如何形成 Agent runtime 闭环。",
    svg: `
      <svg viewBox="0 0 260 96" aria-hidden="true">
        <circle cx="48" cy="48" r="18" fill="#a7d4c7"/>
        <circle cx="128" cy="48" r="18" fill="#fff"/>
        <circle cx="208" cy="48" r="18" fill="#f3d18b"/>
        <path d="M66 48 H110 M146 48 H190 M208 30 C236 30 244 66 208 66" stroke="#1d1b18" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>`,
  },
  {
    title: "扩展机制图",
    href: "../extras/diagrams/extension-architecture.md",
    copy: "MCP、插件、Skills、Workflows 等多来源能力如何统一进入注册中心。",
    svg: `
      <svg viewBox="0 0 260 96" aria-hidden="true">
        <rect x="16" y="12" width="48" height="24" rx="8" fill="#f3d18b"/>
        <rect x="96" y="12" width="48" height="24" rx="8" fill="#a7d4c7"/>
        <rect x="176" y="12" width="48" height="24" rx="8" fill="#fff"/>
        <rect x="92" y="56" width="76" height="26" rx="10" fill="#f8efe0" stroke="#1d1b18" stroke-opacity=".15"/>
        <path d="M40 36 C40 52, 92 52, 130 56 M120 36 C120 48, 128 48, 130 56 M200 36 C200 52, 168 52, 130 56" stroke="#1d1b18" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>`,
  },
]

const routeGrid = document.getElementById("route-grid")
const plannerGrid = document.getElementById("planner-grid")
const cardGrid = document.getElementById("card-grid")
const diagramGrid = document.getElementById("diagram-grid")
const filterGroup = document.getElementById("filter-group")
const searchInput = document.getElementById("search-input")

let activeFilter = "全部"
let activeRoute = null

function renderRoutes() {
  routeGrid.innerHTML = routes
    .map(
      route => `
        <article class="route-card ${activeRoute === route.id ? "active" : ""}" data-route="${route.id}">
          <span class="route-badge ${route.tone}">${route.id === "source" ? "源码" : route.id === "enterprise" ? "汇报" : "路线"}</span>
          <h3>${route.title}</h3>
          <p class="card-copy">${route.summary}</p>
          <ul class="route-list">
            ${route.steps.map(step => `<li>${step}</li>`).join("")}
          </ul>
          <p class="card-copy"><strong>你会得到：</strong>${route.outcome}</p>
          <a href="${route.href}">进入这条路线</a>
        </article>
      `,
    )
    .join("")

  routeGrid.querySelectorAll(".route-card").forEach(card => {
    card.addEventListener("click", () => {
      activeRoute = card.dataset.route
      renderRoutes()
      applyFilters()
      document.getElementById("card-grid").scrollIntoView({ behavior: "smooth", block: "start" })
    })
  })
}

function renderPlanner() {
  plannerGrid.innerHTML = plannerCards
    .map(
      card => `
        <article class="planner-card">
          <span class="planner-pill ${card.tone}">${card.tone === "warm" ? "推荐停点" : "建议节奏"}</span>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `,
    )
    .join("")
}

function renderFilters() {
  const filters = ["全部", "主线", "正式课程", "辅助", "汇报"]
  filterGroup.innerHTML = filters
    .map(
      filter => `
        <button class="filter-chip ${activeFilter === filter ? "active" : ""}" data-filter="${filter}">
          ${filter}
        </button>
      `,
    )
    .join("")

  filterGroup.querySelectorAll(".filter-chip").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter
      renderFilters()
      applyFilters()
    })
  })
}

function renderCards() {
  cardGrid.innerHTML = docs
    .map(
      doc => `
        <article class="doc-card" data-category="${doc.category}" data-audience="${doc.audience}">
          <div class="doc-meta">
            <span>${doc.category}</span>
            <span>${doc.level}</span>
            <span>${doc.time}</span>
          </div>
          <h3>${doc.title}</h3>
          <p>${doc.summary}</p>
          <ul class="doc-list">
            ${doc.bullets.map(bullet => `<li>${bullet}</li>`).join("")}
          </ul>
          <a class="doc-link" href="${doc.href}">打开文档</a>
        </article>
      `,
    )
    .join("")
}

function renderDiagrams() {
  diagramGrid.innerHTML = diagrams
    .map(
      item => `
        <article class="diagram-card">
          ${item.svg}
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
          <a class="doc-link" href="${item.href}">查看图解</a>
        </article>
      `,
    )
    .join("")
}

function applyFilters() {
  const searchValue = (searchInput.value || "").trim().toLowerCase()
  const routeAudienceMap = {
    agent: ["Agent 设计", "小白", "全部"],
    beginner: ["小白", "全部"],
    migration: ["已有 Agent 背景", "Agent 设计", "全部"],
    source: ["源码阅读", "全部"],
    enterprise: ["企业方案", "全部"],
  }

  document.querySelectorAll(".doc-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase()
    const body = card.textContent.toLowerCase()
    const category = card.dataset.category
    const audience = card.dataset.audience

    const matchesSearch = !searchValue || title.includes(searchValue) || body.includes(searchValue)
    const matchesCategory = activeFilter === "全部" || category === activeFilter
    const matchesRoute =
      !activeRoute ||
      (routeAudienceMap[activeRoute] || []).includes(audience) ||
      category === "辅助"

    card.classList.toggle("hidden", !(matchesSearch && matchesCategory && matchesRoute))
  })
}

searchInput.addEventListener("input", applyFilters)

renderRoutes()
renderPlanner()
renderFilters()
renderCards()
renderDiagrams()
applyFilters()
