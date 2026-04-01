# 婧愮爜绱㈠紩琛?
## 杩欎竴璇惧厛璇讳粈涔?
鎺ㄨ崘椤哄簭锛?
1. `package.json`
2. `src/bootstrap-entry.ts`
3. `src/entrypoints/cli.tsx`
4. `src/main.tsx`
5. `src/commands.ts`

## 鍏抽敭鏂囦欢

### `package.json`

鍏虫敞鐐癸細

- `scripts.dev`
- `scripts.start`
- `scripts.version`

涓轰粈涔堥噸瑕侊細
瀹冨憡璇変綘杩涚▼涓嶆槸鐩存帴浠庝笟鍔′富鏂囦欢鍚姩锛岃€屾槸缁熶竴缁忚繃 bootstrap 鍏ュ彛銆?
### `src/bootstrap-entry.ts`

鍏虫敞鐐癸細

- `ensureBootstrapMacro`
- 鍔ㄦ€佸鍏?`entrypoints/cli.tsx`

涓轰粈涔堥噸瑕侊細
杩欐槸鏈€澶栧眰鏋佽交澹冲叆鍙ｃ€?
### `src/entrypoints/cli.tsx`

鍏虫敞鐐癸細

- `main()`锛歔`src/entrypoints/cli.tsx:33`](/d:/Code/learn-claude/claude-code-rev/src/entrypoints/cli.tsx:33)
- fast-path 鍒嗘祦
- 鏈€缁堝鍏?`../main.js`

涓轰粈涔堥噸瑕侊細
杩欐槸 CLI 鍒嗘祦鍣紝涓嶆槸瀹屾暣涓氬姟灞傘€?
### `src/main.tsx`

鍏虫敞鐐癸細

- `initializeEntrypoint(...)`锛歔`src/main.tsx:517`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:517)
- `main()`锛歔`src/main.tsx:585`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:585)
- `initializeToolPermissionContext(...)` 璋冪敤锛歔`src/main.tsx:1753`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:1753)
- bundled plugins / skills 娉ㄥ唽锛歔`src/main.tsx:1930`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:1930)

涓轰粈涔堥噸瑕侊細
杩欐槸閲嶉噺绾у垵濮嬪寲缂栨帓鍣ㄣ€?
### `src/commands.ts`

鍏虫敞鐐癸細

- `COMMANDS`锛歔`src/commands.ts:258`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:258)
- `loadAllCommands(...)`锛歔`src/commands.ts:449`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:449)
- `getCommands(...)`锛歔`src/commands.ts:476`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:476)

涓轰粈涔堥噸瑕侊細
杩欐槸澶氭潵婧愬懡浠ゆ敞鍐屼腑蹇冦€?
## 鍏抽敭鍑芥暟

- `ensureBootstrapMacro`
- `main` in `cli.tsx`
- `initializeEntrypoint`
- `main` in `main.tsx`
- `COMMANDS`
- `loadAllCommands`
- `getCommands`

## 鍏抽敭绫诲瀷

- `Command`
- `CommandBase`
- `PromptCommand`

寤鸿鍦?[`src/types/command.ts`](/d:/Code/learn-claude/claude-code-rev/src/types/command.ts) 閲岄厤鍚堢湅銆?
## 寤鸿閲嶇偣鐪嬬殑浠ｇ爜娈?
### 浠ｇ爜娈?A锛氭渶杞诲叆鍙?
- [`src/bootstrap-entry.ts:1`](/d:/Code/learn-claude/claude-code-rev/src/bootstrap-entry.ts:1)

鐪嬬偣锛?涓轰粈涔堝３鍏ュ彛鍙繚鐣?bootstrap 鍜屽姩鎬佸鍏ャ€?
### 浠ｇ爜娈?B锛歚--version` fast-path

- [`src/entrypoints/cli.tsx:33`](/d:/Code/learn-claude/claude-code-rev/src/entrypoints/cli.tsx:33)

鐪嬬偣锛?涓轰粈涔堟渶甯歌鐨勮交鍛戒护涓嶅簲璇ユ壙鎷呭畬鏁村垵濮嬪寲鎴愭湰銆?
### 浠ｇ爜娈?C锛歩nteractive / non-interactive 鍒嗘祦

- [`src/main.tsx:585`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:585)
- [`src/main.tsx:821`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:821)

鐪嬬偣锛?涓轰粈涔?`main.tsx` 鏇村儚鍒濆鍖栫紪鎺掑櫒銆?
### 浠ｇ爜娈?D锛氬懡浠ょ粺涓€姹囨€?
- [`src/commands.ts:449`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:449)
- [`src/commands.ts:476`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts:476)

鐪嬬偣锛?澶氭潵婧愯兘鍔涘浣曠粺涓€鏀舵潫涓烘渶缁堝懡浠よ〃銆?
## 闃呰鏃惰鍥炵瓟鐨勯棶棰?
1. 涓轰粈涔?`cli.tsx` 涓嶈兘鐩存帴绛変簬 `main.tsx`锛?2. 涓轰粈涔?`COMMANDS` 涓嶆槸涓€涓《灞傚父閲忔暟缁勶紵
3. 涓轰粈涔?bundled skills/plugins 鐨勬敞鍐屾椂鏈轰細褰卞搷 `getCommands()` 鐨勭粨鏋滐紵

