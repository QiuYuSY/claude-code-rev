# 婧愮爜绱㈠紩琛?
## 杩欎竴璇惧厛璇讳粈涔?
鎺ㄨ崘椤哄簭锛?
1. `src/replLauncher.tsx`
2. `src/components/App.tsx`
3. `src/interactiveHelpers.tsx`
4. `src/state/AppStateStore.ts`
5. `src/state/onChangeAppState.ts`
6. `src/screens/REPL.tsx`

## 鍏抽敭鏂囦欢

### `src/replLauncher.tsx`

鍏虫敞鐐癸細

- `launchRepl(...)`锛歔`src/replLauncher.tsx:12`](/d:/Code/learn-claude/claude-code-rev/src/replLauncher.tsx:12)

涓轰粈涔堥噸瑕侊細
杩欐槸鏋佽杽鐨?REPL 鍚姩杩炴帴灞傘€?
### `src/components/App.tsx`

鍏虫敞鐐癸細

- `App(...)`锛歔`src/components/App.tsx:50`](/d:/Code/learn-claude/claude-code-rev/src/components/App.tsx:50)
- `BootstrapBoundary`

涓轰粈涔堥噸瑕侊細
瀹冨畾涔変簡 UI 鏍瑰鍣ㄧ殑 Provider 缁撴瀯銆?
### `src/interactiveHelpers.tsx`

鍏虫敞鐐癸細

- `renderAndRun(...)`锛歔`src/interactiveHelpers.tsx:98`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:98)
- `showSetupScreens(...)`锛歔`src/interactiveHelpers.tsx:104`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:104)
- `getRenderContext(...)`锛歔`src/interactiveHelpers.tsx:299`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:299)

涓轰粈涔堥噸瑕侊細
杩欐槸浜や簰鐢熷懡鍛ㄦ湡缂栨帓灞傘€?
### `src/state/AppStateStore.ts`

鍏虫敞鐐癸細

- `AppState`锛歔`src/state/AppStateStore.ts:89`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts:89)
- `getDefaultAppState()`锛歔`src/state/AppStateStore.ts:456`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts:456)

涓轰粈涔堥噸瑕侊細
杩欐槸闀挎湡浼氳瘽鐘舵€佷腑蹇冦€?
### `src/state/onChangeAppState.ts`

鍏虫敞鐐癸細

- `onChangeAppState(...)`锛歔`src/state/onChangeAppState.ts:43`](/d:/Code/learn-claude/claude-code-rev/src/state/onChangeAppState.ts:43)

涓轰粈涔堥噸瑕侊細
杩欓噷鑳界湅鍑虹姸鎬佸彉鍖栦箣鍚庣郴缁熻繕浼氳Е鍙戝摢浜涜仈鍔ㄣ€?
## 鍏抽敭鍑芥暟

- `launchRepl`
- `App`
- `renderAndRun`
- `showSetupScreens`
- `getDefaultAppState`
- `onChangeAppState`

## 鍏抽敭绫诲瀷

- `AppState`
- `FooterItem`
- `TaskState`
- `Notification`

## 寤鸿閲嶇偣鐪嬬殑浠ｇ爜娈?
### 浠ｇ爜娈?A锛氭渶钖?REPL 鍚姩鍣?
- [`src/replLauncher.tsx:12`](/d:/Code/learn-claude/claude-code-rev/src/replLauncher.tsx:12)

鐪嬬偣锛?涓轰粈涔堝惎鍔ㄨ繛鎺ュ眰鍙礋璐ｆ帴绾裤€?
### 浠ｇ爜娈?B锛歅rovider 鏍瑰鍣?
- [`src/components/App.tsx:50`](/d:/Code/learn-claude/claude-code-rev/src/components/App.tsx:50)

鐪嬬偣锛?涓轰粈涔?`App.tsx` 鏇村儚瀹瑰櫒鑰屼笉鏄笟鍔＄粍浠躲€?
### 浠ｇ爜娈?C锛歳ender / setup / shutdown 涓荤嚎

- [`src/interactiveHelpers.tsx:98`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:98)
- [`src/interactiveHelpers.tsx:104`](/d:/Code/learn-claude/claude-code-rev/src/interactiveHelpers.tsx:104)

鐪嬬偣锛?涓轰粈涔堜氦浜掔紪鎺掑眰鏄繍琛屾椂鐨勪竴閮ㄥ垎銆?
### 浠ｇ爜娈?D锛氱姸鎬佹€昏〃

- [`src/state/AppStateStore.ts:89`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts:89)

鐪嬬偣锛?濡備綍鎸夌姸鎬佸煙闃呰 `AppState`锛岃€屼笉鏄€愬瓧娈电‖鑳屻€?
## 闃呰鏃惰鍥炵瓟鐨勯棶棰?
1. 涓轰粈涔?REPL 涓嶆槸杈撳叆妗嗭紝鑰屾槸椹鹃┒鑸憋紵
2. 涓轰粈涔堢粓绔骇鍝佷篃浼氶渶瑕佸緢閲嶇殑鐘舵€佷腑蹇冿紵
3. `AppState` 閲屽摢浜涚姸鎬佹渶鑳戒綋鐜?Claude Code 鐨勪骇鍝佽竟鐣岋紵

