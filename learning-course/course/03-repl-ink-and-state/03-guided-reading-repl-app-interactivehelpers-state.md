# 閫愭绮捐锛歚replLauncher.tsx -> App.tsx -> interactiveHelpers.tsx -> AppStateStore.ts`

杩欎唤鏂囨。鎸夆€滃厛鍚姩 REPL锛屽啀瑁呴厤涓婁笅鏂囷紝鍐嶇湅浜や簰缂栨帓锛屾渶鍚庣湅鐘舵€佹€昏〃鈥濈殑椤哄簭甯︿綘璇荤涓夎鐨勫叧閿枃浠躲€?
---

## 涓€銆乣src/replLauncher.tsx`

浠ｇ爜寰堢煭锛?
```ts
export async function launchRepl(root, appProps, replProps, renderAndRun) {
  const { App } = await import('./components/App.js')
  const { REPL } = await import('./screens/REPL.js')
  await renderAndRun(
    root,
    <App {...appProps}>
      <REPL {...replProps} />
    </App>,
  )
}
```

### 杩欐浠ｇ爜鍦ㄥ仛浠€涔?
#### 1. 鍔ㄦ€佸姞杞?`App`

杩欒鏄庨《灞?UI 瀹瑰櫒涓嶆槸榛樿鍏ュ彛渚濊禆锛岃€屾槸浜や簰璺緞鎵嶉渶瑕佺殑閲嶆ā鍧椼€?
#### 2. 鍔ㄦ€佸姞杞?`REPL`

杩欒鏄庣湡姝ｇ殑浼氳瘽鐣岄潰涔熻寤惰繜鍒颁簡闇€瑕佹椂鎵嶅紩鍏ャ€?
#### 3. 鐢?`renderAndRun()` 椹卞姩鏁翠釜浜や簰鐢熷懡鍛ㄦ湡

杩欒鏄庢覆鏌撳拰鐢熷懡鍛ㄦ湡绠＄悊鏄垎寮€鐨勩€?
### 涓轰粈涔堣繖灞傝淇濇寔鏋佽杽

鍥炵瓟锛?鍥犱负 `launchRepl()` 鐨勮亴璐ｅ彧鏄€滄帴绾库€濄€備竴鏃﹀畠寮€濮嬫壙鎷呯姸鎬侀€昏緫鎴?setup 娴佺▼锛屽氨浼氬彉鎴愭柊鐨勫鏉傚害涓績銆?
### 鍊煎緱瀛︿範鐨勫湴鏂?
- 鍏ュ彛杩炴帴灞傚拰涓氬姟鐘舵€佸眰鍒嗙
- 閲嶇粍浠舵寜闇€鍔犺浇
- 鐢熷懡鍛ㄦ湡浜ょ粰涓撻棬鐨勬覆鏌撶紪鎺掑櫒

---

## 浜屻€乣src/components/App.tsx`

杩欎釜鏂囦欢琛ㄩ潰涓婂儚涓€涓櫘閫氬鍣ㄧ粍浠讹紝浣嗗畠鍏跺疄鍦ㄥ畾涔夆€滀氦浜掓牴鈥濈殑鑱岃矗銆?
### 浣犲簲璇ュ厛鐪嬩粈涔?
鍏堜笉瑕佺湅 UI 鏍囩锛岃€岃鐪?Provider 閾俱€?
閲岄潰浼氬寘瑁癸細

- `AppStateProvider`
- `StatsProvider`
- `FpsMetricsProvider`
- `BootstrapBoundary`

### 涓轰粈涔堣繖浜?Provider 浼氬湪鏈€椤跺眰

鍥犱负锛?
- AppState 闇€瑕佽疮绌挎暣涓粍浠舵爲
- stats/fps 灞炰簬璺ㄧ粍浠剁殑鍏ㄥ眬瑙傛祴淇℃伅
- bootstrap 澶辫触蹇呴』鍦ㄦ牴灞傚厹浣?
### `BootstrapBoundary` 鍦ㄨ繖閲屾湁浠€涔堝惈涔?
瀹冧笉鏄櫘閫氶敊璇竟鐣岋紝鑰屾槸鍦ㄦ槑纭竴浠朵簨锛?
REPL 鍚姩鏈韩灏辨槸涓€涓渶瑕佽淇濇姢鐨勮繃绋嬨€?
涓€鏃﹂《灞傚垵濮嬪寲澶辫触锛岀郴缁熻嚦灏戣鑳斤細

- 鐢?Ink 娓叉煋鍑洪敊璇?- 鑰屼笉鏄洿鎺ユ妸鎺у埗鍙版墦鍧?
### 涓轰粈涔?`App.tsx` 涓嶆槸涓氬姟缁勪欢

鍥炵瓟锛?鍥犱负瀹冧笉鍏冲績鍏蜂綋鍛戒护浜や簰缁嗚妭锛岃€屽叧蹇冩暣涓?UI 鏍规爲闇€瑕佷粈涔堝熀纭€璁炬柦銆?
瀹冩洿鍍忥細

- 鏍瑰鍣?- 涓婁笅鏂囨敞鍏ュ櫒
- bootstrap 瀹夊叏澹?
---

## 涓夈€乣src/interactiveHelpers.tsx`

杩欐槸绗笁璇炬渶瀹规槗琚綆浼般€佷絾瀹為檯涓婇潪甯稿叧閿殑鏂囦欢銆?
### 绗竴娈碉細`exitWithError(...)` / `exitWithMessage(...)`

杩欓噷鏈変竴涓緢鎴愮啛鐨勭粏鑺傦細

閿欒鍜岄€€鍑烘秷鎭笉鏄畝鍗?`console.error`锛岃€屾槸閫氳繃 Ink 娓叉煋鍚庡啀閫€鍑恒€?
### 涓轰粈涔堣繖寰堝叧閿?
婧愮爜娉ㄩ噴宸茬粡璇存槑锛?
- Ink 鐨?`patchConsole` 浼氬悶鏅€?console 杈撳嚭
- 鎵€浠?UI 鐢熷懡鍛ㄦ湡鍐呯殑 fatal message 搴旇閫氳繃 React 鏍戞覆鏌?
### 杩欎綋鐜颁簡浠€涔堣璁℃剰璇?
鍥炵瓟锛?浣滆€呭苟娌℃湁鎶娾€滈€€鍑衡€濈湅鎴愭帶鍒舵祦缁嗚妭锛岃€屾槸鎶婂畠褰撴垚鐢ㄦ埛浣撻獙鐨勪竴閮ㄥ垎銆?
---

### 绗簩娈碉細`showSetupDialog(...)`

杩欎釜 helper 浼氱敤锛?
- `AppStateProvider`
- `KeybindingSetup`

鎶?setup 绫诲璇濆寘璧锋潵銆?
### 涓轰粈涔?setup dialog 涔熼渶瑕?AppState 鍜?Keybinding

鍥犱负杩欎簺 setup screen 涓嶆槸闈欐€侀〉闈紝鑰屾槸浜や簰鐨勪竴閮ㄥ垎锛?
- 瑕佸搷搴旈敭鐩?- 瑕佹帴鐘舵€?- 瑕佽窡鏁村浼氳瘽浜や簰浣撻獙淇濇寔涓€鑷?
---

### 绗笁娈碉細`renderAndRun(...)`

瀹冨仛鐨勪簨鎯呴潪甯稿吀鍨嬶細

1. `root.render(element)`
2. `startDeferredPrefetches()`
3. `await root.waitUntilExit()`
4. `await gracefulShutdown(0)`

### 涓轰粈涔堣繖娈靛€煎緱瀛?
鍥犱负瀹冨畬鏁磋〃杈句簡浜や簰 UI 鐨勭敓鍛藉懆鏈燂細

- 娓叉煋
- 鍚姩鍚庡彴棰勫彇
- 绛夊緟閫€鍑?- 浼橀泤鍏抽棴

寰堝椤圭洰鍙啓浜嗏€渞ender鈥濓紝娌℃湁璁ょ湡寤烘ā鈥滈€€鍑轰箣鍚庤鎬庝箞鏀跺熬鈥濄€?
---

### 绗洓娈碉細`showSetupScreens(...)`

杩欎釜鍑芥暟寰堥噸瑕侊紝鍥犱负瀹冧覆璧蜂簡锛?
- onboarding
- trust dialog
- GrowthBook 閲嶆柊鍒濆鍖?- MCP approvals
- CLAUDE.md external includes warning
- telemetry after trust
- API key approval
- bypass permissions 鎻愮ず

### 涓轰粈涔堣繖璇存槑浜や簰灞傛槸杩愯鏃剁殑涓€閮ㄥ垎

鍥犱负杩欎簺娴佺▼浼氬奖鍝嶏細

- 鐜鍙橀噺鏄惁搴旂敤
- trust 鏄惁寤虹珛
- 杩滅▼鑳藉姏鏄惁鍏佽
- telemetry 鏄惁鍙垵濮嬪寲
- 鍚庣画 REPL 鏄惁鑳芥甯歌繍琛?
涔熷氨鏄锛岃繖涓嶆槸鈥滆缃〉闈⑩€濓紝鑰屾槸鈥滆繍琛屾椂鍓嶇疆娴佺▼鈥濄€?
---

## 鍥涖€乣src/state/AppStateStore.ts`

杩欐槸绗笁璇炬渶鏍稿績鐨勬枃浠躲€?
### 绗竴鐪煎簲璇ユ€庝箞鐪?
涓嶈閫愬瓧娈电‖璇伙紝鑰岃鎸夌姸鎬佸煙鐪嬨€?
---

### 1. 浼氳瘽涓庢ā鍨嬬姸鎬佸煙

渚嬪锛?
- `settings`
- `verbose`
- `mainLoopModel`
- `mainLoopModelForSession`
- `statusLineText`
- `thinkingEnabled`

### 杩欒鏄庝粈涔?
璇存槑 REPL 涓嶆槸涓€娆℃€у懡浠ら潰鏉匡紝鑰屾槸鎸佺画鎵胯浇浼氳瘽鍜屾ā鍨嬮厤缃殑鐣岄潰銆?
---

### 2. 鏉冮檺涓庤鍥剧姸鎬佸煙

渚嬪锛?
- `toolPermissionContext`
- `expandedView`
- `viewSelectionMode`
- `footerSelection`

### 杩欒鏄庝粈涔?
璇存槑浜や簰浣撻獙鏈韩瑕佸拰鏉冮檺銆佷换鍔¤鍥俱€乤gent 瑙嗗浘涓€璧疯仈鍔ㄣ€?
---

### 3. 浠诲姟涓?agent 鐘舵€佸煙

渚嬪锛?
- `tasks`
- `agentNameRegistry`
- `foregroundedTaskId`
- `viewingAgentTaskId`

### 涓轰粈涔堣繖缁勭姸鎬佸緢閲嶈

鍥犱负瀹冭〃鏄?Claude Code 鏀寔鐨勪笉鏄崟涓€鎵ц娴侊紝鑰屾槸澶氫釜浠诲姟銆佸涓?agent 鐨勯暱鏈熷崗鍚屻€?
---

### 4. MCP 涓庢彃浠剁姸鎬佸煙

渚嬪锛?
- `mcp.clients`
- `mcp.tools`
- `mcp.commands`
- `mcp.resources`
- `plugins.enabled / disabled / errors / commands`

### 杩欒鏄庝粈涔?
璇存槑鎵╁睍绯荤粺涓嶆槸鍦?UI 澶栭潰鎮勬倓杩愯锛岃€屾槸蹇呴』琚?REPL 鎰熺煡鍜屽睍绀恒€?
---

### 5. remote / bridge 鐘舵€佸煙

渚嬪锛?
- `remoteSessionUrl`
- `remoteConnectionStatus`
- `replBridgeEnabled`
- `replBridgeConnected`
- `replBridgeSessionActive`
- `replBridgeError`

### 涓轰粈涔堣繖缁勭姸鎬佸€煎緱鍏虫敞

鍥犱负瀹冪洿鎺ユ毚闇蹭簡浜у搧杈圭晫宸茬粡瓒呭嚭鈥滄湰鍦?CLI鈥濄€?
Claude Code 宸茬粡鍦ㄥ悓鏃惰€冭檻锛?
- 鏈湴缁堢
- 杩滅▼浼氳瘽
- bridge / mobile / companion 鍦烘櫙

---

### 6. 鍘嗗彶涓庤緟鍔╃姸鎬佸煙

渚嬪锛?
- `fileHistory`
- `attribution`
- `todos`
- `notifications`
- `elicitation`

### 杩欒鏄庝粈涔?
璇存槑绯荤粺涓嶄粎鍦ㄢ€滅敓鎴愬洖澶嶁€濓紝杩樺湪缁存姢锛?
- 鏂囦欢琛屼负鍘嗗彶
- 浠诲姟鐘舵€?- 閫氱煡闃熷垪
- 闇€瑕佷笌鐢ㄦ埛杩涗竴姝ヤ氦浜掔殑璇锋眰

---

## 浜斻€佹妸鍥涗釜鏂囦欢涓茶捣鏉ョ湅

```text
replLauncher.tsx
  -> 璐熻矗鎶?App 涓?REPL 鎺ヨ捣鏉?
App.tsx
  -> 璐熻矗鎻愪緵鍏ㄥ眬涓婁笅鏂囦笌 bootstrap 瀹瑰櫒

interactiveHelpers.tsx
  -> 璐熻矗 setup銆乺ender銆乪xit銆乻hutdown 绛変氦浜掔紪鎺?
AppStateStore.ts
  -> 璐熻矗鎵胯浇闀挎湡浼氳瘽銆佷换鍔°€佹墿灞曘€佽繙绋嬪拰鏉冮檺鐘舵€?```

## 杩欎竴濂楄璁″洖绛斾簡浠€涔堟洿澶х殑闂

鍥炵瓟锛?瀹冨洖绛旂殑鏄€滃綋缁堢宸ュ叿寮€濮嬫嫢鏈夐暱鏈熶細璇濄€佷换鍔°€佹彃浠躲€丮CP銆佽繙绋嬭兘鍔涙椂锛屽浣曡 UI 鎴愪负鐪熷疄杩愯鏃剁殑涓€閮ㄥ垎锛岃€屼笉鏄竴涓杽钖勭殑鏄剧ず灞傗€濄€?
Claude Code 鐨勭瓟妗堟槸锛?
- 鐢ㄨ杽鍚姩鍣ㄨ繛鎺?REPL
- 鐢ㄦ牴瀹瑰櫒鎻愪緵涓婁笅鏂?- 鐢ㄤ氦浜掔紪鎺掑眰鎺у埗 setup 鍜岄€€鍑?- 鐢ㄧ粺涓€鐘舵€佷腑蹇冩壙杞介暱鏈熷鏉傚害

