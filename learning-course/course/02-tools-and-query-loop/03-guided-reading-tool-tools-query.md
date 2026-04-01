# 閫愭绮捐锛歚Tool.ts -> tools.ts -> query.ts`

杩欎唤鏂囨。鎸夆€滃厛鍗忚锛屽啀娉ㄥ唽锛屽啀涓诲惊鐜€濈殑椤哄簭甯︿綘璇荤浜岃鐨勫叧閿枃浠躲€?
---

## 涓€銆乣src/Tool.ts`

### 绗竴鐪煎簲璇ョ湅浠€涔?
涓嶈涓€涓婃潵娣辨寲鎵€鏈夌被鍨嬶紝鑰岃鍏堟姄 3 涓牳蹇冨璞★細

- `ToolPermissionContext`
- `ToolUseContext`
- 涓庢秷鎭?/ progress / AppState 浜や簰鐩稿叧鐨勫瓧娈?
---

### 1. `ToolPermissionContext`

瀹冨寘鎷細

- `mode`
- `additionalWorkingDirectories`
- `alwaysAllowRules`
- `alwaysDenyRules`
- `alwaysAskRules`
- `isBypassPermissionsModeAvailable`
- 鑻ュ共 auto mode / plan mode 鐩稿叧瀛楁

### 杩欒鏄庝粈涔?
璇存槑鏉冮檺鍦ㄨ繖閲屼笉鏄?UI 鍚庣疆纭锛岃€屾槸宸ュ叿杩愯杈圭晫鐨勪竴閮ㄥ垎銆?
### 涓轰粈涔堣繖涓璁￠噸瑕?
鍥犱负濡傛灉鏉冮檺绯荤粺鍙槸澶栧洿寮圭獥锛屽伐鍏峰眰灏辨棤娉曠湡姝ｆ劅鐭ワ細

- 褰撳墠鍏佽浠€涔?- 褰撳墠瑕侀伩鍏嶄粈涔?- 褰撳墠鏄惁鑳借嚜鍔ㄧ户缁?
---

### 2. `ToolUseContext`

杩欐槸绗簩璇炬渶鍏抽敭鐨勭被鍨嬩箣涓€銆?
瀹冨寘鍚殑淇℃伅澶ц嚧鍙互鍒嗘垚鍑犵粍锛?
#### A. 浼氳瘽涓庢墽琛屼笂涓嬫枃

- `options.commands`
- `options.tools`
- `mainLoopModel`
- `thinkingConfig`
- `isNonInteractiveSession`
- `agentDefinitions`

#### B. 鐘舵€佽鍐欒兘鍔?
- `getAppState()`
- `setAppState(...)`
- `setAppStateForTasks(...)`

#### C. UI 涓庨€氱煡鑳藉姏

- `setToolJSX`
- `addNotification`
- `appendSystemMessage`
- `sendOSNotification`
- `setStreamMode`
- `openMessageSelector`

#### D. agent / 璧勬簮 / 鐜鑳藉姏

- `mcpClients`
- `mcpResources`
- `agentId`
- `agentType`
- `messages`
- file/glob limits

### 涓轰粈涔堝畠杩欎箞閲?
鍥炵瓟锛?鍥犱负杩欓噷鐨勫伐鍏峰凡缁忎笉鏄€滅函璁＄畻鍑芥暟鈥濓紝鑰屾槸浼氫慨鏀逛細璇濈姸鎬併€侀┍鍔?UI銆佸彂閫氱煡銆佸奖鍝嶄笅涓€杞?query 鐨勮繍琛屾椂鍙備笌鑰呫€?
### 搴旇濡備綍鐞嗚В杩欑鈥滈噸鈥?
涓嶈绔嬪埢鎶婂畠鍒ゆ柇鎴愯璁″け璐ャ€傚畠鏇村儚鏄湪鏆撮湶涓€涓簨瀹烇細

杩欎釜绯荤粺閲岋紝宸ュ叿鎵ц澶╃劧璺ㄨ秺澶氫釜杈圭晫銆?
---

## 浜屻€乣src/tools.ts`

### 鍏堢湅 `getAllBaseTools()`

杩欎釜鍑芥暟鏄伐鍏风湡婧愩€?
瀹冧笉鏄畝鍗曞垪涓€涓伐鍏峰悕鏁扮粍锛岃€屾槸瀹氫箟锛?
- 绯荤粺鐞嗚涓婄殑鍏ㄩ噺鍩虹宸ュ叿闆嗗悎
- 鍝簺宸ュ叿鍙?feature gate 鎺у埗
- 鍝簺宸ュ叿鍙楃幆澧冨彉閲忔帶鍒?- 鍝簺宸ュ叿鏄壒瀹氭ā寮忎笅鎵嶅紩鍏?
### 杩欓噷鏈€閲嶈鐨勭悊瑙?
宸ュ叿姹犱笉鏄潤鎬佺殑銆?
宸ュ叿姹犱細闅忎笅闈㈣繖浜涙潯浠跺彉鍖栵細

- `process.env.USER_TYPE`
- feature flags
- REPL mode
- simple mode
- worktree mode
- LSP enablement
- agent swarms enablement

### 涓轰粈涔堣繖寰堝叧閿?
鍥犱负鍦?agent 绯荤粺閲岋紝鈥滄ā鍨嬭兘鐪嬪埌浠€涔堝伐鍏封€濇湰韬氨鏄繍琛屾椂璇箟鐨勪竴閮ㄥ垎銆?
---

### 鍐嶇湅 `filterToolsByDenyRules(...)`

瀹冧細鏍规嵁 `ToolPermissionContext` 杩囨护鎺夎 blanket deny 鐨勫伐鍏枫€?
### 涓轰粈涔堣繖涓€姝ヤ笉鏄浣欑殑

鍥犱负鏉冮檺涓嶅簲璇ュ彧鍦ㄨ皟鐢ㄦ椂鐢熸晥锛岃繕搴旇鍦ㄦ毚闇叉椂鐢熸晥銆?
濡傛灉妯″瀷鑳界湅鍒颁竴涓案杩滀笉浼氭垚鍔熸墽琛岀殑宸ュ叿锛屽畠鐨勬帹鐞嗕細琚薄鏌撱€?
---

### 鍐嶇湅 `getTools(permissionContext)`

杩欓噷鍋氫簡鍑犱欢浜嬶細

#### 1. 澶勭悊 simple mode

simple mode 涓嬩笉鏄繑鍥炲叏閲忓伐鍏凤紝鑰屾槸涓€涓畝鍖栧瓙闆嗐€?
#### 2. 鍦?REPL mode 涓嬪鐞嗙壒娈婂伐鍏锋毚闇茬瓥鐣?
姣斿 REPL mode 浼氶殣钘忔煇浜?primitive tools锛屽洜涓哄畠浠凡缁忛€氳繃 VM 灏佽鍚庢毚闇层€?
#### 3. 鍏堟帓闄?special tools锛屽啀鍋?deny rule 杩囨护

杩欒鏄庣郴缁熷苟涓嶆槸鈥滄湁宸ュ叿灏辩洿鎺ョ粰妯″瀷鈥濓紝鑰屾槸缁忚繃澶氬眰绛栫暐瑁佸壀銆?
### 杩欓噷鏈€鍊煎緱瀛︾殑鍦版柟

鏄袱灞傚垎绂伙細

- `getAllBaseTools()`锛氬洖绛斺€滅郴缁熸湁浠€涔堚€?- `getTools(...)`锛氬洖绛斺€滃綋鍓嶄細璇濆簲鏆撮湶浠€涔堚€?
---

## 涓夈€乣src/query.ts`

杩欎竴閮ㄥ垎鏈€閲嶈锛屼絾涔熸渶瀹规槗鐪嬫檿銆傚缓璁綘鎸夆€滅姸鎬?-> 鍑嗗 -> 鍒嗗弶 -> 缁х画鈥濇潵璇汇€?
---

### 1. `State` 绫诲瀷

```ts
type State = {
  messages
  toolUseContext
  autoCompactTracking
  maxOutputTokensRecoveryCount
  hasAttemptedReactiveCompact
  maxOutputTokensOverride
  pendingToolUseSummary
  stopHookActive
  turnCount
  transition
}
```

### 涓轰粈涔堣繖鏄叧閿?
瀹冨憡璇変綘锛歚queryLoop()` 涓嶆槸鏅€氶€掑綊鍑芥暟锛岃€屾槸鍦ㄧ淮鎶や竴涓法 iteration 鐨勬樉寮忕姸鎬佹満銆?
`transition` 瀛楁灏ゅ叾鍏抽敭锛屽洜涓哄畠鎶娾€滀负浠€涔堢户缁€濆彉鎴愪簡鍙瀵熺姸鎬併€?
---

### 2. `query()` 澶栧眰鍖呰

`query()` 鑷繁骞朵笉鍋氬お澶氫笟鍔★紝鍙槸锛?
- 璋冪敤 `queryLoop()`
- 鍦ㄦ甯搁€€鍑烘椂琛ュ彂 `notifyCommandLifecycle(..., 'completed')`

### 杩欒鏄庝粈涔?
璇存槑浣滆€呭埢鎰忔妸锛?
- 瀵瑰 API
- 鍐呴儴涓诲惊鐜?
鎷嗘垚浜嗕袱灞傘€?
---

### 3. `queryLoop()` 寮€澶达細immutable params + mutable state

杩欓噷鏈変竴涓緢鎴愮啛鐨勮璁★細

- 涓嶅彉鍙傛暟鍗曠嫭瑙ｆ瀯
- 鍙彉鐘舵€佺粺涓€鏀捐繘 `state`

### 涓轰粈涔堝€煎緱瀛?
鍥犱负 query loop 鏈夐潪甯稿 continue 璺緞銆傚鏋滄妸姣忎釜鐘舵€佹媶鎴愭暎钀藉彉閲忥紝鍚庨潰鍑犱箮涓嶅彲缁存姢銆?
---

### 4. 姣忚疆寮€澶村厛澶勭悊鍑嗗宸ヤ綔

杩欎竴娈靛寘鎷細

- 璁板繂棰勫彇
- skill discovery prefetch
- `queryTracking`
- `messagesForQuery` 缁勮
- `applyToolResultBudget(...)`
- snip / microcompact / collapse / autocompact

### 杩欓噷鏈€瀹规槗琚拷鐣ョ殑涓€鐐?
浣滆€呭苟涓嶆槸鈥滅瓑妯″瀷鎶ラ敊浜嗗啀鏁戔€濓紝鑰屾槸鍦ㄨ姹傚墠灏变富鍔ㄥ仛棰勭畻鍜屽帇缂╂帶鍒躲€?
杩欐槸涓€绉嶈繍琛屾椂绋冲畾鎬ф€濈淮銆?
---

### 5. 宸ュ叿璋冪敤鍓嶏細娑堟伅宸茬粡琚暣鐞嗘垚閫傚悎 query 鐨勫舰鎬?
杩欎竴姝ユ剰鍛崇潃锛?
- query loop 涓嶅彧鏄礋璐ｂ€滆皟鐢ㄦā鍨嬧€?- 瀹冧篃璐熻矗鈥滃喅瀹氭ā鍨嬭鐪嬪埌鎬庢牱鐨勫巻鍙测€?
杩欏氨鏄负浠€涔堝畠蹇呴』鎺屾帶 compact 鍜?tool result budget銆?
---

### 6. 鏃犲伐鍏疯皟鐢ㄦ椂锛氳繘鍏?budget / complete 鍒ゆ柇

鍦ㄦ病鏈?tool use blocks 鐨勬儏鍐典笅锛岀郴缁熶笉浼氱珛鍒荤畝鍗曡繑鍥烇紝鑰屼細鍏堢湅锛?
- stop hook blocking
- token budget continuation
- completion 浜嬩欢

### 涓轰粈涔堣繖鏍疯璁?
鍥犱负鈥滄病宸ュ叿鈥濅笉绛変簬鈥滃彲浠ョ粨鏉熲€濄€傝繍琛屾椂杩樻湁鍏朵粬缁х画鏉′欢銆?
---

### 7. 鏈夊伐鍏疯皟鐢ㄦ椂锛氳繘鍏?`runTools(...)`

杩欓噷鏄富寰幆鏈€鏍稿績鐨勫垎鍙変箣涓€銆?
绯荤粺浼氾細

- 鎵ц宸ュ叿鎵瑰鐞?- 娴佸紡鎺ユ敹宸ュ叿鏇存柊
- `yield` 宸ュ叿娑堟伅
- 鎶婂伐鍏风粨鏋?normalize 鍥炵敤鎴锋秷鎭?- 鍚堝苟鍙兘鏇存柊杩囩殑 context

### 杩欒鏄庝粈涔?
璇存槑宸ュ叿涓嶆槸澶栧洿鍓綔鐢紝鑰屾槸 query loop 涓鐨勪富娴佺▼銆?
---

### 8. 宸ュ叿鎵ц鍚庯細寮傛鐢熸垚 tool summary

绯荤粺浼氭彁鍙栵細

- tool name
- tool input
- tool output
- 鏈€鍚庝竴涓?assistant text

鐒跺悗寮傛鍚姩 `generateToolUseSummary(...)`銆?
### 涓轰粈涔堜笉闃诲涓嬩竴杞?
鍥炵瓟锛?鍥犱负 summary 鏈変环鍊硷紝浣嗕笉搴斿崱涓婚摼璺€傝繖浣撶幇浜嗘槑鏄剧殑鈥滀富閾捐矾浼樺厛鈥濇€濇兂銆?
---

### 9. 宸ュ叿鎵ц鍚庤繕瑕佺户缁鐞嗗緢澶氫簨鎯?
鍖呮嫭锛?
- abort
- hook stopped continuation
- queued commands snapshot
- attachments
- memory prefetch consume

### 涓轰粈涔?query loop 浼氳繖涔堝ぇ

鍥炵瓟锛?鍥犱负杩欎簺浜嬫儏閮界洿鎺ュ奖鍝嶁€滀笅涓€杞埌搴曡鐪嬪埌浠€涔堟秷鎭€濄€傚畠浠笉閫傚悎鏁ｅ埌澶栧洿锛屽惁鍒欐秷鎭富绾夸細鏂€?
---

## 鍥涖€佹妸涓変釜鏂囦欢涓茶捣鏉ョ湅

```text
Tool.ts
  -> 瀹氫箟杩愯鏃跺崗璁竟鐣?
tools.ts
  -> 瀹氫箟鍏ㄩ噺宸ュ叿鐪熸簮
  -> 鏍规嵁褰撳墠涓婁笅鏂囪鍓彲瑙佸伐鍏锋睜

query.ts
  -> 椹卞姩娑堟伅銆佹ā鍨嬨€佸伐鍏枫€侀绠椼€佹仮澶嶅舰鎴愬畬鏁撮棴鐜?```

## 杩欎竴濂楄璁″洖绛斾簡浠€涔堟洿澶х殑闂

鍥炵瓟锛?瀹冨洖绛旂殑鏄€滃綋 AI 绯荤粺杩涘叆鐪熷疄 agent 鍦烘櫙鍚庯紝濡備綍閬垮厤宸ュ叿璋冪敤銆佹祦寮忚緭鍑恒€佹仮澶嶉€昏緫鍜岄绠楁帶鍒舵暎鎴愪竴鍫嗚ˉ涓佲€濄€?
Claude Code 鐨勭瓟妗堟槸锛?
- 鎶婂伐鍏锋娊璞″崌绾ф垚杩愯鏃跺崗璁?- 鎶婂伐鍏锋睜鏆撮湶鎺у埗鍋氭垚鏄惧紡灞?- 鎶婁竴鍒囩户缁笌鎭㈠閫昏緫缁熶竴鏀捐繘 query loop

