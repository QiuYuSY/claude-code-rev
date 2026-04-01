# 婧愮爜绱㈠紩琛?
## 杩欎竴璇惧厛璇讳粈涔?
鎺ㄨ崘椤哄簭锛?
1. `src/Tool.ts`
2. `src/tools.ts`
3. `src/query.ts`
4. `src/query/config.ts`
5. `src/query/tokenBudget.ts`

## 鍏抽敭鏂囦欢

### `src/Tool.ts`

鍏虫敞鐐癸細

- `ToolPermissionContext`锛歔`src/Tool.ts:123`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts:123)
- `ToolUseContext`锛歔`src/Tool.ts:158`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts:158)

涓轰粈涔堥噸瑕侊細
杩欐槸宸ュ叿杩愯鏃跺崗璁眰銆?
### `src/tools.ts`

鍏虫敞鐐癸細

- `getAllBaseTools()`锛歔`src/tools.ts:193`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts:193)
- `getTools(...)`锛歔`src/tools.ts:271`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts:271)

涓轰粈涔堥噸瑕侊細
瀹冨尯鍒嗕簡鈥滅郴缁熸湁浠€涔堣兘鍔涒€濆拰鈥滃綋鍓嶄細璇濇毚闇蹭粈涔堣兘鍔涒€濄€?
### `src/query.ts`

鍏虫敞鐐癸細

- `State`锛歔`src/query.ts:204`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:204)
- `query()`锛歔`src/query.ts:219`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:219)
- `queryLoop()`锛歔`src/query.ts:241`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:241)
- `checkTokenBudget(...)` 璋冪敤锛歔`src/query.ts:1309`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1309)
- `runTools(...)` 璋冪敤锛歔`src/query.ts:1382`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1382)
- `generateToolUseSummary(...)` 璋冪敤锛歔`src/query.ts:1469`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1469)

涓轰粈涔堥噸瑕侊細
杩欐槸 agent runtime 涓诲惊鐜€?
## 鍏抽敭鍑芥暟

- `getAllBaseTools`
- `getTools`
- `query`
- `queryLoop`
- `checkTokenBudget`
- `runTools`
- `generateToolUseSummary`

## 鍏抽敭绫诲瀷

- `ToolPermissionContext`
- `ToolUseContext`
- `State`
- `QueryParams`

## 寤鸿閲嶇偣鐪嬬殑浠ｇ爜娈?
### 浠ｇ爜娈?A锛氬伐鍏蜂笂涓嬫枃杈圭晫

- [`src/Tool.ts:123`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts:123)
- [`src/Tool.ts:158`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts:158)

鐪嬬偣锛?涓轰粈涔堝伐鍏蜂細鎺ヨЕ鐘舵€併€乁I銆佹潈闄愬拰璧勬簮銆?
### 浠ｇ爜娈?B锛氬伐鍏风湡婧愪笌浼氳瘽宸ュ叿姹?
- [`src/tools.ts:193`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts:193)
- [`src/tools.ts:271`](/d:/Code/learn-claude/claude-code-rev/src/tools.ts:271)

鐪嬬偣锛?涓轰粈涔堣鍒?`getAllBaseTools()` 鍜?`getTools(...)`銆?
### 浠ｇ爜娈?C锛氫富寰幆鐘舵€佸垵濮嬪寲

- [`src/query.ts:204`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:204)
- [`src/query.ts:241`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:241)

鐪嬬偣锛?涓轰粈涔?`State` 鏄樉寮忕姸鎬佹満鑰屼笉鏄竴鍫嗘暎鍙橀噺銆?
### 浠ｇ爜娈?D锛氬伐鍏锋墽琛屼笌缁х画鍐崇瓥

- [`src/query.ts:1309`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1309)
- [`src/query.ts:1382`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1382)
- [`src/query.ts:1469`](/d:/Code/learn-claude/claude-code-rev/src/query.ts:1469)

鐪嬬偣锛?棰勭畻銆佸伐鍏锋墽琛屽拰 tool summary 濡備綍涓€璧疯繘鍏ヤ富寰幆銆?
## 闃呰鏃惰鍥炵瓟鐨勯棶棰?
1. 涓轰粈涔堝伐鍏蜂笉鑳藉彧鏄?`run(input)`锛?2. 涓轰粈涔堝伐鍏风粨鏋滃繀椤诲啓鍥炴秷鎭郴缁燂紵
3. 涓轰粈涔?`query.ts` 鏇村儚鐘舵€佹満鑰屼笉鏄櫘閫?API helper锛?
