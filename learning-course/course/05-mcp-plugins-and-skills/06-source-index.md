# 婧愮爜绱㈠紩琛?
## 杩欎竴璇惧厛璇讳粈涔?
鎺ㄨ崘椤哄簭锛?
1. `src/services/mcp/client.ts`
2. `src/utils/plugins/loadPluginCommands.ts`
3. `src/commands.ts`
4. `src/services/mcp/config.*`

## 鍏抽敭鏂囦欢

### `src/services/mcp/client.ts`

鍏虫敞鐐癸細

- `McpAuthError`锛歔`src/services/mcp/client.ts:152`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:152)
- `isMcpSessionExpiredError(...)`锛歔`src/services/mcp/client.ts:193`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:193)
- `getMcpToolTimeoutMs()`锛歔`src/services/mcp/client.ts:224`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:224)
- MCP tools/resources/skills 鑱氬悎锛歔`src/services/mcp/client.ts:2166`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:2166)
- `persistToolResult(...)` 璋冪敤锛歔`src/services/mcp/client.ts:2773`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:2773)
- `runElicitationHooks(...)` 璋冪敤锛歔`src/services/mcp/client.ts:2924`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:2924)

涓轰粈涔堥噸瑕侊細
杩欐槸鍗忚鍨嬪閮ㄨ兘鍔涙帴鍏ュ眰銆?
### `src/utils/plugins/loadPluginCommands.ts`

鍏虫敞鐐癸細

- `collectMarkdownFiles(...)`锛歔`src/utils/plugins/loadPluginCommands.ts:102`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:102)
- `transformPluginSkillFiles(...)`锛歔`src/utils/plugins/loadPluginCommands.ts:135`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:135)
- `loadCommandsFromDirectory(...)`锛歔`src/utils/plugins/loadPluginCommands.ts:169`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:169)
- `createPluginCommand(...)`锛歔`src/utils/plugins/loadPluginCommands.ts:218`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:218)

涓轰粈涔堥噸瑕侊細
杩欓噷灞曠ず鈥滃唴瀹瑰嵆鎵╁睍鈥濈殑鍛戒护鐢熸垚閾俱€?
### `src/commands.ts`

鍏虫敞鐐癸細

- `loadAllCommands(...)`锛歔`src/commands.ts:449`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:449)
- `getCommands(...)`锛歔`src/commands.ts:476`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:476)
- `getMcpSkillCommands(...)`
- `getSkillToolCommands(...)`

涓轰粈涔堥噸瑕侊細
杩欐槸缁熶竴娉ㄥ唽涓績鐨勬敹鍙ｇ偣銆?
## 鍏抽敭鍑芥暟

- `isMcpSessionExpiredError`
- `getMcpToolTimeoutMs`
- `collectMarkdownFiles`
- `transformPluginSkillFiles`
- `loadCommandsFromDirectory`
- `createPluginCommand`
- `loadAllCommands`
- `getCommands`

## 鍏抽敭绫诲瀷

- `MCPServerConnection`
- `ServerResource`
- `PluginManifest`
- `Command`
- `FrontmatterData`

## 寤鸿閲嶇偣鐪嬬殑浠ｇ爜娈?
### 浠ｇ爜娈?A锛歁CP 浼氳瘽杩囨湡璇嗗埆

- [`src/services/mcp/client.ts:152`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:152)
- [`src/services/mcp/client.ts:193`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:193)

鐪嬬偣锛?鍗忚鎺ュ叆灞備负浠€涔堝繀椤绘樉寮忓缓妯¤璇佸拰浼氳瘽澶辨晥銆?
### 浠ｇ爜娈?B锛歁CP tools/resources/skills 鑱氬悎

- [`src/services/mcp/client.ts:2166`](/d:/Code/learn-claude/claude-code-rev/src/services/mcp/client.ts:2166)

鐪嬬偣锛?涓轰粈涔堜竴涓?MCP server 鍦?Claude Code 閲屼笉鍙础鐚伐鍏枫€?
### 浠ｇ爜娈?C锛歮arkdown -> Command 鐢熸垚閾?
- [`src/utils/plugins/loadPluginCommands.ts:169`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:169)
- [`src/utils/plugins/loadPluginCommands.ts:218`](/d:/Code/learn-claude/claude-code-rev/src/utils/plugins/loadPluginCommands.ts:218)

鐪嬬偣锛?涓轰粈涔堟彃浠剁郴缁熷彲浠ヨ蛋鈥滃唴瀹归┍鍔ㄦ墿灞曗€濊矾绾裤€?
### 浠ｇ爜娈?D锛氱粺涓€娉ㄥ唽涓績鏀跺彛

- [`src/commands.ts:449`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:449)
- [`src/commands.ts:476`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:476)

鐪嬬偣锛?涓轰粈涔堝鏉ユ簮鎵╁睍鏈€缁堝繀椤荤粺涓€姹囨€汇€佽繃婊ゅ拰鎺掑簭銆?
## 闃呰鏃惰鍥炵瓟鐨勯棶棰?
1. MCP 鍜屾彃浠朵负浠€涔堜笉鑳芥贩鎴愬悓涓€绉嶆墿灞曟満鍒讹紵
2. 涓轰粈涔堟彃浠跺懡浠よ缁熶竴杞垚 `Command`锛?3. 涓轰粈涔堝钩鍙板寲鎵╁睍鐨勫叧閿笉鏄潵婧愮粺涓€锛岃€屾槸鍑哄彛缁熶竴锛?
