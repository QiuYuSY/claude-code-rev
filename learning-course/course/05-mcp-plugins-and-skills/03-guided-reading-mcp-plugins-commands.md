# 閫愭绮捐锛歚mcp/client.ts -> loadPluginCommands.ts -> commands.ts`

杩欎唤鏂囨。鎸夆€滃厛鎺ュ閮ㄥ崗璁紝鍐嶇敓鎴愭湰鍦版墿灞曞懡浠わ紝鏈€鍚庣粺涓€娉ㄥ唽涓績鏀跺彛鈥濈殑椤哄簭甯︿綘璇荤浜旇鐨勫叧閿枃浠躲€?
---

## 涓€銆乣src/services/mcp/client.ts`

### 绗竴鐪煎簲璇ョ湅浠€涔?
鍏堟姄杩欎簺閿氱偣锛?
- `McpAuthError`
- `isMcpSessionExpiredError(...)`
- `getMcpToolTimeoutMs()`
- `buildMcpToolName(...)`
- `fetchMcpSkillsForClient`
- `persistToolResult(...)`

---

### 1. `McpAuthError`

杩欓噷涓撻棬瀹氫箟浜嗕竴涓璇侀敊璇被鍨嬶紝鑰屼笉鏄叏閮芥贩鍦ㄦ櫘閫?Error 閲屻€?
### 涓轰粈涔堝€煎緱瀛?
鍥犱负鍗忚鎺ュ叆灞傚繀椤昏兘鏄庣‘鍦板尯鍒嗭細

- 鏅€氭墽琛岄敊璇?- 璁よ瘉閿欒
- 浼氳瘽杩囨湡閿欒

鍚﹀垯涓婂眰鏃犳硶鍋氭纭仮澶嶃€?
---

### 2. `isMcpSessionExpiredError(...)`

杩欎釜鍑芥暟涓撻棬璇嗗埆锛?
- HTTP 404
- JSON-RPC `-32001`

缁勫悎璧锋潵鍒ゆ柇 鈥淪ession not found鈥濄€?
### 涓轰粈涔堣繖璇存槑璁捐鎴愮啛

鍥犱负浣滆€呮病鏈夊彧鍐?happy path锛岃€屾槸鏄庣‘鑰冭檻浜嗗閮ㄥ崗璁繛鎺ヤ腑鐨勫け鏁堟仮澶嶉棶棰樸€?
---

### 3. `getMcpToolTimeoutMs()`

杩欓噷閫氳繃鐜鍙橀噺鍜岄粯璁ゅ€兼潵鎺у埗 MCP tool call 瓒呮椂銆?
### 涓轰粈涔堣繖閲嶈

鍥犱负澶栭儴鍗忚宸ュ叿鐨勫欢杩熺壒寰佸拰鏈湴宸ュ叿涓嶅悓锛屽钩鍙板繀椤荤粰瀹冨崟鐙殑杩愯鏃跺弬鏁扮┖闂淬€?
---

### 4. `supportsResources` 鍒嗘敮

婧愮爜閲屼細鐪嬪埌锛?
- 濡傛灉 MCP server 鏀寔 resources锛屽氨鍚屾椂鎷夛細
  - tools
  - commands
  - mcp skills
  - resources

鑰屼笖蹇呰鏃朵細鑷姩琛ヤ笂锛?
- `ListMcpResourcesTool`
- `ReadMcpResourceTool`

### 杩欒鏄庝粈涔?
璇存槑 MCP 鍦?Claude Code 閲屼笉鍙槸鈥滆繙绋嬪伐鍏疯皟鐢ㄢ€濓紝鑰屾槸涓€涓畬鏁寸殑澶栭儴鑳藉姏灞傦細

- 鏈夊姩浣?- 鏈夎祫婧?- 杩樻湁妯″瀷鍙敤鎶€鑳?
---

### 5. `persistToolResult(...)` 鍜?`runElicitationHooks(...)`

杩欎袱涓偣寰堝€煎緱娉ㄦ剰銆?
瀹冧滑璇存槑锛?
- MCP tool result 鍙兘闇€瑕佽惤鐩樻垨鎸佷箙鍖?- MCP tool call 鍙兘瑙﹀彂棰濆浜や簰娴佺▼

### 涓轰粈涔堣繖閲嶈

鍥犱负骞冲彴鍨嬭兘鍔涙帴鍏ヤ笉鑳藉彧鑰冭檻涓€娆¤皟鐢紝杩樿鑰冭檻锛?
- 缁撴灉濡備綍绠＄悊
- 澶辫触濡備綍鎭㈠
- 鐢ㄦ埛浜や簰濡備綍琛ュ厖

---

## 浜屻€乣src/utils/plugins/loadPluginCommands.ts`

### 绗竴鐪煎簲璇ョ湅浠€涔?
鍏堟姄杩欏嚑涓嚱鏁帮細

- `collectMarkdownFiles(...)`
- `transformPluginSkillFiles(...)`
- `loadCommandsFromDirectory(...)`
- `createPluginCommand(...)`

---

### 1. `collectMarkdownFiles(...)`

瀹冭礋璐ｉ亶鍘嗘彃浠剁洰褰曞苟璇诲彇 markdown 鏂囦欢锛屽悓鏃惰В鏋?frontmatter銆?
### 涓轰粈涔堣繖涓€姝ラ噸瑕?
鍥犱负鎻掍欢绯荤粺鍦ㄨ繖閲屽凡缁忔槑纭€夋嫨浜嗭細

- 鏂囦欢绯荤粺鍗虫墿灞曡竟鐣?- markdown 鍗冲唴瀹硅浇浣?- frontmatter 鍗冲厓鏁版嵁杞戒綋

---

### 2. `transformPluginSkillFiles(...)`

杩欎釜鍑芥暟浼氬鐩綍涓嚭鐜?`SKILL.md` 鐨勬儏鍐靛仛鐗规畩澶勭悊锛?
- 濡傛灉鏌愮洰褰曚笅瀛樺湪 skill 鏂囦欢锛屽氨浼樺厛鎸?skill 澶勭悊

### 涓轰粈涔堣繖寰堝叧閿?
鍥犱负瀹冭鏄庘€滄妧鑳解€濆拰鈥滄櫘閫氭彃浠跺懡浠も€濊櫧鐒跺叡浜竴閮ㄥ垎鍔犺浇鏈哄埗锛屼絾璇箟骞朵笉瀹屽叏鐩稿悓銆?
---

### 3. `loadCommandsFromDirectory(...)`

杩欎釜鍑芥暟鐨勪富绾垮緢娓呮锛?
1. 鏀堕泦 markdown
2. 澶勭悊 skill 杞崲
3. 閬嶅巻姣忎釜鏂囦欢
4. 浜ょ粰 `createPluginCommand(...)`

### 杩欒鏄庝粈涔?
璇存槑鎻掍欢鍛戒护涓嶆槸鈥滄暎钀借剼鏈€濓紝鑰屾槸涓€涓竻鏅扮殑缂栬瘧寮忔祦绋嬶細

- 鍙戠幇
- 瑙勮寖鍖?- 鐢熸垚

---

### 4. `createPluginCommand(...)`

杩欐槸鎻掍欢鍛戒护绯荤粺鏈€鏍稿績鐨勫嚱鏁般€?
瀹冧細澶勭悊锛?
- `description`
- `allowed-tools`
- `arguments`
- `when_to_use`
- `version`
- `displayName`
- `model`
- `effort`
- `disable-model-invocation`
- `user-invocable`
- `shell`

鏈€缁堣繑鍥炵粺涓€鐨?`Command` 缁撴瀯銆?
### 涓轰粈涔堝畠寰堝€煎緱瀛?
鍥犱负瀹冩妸鈥滄彃浠跺唴瀹光€濇彁鍗囨垚浜嗏€滃钩鍙扮粺涓€鍛戒护鎶借薄鈥濄€?
杩欎竴姝ヨ鍚庣画绯荤粺灏变笉闇€瑕佸叧蹇冨懡浠ゆ潵鑷摢閲岋紝鍙渶瑕侀潰瀵圭粺涓€鐨?`Command`銆?
---

## 涓夈€乣src/commands.ts`

### 鍏堢湅 `loadAllCommands(cwd)`

杩欎釜鍑芥暟浼氬苟琛屾敹闆嗭細

- `getSkills(cwd)`
- `getPluginCommands()`
- `getWorkflowCommands(cwd)`

鐒跺悗鍐嶄笌 `COMMANDS()` 鍚堝苟銆?
### 涓轰粈涔堣繖涓嚱鏁板叧閿?
鍥犱负瀹冩槸骞冲彴鏀跺彛鐨勭涓€姝ワ細鍏堟妸鎵€鏈夋潵婧愮粺涓€鏀堕泦銆?
---

### 鍐嶇湅 `getCommands(cwd)`

瀹冧細鍋氾細

1. 璇诲彇 `loadAllCommands(cwd)` 鐨勭粨鏋?2. 璇诲彇鍔ㄦ€佹妧鑳?3. 鍏堝仛 availability + `isEnabled()` 杩囨护
4. 鍐嶆妸 dynamic skills 鎻掑洖鍚堥€備綅缃?
### 杩欒鏄庝粈涔?
杩欒鏄庣粺涓€娉ㄥ唽涓績涓嶆槸绠€鍗曟嫾鎺ワ紝鑰屾槸瑕佽礋璐ｏ細

- 鏀堕泦
- 鍘婚噸
- 杩囨护
- 鎺掑簭鎻掑叆

---

### 鍐嶇湅 `getMcpSkillCommands(...)` / `getSkillToolCommands(...)`

杩欎竴姝ユ洿杩涗竴姝ヨ鏄庯細

- 鍛戒护瑙嗗浘
- 鎶€鑳借鍥?- MCP 鎶€鑳借鍥?
杩欎簺骞朵笉鏄畝鍗曠浉绛夌殑闆嗗悎銆?
### 涓轰粈涔堣繖寰堝钩鍙板寲

鍥犱负涓嶅悓鍙椾紬闇€瑕佷笉鍚屽垏闈細

- 鐢ㄦ埛鎯崇湅鍛戒护
- 妯″瀷鎯崇湅鎶€鑳?- 澶栭儴鎺ュ叆鎯崇湅璧勬簮/宸ュ叿

---

## 鍥涖€佹妸涓夌粍鏂囦欢涓茶捣鏉ョ湅

```text
mcp/client.ts
  -> 鎶婂閮ㄥ崗璁兘鍔涙帴鍏ユ湰鍦拌繍琛屾椂

loadPluginCommands.ts
  -> 鎶?markdown/frontmatter 鍐呭鐢熸垚缁熶竴 Command

commands.ts
  -> 鎶婂鏉ユ簮鑳藉姏鏀舵潫鎴愬綋鍓嶄細璇濆彲瑙佺殑缁熶竴鍛戒护/鎶€鑳介泦鍚?```

## 杩欎竴濂楄璁″洖绛斾簡浠€涔堟洿澶х殑闂

鍥炵瓟锛?瀹冨洖绛旂殑鏄€滃綋 AI 浜у搧寮€濮嬪钩鍙板寲鏃讹紝濡備綍璁╁閮ㄥ崗璁兘鍔涖€佹湰鍦版墿灞曞唴瀹瑰拰妯″瀷鍙皟鐢ㄨ兘鍔涘悓鏃惰繘鍏ヤ竴涓粺涓€绯荤粺锛岃€屼笉鏄悇鎼炲悇鐨勨€濄€?
Claude Code 鐨勭瓟妗堟槸锛?
- MCP 瑙ｅ喅鍗忚鎺ュ叆
- 鎻掍欢瑙ｅ喅鏈湴鎵╁睍
- Skills 瑙ｅ喅妯″瀷鍏ュ彛
- 娉ㄥ唽涓績瑙ｅ喅缁熶竴鏀跺彛

