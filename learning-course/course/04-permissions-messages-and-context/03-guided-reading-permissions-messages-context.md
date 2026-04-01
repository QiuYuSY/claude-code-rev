# 閫愭绮捐锛歚permissionSetup.ts -> messages.ts -> context.ts`

杩欎唤鏂囨。鎸夆€滃厛鏉冮檺锛屽啀娑堟伅锛屽啀涓婁笅鏂団€濈殑椤哄簭甯︿綘璇荤鍥涜鐨勫叧閿枃浠躲€?
---

## 涓€銆乣src/utils/permissions/permissionSetup.ts`

### 绗竴鐪煎簲璇ョ湅浠€涔?
鍏堟姄杩欏嚑涓嚱鏁帮細

- `parseToolListFromCLI(...)`
- `initialPermissionModeFromCLI(...)`
- `initializeToolPermissionContext(...)`
- `removeDangerousPermissions(...)`
- `stripDangerousPermissionsForAutoMode(...)`

---

### 1. `initializeToolPermissionContext(...)`

杩欎釜鍑芥暟鎺ユ敹锛?
- `allowedToolsCli`
- `disallowedToolsCli`
- `baseToolsCli`
- `permissionMode`
- `allowDangerouslySkipPermissions`
- `addDirs`

鐒跺悗鍋氬嚑浠跺叧閿殑浜嬶細

#### A. 瑙ｆ瀽骞惰鑼冨寲 CLI 鎻愪緵鐨勫伐鍏疯鍒?
杩欎竴姝ュ苟涓嶆槸绠€鍗?split string锛岃€屾槸瑕佸仛 legacy name 鍏煎涓庤鑼冨寲銆?
#### B. 濡傛灉鎸囧畾浜?base tools锛屽氨鑷姩鎷掔粷鍏朵綑宸ュ叿

杩欒鏄?base tool list 涓嶆槸寤鸿锛岃€屾槸鑳藉姏杈圭晫銆?
#### C. 寤虹珛 `additionalWorkingDirectories`

璇存槑鏉冮檺绯荤粺涓嶄粎绠″伐鍏峰悕锛岃繕绠″伐浣滅洰褰曡寖鍥淬€?
#### D. 璇诲彇纾佺洏瑙勫垯锛屽苟璇嗗埆鍗遍櫓 shell 鏉冮檺

杩欓噷鍖呮嫭锛?
- overly broad bash/powershell permissions
- auto mode 涓嬪嵄闄╄鍒欒瘑鍒?
### 涓轰粈涔堣繖涓€姝ユ剰涔夐噸澶?
鍥犱负瀹冨湪鍚姩闃舵灏辨妸鈥滄潈闄愮瓥鐣モ€濅粠杈撳叆鍙傛暟杞垚浜嗏€滆繍琛屾椂涓婁笅鏂囧璞♀€濄€?
---

### 2. `removeDangerousPermissions(...)` / `stripDangerousPermissionsForAutoMode(...)`

杩欎袱涓嚱鏁板緢鑳戒綋鐜?Claude Code 鐨勫畨鍏ㄨ璁℃€濊矾銆?
### 瀹冧滑鍦ㄥ仛浠€涔?
涓嶆槸绛夊嵄闄╄皟鐢ㄥ彂鐢熸椂鍐嶆嫤鎴紝鑰屾槸鍏堟妸鍗遍櫓瑙勫垯浠庝笂涓嬫枃閲屽墺绂绘帀銆?
### 涓轰粈涔堝€煎緱瀛?
鍥犱负杩欐槸鈥滈闃插紡鏉冮檺鎺у埗鈥濓紝涓嶆槸鈥滀簨鍚庡脊绐楀紡鎺у埗鈥濄€?
---

## 浜屻€乣src/utils/messages.ts`

杩欓儴鍒嗘渶閲嶈鐨勪笉鏄叏閮ㄥ疄鐜帮紝鑰屾槸鐞嗚В鈥滄秷鎭伐鍘?+ API 鏍囧噯鍖栤€濅袱灞傜粨鏋勩€?
---

### 1. `createAssistantAPIErrorMessage(...)`

杩欎釜宸ュ巶鍑芥暟璇存槑锛?
- API error 涓嶆槸鏅€氬瓧绗︿覆
- 瀹冭浠?assistant message 鐨勫舰寮忚繘鍏ヨ繍琛屾椂鍘嗗彶

### 涓轰粈涔堣繖鏍疯璁?
鍥犱负閿欒鏈韩涔熸槸绯荤粺鍘嗗彶鐨勪竴閮ㄥ垎锛屽畠浼氬奖鍝嶅悗缁仮澶嶄笌鐢ㄦ埛鐞嗚В銆?
---

### 2. `createUserMessage(...)`

杩欐槸娑堟伅绯荤粺鐨勬牳蹇冨伐鍘備箣涓€銆?
瀹冮櫎浜?`content` 涔嬪锛岃繕鏀寔锛?
- `isMeta`
- `isVisibleInTranscriptOnly`
- `isVirtual`
- `isCompactSummary`
- `toolUseResult`
- `mcpMeta`
- `permissionMode`
- `origin`

### 杩欒鏄庝粈涔?
璇存槑 鈥渦ser message鈥?鍦ㄨ繖閲屼笉鏄€滀汉绫绘墜鎵撴枃鏈€濊繖涔堢畝鍗曪紝鑰屾槸缁熶竴鎵胯浇鍚勭杩愯鏃惰緭鍏ャ€?
### 涓轰粈涔堜竴瀹氳鐢ㄥ伐鍘傚嚱鏁?
鍥炵瓟锛?鍥犱负 message 鏄富绾垮璞°€傚彧瑕佸畠鐨勮涔夊紑濮嬪鏉傦紝缁熶竴宸ュ巶灏辨瘮鎵嬪啓瀵硅薄绋冲畾寰楀銆?
---

### 3. `normalizeMessagesForAPI(...)`

杩欐槸绗洓璇炬渶鍊煎緱閲嶇偣璇荤殑鍑芥暟涔嬩竴銆?
瀹冧細鍋氾細

#### A. 鍏堥噸鎺?attachment

璇存槑 attachment 鍦?API 璇箟涓湁椤哄簭瑕佹眰銆?
#### B. 鍓旈櫎 virtual messages

鍥犱负瀹冧滑鍙湇鍔′簬 UI锛屼笉搴旇娉勬紡缁欐ā鍨嬨€?
#### C. 杩囨护涓嶈鍙戠粰 API 鐨?system/progress/synthetic error 绛夋秷鎭?
璇存槑鈥滆繍琛屾椂鍐呴儴鍘嗗彶鈥濅笌鈥滄ā鍨嬫渶缁堣緭鍏モ€濇槸涓や釜灞傛銆?
#### D. 鍚堝苟杩炵画 user messages

杩欐槸鍦ㄩ€傞厤 API 渚х害鏉燂紝鍚屾椂淇濊瘉鍐呴儴琛ㄨ揪鐏垫椿銆?
### 涓轰粈涔堣繖涓嚱鏁伴噸瑕?
鍥犱负瀹冩壆婕斾簡鈥滃唴閮ㄨ繍琛屾椂鍘嗗彶 -> 澶栭儴妯″瀷杈撳叆鈥濈殑杈圭晫杞崲鍣ㄣ€?
---

## 涓夈€乣src/context.ts`

杩欎釜鏂囦欢鐨勫叧閿湪浜庯細绯荤粺娌℃湁鎶婁笂涓嬫枃褰撴垚涓€涓叏灞€瀛楃涓诧紝鑰屾槸鎷嗘垚涓ょ被 memoized 鐢熸垚鍣ㄣ€?
---

### 1. `getSystemContext()`

瀹冧細鏀堕泦锛?
- git status
- branch / main branch
- recent commits
- git user
- 鏌愪簺璋冭瘯娉ㄥ叆淇℃伅

### 涓轰粈涔堣繖浜涗俊鎭睘浜?system context

鍥犱负瀹冧滑鏇村儚鐜浜嬪疄锛岃€屼笉鏄敤鎴锋樉寮忚緭鍏ャ€?
---

### 2. `getUserContext()`

瀹冧細鏀堕泦锛?
- CLAUDE.md
- memory files
- 褰撳墠鏃ユ湡

### 涓轰粈涔堣繖浜涗俊鎭睘浜?user context

鍥犱负瀹冧滑鏇磋创杩戝綋鍓嶄粨搴撱€佸綋鍓嶇敤鎴峰伐浣滀笂涓嬫枃鍜屽綋鍓嶄换鍔＄幆澧冦€?
---

### 3. 涓轰粈涔?`getSystemContext()` / `getUserContext()` 閮藉仛浜?memoize

鍥炵瓟锛?鍥犱负杩欎簺涓婁笅鏂囬€氬父鍦ㄤ竴涓細璇濅腑浼氳澶氭浣跨敤锛屼絾瀹冧滑鐨勬瀯閫犲彲鑳芥秹鍙婏細

- Git 鍛戒护
- 鏂囦欢绯荤粺鎵弿
- CLAUDE.md 璇诲彇

濡傛灉涓嶇紦瀛橈紝浼氬浣撻獙鍜屼竴鑷存€ч兘閫犳垚浼ゅ銆?
---

## 鍥涖€佹妸涓夌粍鏂囦欢涓茶捣鏉ョ湅

```text
permissionSetup.ts
  -> 鎶?CLI / 纾佺洏瑙勫垯 / 妯″紡閫夋嫨
  -> 杞垚 ToolPermissionContext
  -> 鍐冲畾褰撳墠浼氳瘽鐨勮兘鍔涜竟鐣?
messages.ts
  -> 鎶婂唴閮ㄨ繍琛屾椂浜嬩欢缁熶竴寤烘ā鎴?message
  -> 鍐嶆妸鍐呴儴鍘嗗彶杞崲鎴?API 杈撳叆

context.ts
  -> 鎶婄幆澧冦€佷粨搴撳拰鐢ㄦ埛鐩稿叧淇℃伅瑁呴厤鎴愮郴缁熶笂涓嬫枃涓庣敤鎴蜂笂涓嬫枃
```

## 杩欎竴濂楄璁″洖绛斾簡浠€涔堟洿澶х殑闂

鍥炵瓟锛?瀹冨洖绛旂殑鏄€滃浣曞湪澶嶆潅 agent 绯荤粺閲岃鑳藉姏鏆撮湶銆佸巻鍙茶〃杈惧拰妯″瀷杈撳叆淇濇寔涓€鑷翠笖鍙帶鈥濄€?
Claude Code 鐨勭瓟妗堟槸锛?
- 鐢ㄦ潈闄愮郴缁熸帶鍒惰兘鍔涜竟鐣?- 鐢ㄦ秷鎭郴缁熸帶鍒惰繍琛屾椂鍘嗗彶琛ㄨ揪
- 鐢ㄤ笂涓嬫枃瑁呴厤鎺у埗妯″瀷杈撳叆瑙嗛噹

