function escapeHtml(input) {
  return input.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
function renderInline(text) {
  let out = escapeHtml(text)
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>')
  return out
}
function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, '').split('\n')
  const html = []
  let inList = false
  let listType = 'ul'
  let inCode = false
  let codeLines = []
  let inQuote = false
  const closeList = () => { if (inList) { html.push(listType === 'ol' ? '</ol>' : '</ul>'); inList = false } }
  const closeQuote = () => { if (inQuote) { html.push('</blockquote>'); inQuote = false } }
  for (const line of lines) {
    const trimmed = line.trimEnd()
    if (trimmed.startsWith('```')) {
      closeList(); closeQuote()
      if (!inCode) { inCode = true; codeLines = [] } else { html.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`); inCode = false }
      continue
    }
    if (inCode) { codeLines.push(line); continue }
    if (!trimmed) { closeList(); closeQuote(); continue }
    const heading = trimmed.match(/^(#{1,3})\s+(.*)$/)
    if (heading) { closeList(); closeQuote(); html.push(`<h${heading[1].length}>${renderInline(heading[2])}</h${heading[1].length}>`); continue }
    if (trimmed.startsWith('> ')) {
      closeList(); if (!inQuote) { html.push('<blockquote>'); inQuote = true }
      html.push(`<p>${renderInline(trimmed.slice(2))}</p>`); continue
    }
    const bullet = trimmed.match(/^[-*]\s+(.*)$/)
    if (bullet) {
      closeQuote(); if (!inList || listType !== 'ul') { closeList(); listType = 'ul'; html.push('<ul>'); inList = true }
      html.push(`<li>${renderInline(bullet[1])}</li>`); continue
    }
    const numbered = trimmed.match(/^\d+\.\s+(.*)$/)
    if (numbered) {
      closeQuote(); if (!inList || listType !== 'ol') { closeList(); listType = 'ol'; html.push('<ol>'); inList = true }
      html.push(`<li>${renderInline(numbered[1])}</li>`); continue
    }
    closeList(); closeQuote(); html.push(`<p>${renderInline(trimmed)}</p>`)
  }
  closeList(); closeQuote();
  return html.join('\n')
}
const routeGrid = document.getElementById('route-grid')
const stopGrid = document.getElementById('stop-grid')
const diagramGrid = document.getElementById('diagram-grid')
const treeNav = document.getElementById('tree-nav')
const viewTitle = document.getElementById('view-title')
const viewSubtitle = document.getElementById('view-subtitle')
const dashboardView = document.getElementById('dashboard-view')
const readerView = document.getElementById('reader-view')
const readerCategory = document.getElementById('reader-category')
const readerLevel = document.getElementById('reader-level')
const readerTime = document.getElementById('reader-time')
const readerContent = document.getElementById('reader-content')
const sourceLink = document.getElementById('source-link')
const markReadBtn = document.getElementById('mark-read-btn')
const nextLinks = document.getElementById('next-links')
const progressList = document.getElementById('progress-list')
const searchInput = document.getElementById('search-input')
const docs = window.COURSE_DATA.docs
const routes = window.COURSE_DATA.routes
const stopPoints = window.COURSE_DATA.stopPoints
const diagrams = window.COURSE_DATA.diagrams
const groups = window.COURSE_DATA.groups
const docMap = new Map(docs.map(doc => [doc.id, doc]))
let currentDocId = null
function getReadState() { try { return JSON.parse(localStorage.getItem('cc-learning-progress') || '{}') } catch { return {} } }
function setReadState(next) { localStorage.setItem('cc-learning-progress', JSON.stringify(next)) }
function renderRoutes() {
  routeGrid.innerHTML = routes.map(route => `<article class="route-card" data-target="${route.start}"><span class="badge ${route.tone}">${route.badge}</span><h3>${route.title}</h3><p>${route.summary}</p><ul>${route.steps.map(step => `<li>${step}</li>`).join('')}</ul><a href="#doc/${route.start}">进入这条路线</a></article>`).join('')
}
function renderStopPoints() {
  stopGrid.innerHTML = stopPoints.map(point => `<article class="stop-card"><span class="stop-tag ${point.tone}">${point.badge}</span><h3>${point.title}</h3><p>${point.text}</p></article>`).join('')
}
function renderDiagrams() {
  diagramGrid.innerHTML = diagrams.map(item => `<article class="diagram-card"><h3>${item.title}</h3><p>${item.summary}</p><a class="doc-open-link" href="${item.href}">打开图解</a></article>`).join('')
}
function renderTree(filter = '') {
  const q = filter.trim().toLowerCase()
  treeNav.innerHTML = groups.map(group => {
    const visible = docs.filter(doc => doc.group === group.id && (!q || doc.title.toLowerCase().includes(q) || doc.summary.toLowerCase().includes(q) || doc.tags.join(' ').toLowerCase().includes(q)))
    if (!visible.length) return ''
    return `<section class="tree-section"><button type="button">${group.title}</button><div class="tree-children">${visible.map(doc => `<a class="tree-link ${currentDocId === doc.id ? 'active' : ''}" href="#doc/${doc.id}">${doc.title}</a>`).join('')}</div></section>`
  }).join('')
}
function renderProgress() {
  const readState = getReadState()
  progressList.innerHTML = docs.slice(0, 10).map(doc => `<div class="progress-item ${readState[doc.id] ? 'done' : ''}"><strong>${doc.title}</strong><div>${readState[doc.id] ? '已标记为已读' : '未读'}</div></div>`).join('')
}
function renderNextLinks(doc) {
  let items = []
  if (doc.next && doc.next.length) items = doc.next.map(id => docMap.get(id)).filter(Boolean)
  else {
    const siblings = docs.filter(d => d.group === doc.group)
    const i = siblings.findIndex(d => d.id === doc.id)
    if (siblings[i + 1]) items = [siblings[i + 1]]
  }
  nextLinks.innerHTML = items.length ? items.map(item => `<a href="#doc/${item.id}"><strong>${item.title}</strong><div>${item.summary}</div></a>`).join('') : `<div class="progress-item">这一页已经是该组末尾了，可以回首页选择下一条路线。</div>`
}
function showDashboard() {
  currentDocId = null
  dashboardView.classList.add('active')
  readerView.classList.remove('active')
  viewTitle.textContent = '课程首页'
  viewSubtitle.textContent = '先选你的目标，再进入相应学习路线。'
  renderTree(searchInput.value)
  renderProgress()
}
function showDoc(docId) {
  const doc = docMap.get(docId)
  if (!doc) return showDashboard()
  currentDocId = doc.id
  dashboardView.classList.remove('active')
  readerView.classList.add('active')
  viewTitle.textContent = doc.title
  viewSubtitle.textContent = doc.summary
  readerCategory.textContent = doc.category
  readerLevel.textContent = doc.level
  readerTime.textContent = doc.time
  readerContent.innerHTML = renderMarkdown(doc.content)
  sourceLink.href = doc.href
  renderTree(searchInput.value)
  renderNextLinks(doc)
  const readState = getReadState()
  markReadBtn.textContent = readState[doc.id] ? '取消已读标记' : '标记为已读'
  renderProgress()
}
function toggleRead() {
  if (!currentDocId) return
  const readState = getReadState(); readState[currentDocId] = !readState[currentDocId]; setReadState(readState); showDoc(currentDocId)
}
function handleRoute() {
  const hash = decodeURIComponent(location.hash || '')
  if (!hash || hash === '#dashboard') return showDashboard()
  const match = hash.match(/^#doc\/(.+)$/)
  if (match) return showDoc(match[1])
  showDashboard()
}
markReadBtn.addEventListener('click', toggleRead)
searchInput.addEventListener('input', () => renderTree(searchInput.value))
window.addEventListener('hashchange', handleRoute)
renderRoutes(); renderStopPoints(); renderDiagrams(); renderTree(); renderProgress(); handleRoute()
