# Claude Code 涓庡叾浠?Agent 鐨勫樊寮傚湴鍥?
## 杩欎唤鏂囨。瑙ｅ喅浠€涔堥棶棰?
濡傛灉浣犲凡缁忔帴瑙﹁繃鍒殑 agent 绯荤粺锛屾渶澶х殑闂閫氬父涓嶆槸鈥滅湅涓嶆噦浠ｇ爜鈥濓紝鑰屾槸锛?
- 鎴戝簲璇ユ妸 Claude Code 鐪嬫垚鍝竴绫荤郴缁燂紵
- 瀹冨拰鎴戠啛鎮夌殑閭ｇ被 agent 鍒板簳宸湪鍝紵

杩欎唤鏂囨。灏辨槸鍦ㄥ府浣犲仛璁ょ煡杩佺Щ銆?
## 鍏堢粰涓€鍙ユ€荤粨

Claude Code 涓嶆槸锛?
- 绾?chat agent
- 绾?tool-calling wrapper
- 绾 agent 缂栨帓妗嗘灦
- 绾?IDE 鎻掍欢

瀹冩洿鍍忔槸锛?
鈥滀竴涓互缁堢 REPL 涓烘牳蹇冧氦浜掗潰銆佷互 query loop 涓鸿繍琛屾椂蹇冭剰銆佷互宸ュ叿/鏉冮檺/鐘舵€?鎵╁睍绯荤粺涓轰竴绛夊叕姘戠殑 coding agent 骞冲彴銆傗€?
## 涓€銆丆laude Code vs 閫氱敤 Chat Agent

### 閫氱敤 Chat Agent 鐨勫吀鍨嬬壒寰?
- 浠?prompt-response 涓轰富
- 涓婁笅鏂囦富瑕佹槸娑堟伅鍘嗗彶
- 宸ュ叿瑕佷箞娌℃湁锛岃涔堝緢杞?- UI 甯稿父鍙槸鑱婂ぉ绐楀彛

### Claude Code 鐨勫樊寮?
- 鏍稿績浜や簰涓嶆槸鑱婂ぉ绐楀彛锛岃€屾槸 REPL/TUI
- 杩愯鏃朵笉鏄€滃彂涓€娆¤姹傗€濓紝鑰屾槸 query loop
- 宸ュ叿绯荤粺寰堥噸锛屼細褰卞搷娑堟伅銆佺姸鎬併€佹潈闄愬拰鍚庣画杞
- 浼氳瘽涓瓨鍦ㄤ换鍔°€乤gent銆丮CP銆佹彃浠躲€佽繙绋嬬姸鎬佺瓑闀挎湡瀹炰綋

### 杩佺Щ鎻愰啋

濡傛灉浣犲甫鐫€鈥滆亰澶╂満鍣ㄤ汉鈥濈殑蹇冩櫤妯″瀷鏉ョ湅 Claude Code锛屼綘浼氫綆浼帮細

- 鐘舵€佸鏉傚害
- 宸ュ叿闂幆鐨勯噸瑕佹€?- 鏉冮檺鍓嶇疆鐨勯噸瑕佹€?
## 浜屻€丆laude Code vs 閫氱敤 Tool-Calling Agent

### 閫氱敤 Tool Agent 鐨勫吀鍨嬬壒寰?
- 妯″瀷杈撳嚭 tool call
- 澶栧洿鎵ц宸ュ叿
- 鎶婄粨鏋滃啀鍠傚洖妯″瀷

### Claude Code 鐨勫樊寮?
Claude Code 褰撶劧涔熷仛杩欎釜锛屼絾瀹冩洿杩涗竴姝ワ細

- 宸ュ叿姹犱細鍏堣鏉冮檺鍜屾ā寮忚鍓?- 宸ュ叿鎵ц涓婁笅鏂囪兘璁块棶 AppState銆乁I銆侀€氱煡銆乤gent銆丮CP 璧勬簮
- 宸ュ叿缁撴灉杩樹細鍙楀埌 budget / compact / normalize 瑙勫垯褰卞搷
- 宸ュ叿鎵ц涓嶆槸澶栧洿 helper锛岃€屾槸 query loop 涓涓绘祦绋?
### 杩佺Щ鎻愰啋

濡傛灉浣犳潵鑷櫘閫?tool-calling 绯荤粺锛孋laude Code 鏈€瀹规槗璁╀綘鎯婅鐨勬槸锛?
鈥滃伐鍏峰湪杩欓噷涓嶆槸鍑芥暟鍒楄〃锛岃€屾槸杩愯鏃舵彃浠舵帴鍙ｃ€傗€?
## 涓夈€丆laude Code vs 澶?Agent 缂栨帓妗嗘灦

### 澶?Agent 妗嗘灦鐨勫吀鍨嬬壒寰?
- 鏇村叧娉?agent 涔嬮棿鐨勮鑹插垎宸?- 鏇村叧娉?delegation / orchestration
- UI 寰€寰€涓嶆槸鏍稿績

### Claude Code 鐨勫樊寮?
Claude Code 褰撶劧涔熸敮鎸?agent / task / teammate 涓€绫昏兘鍔涳紝浣嗗畠鐨勯噸蹇冩槑鏄句笉鍚岋細

- 涓诲叆鍙ｄ粛鐒舵槸鍗曚釜 REPL 浼氳瘽
- 澶?agent 鍗忎綔琚撼鍏ュ悓涓€浼氳瘽鐘舵€佷腑蹇?- 浠诲姟銆佸墠鍚庡彴 agent銆乫oreground transcript 閮芥槸 UI 绾х姸鎬?
### 杩佺Щ鎻愰啋

涓嶈鎶?Claude Code 鐞嗚В鎴愪竴涓€滅函 coordinator framework鈥濄€傚畠鏇村儚锛?
- 浠ヤ釜浜虹紪鐮佷細璇濅负涓績
- 鍐嶅悜澶?agent 鎵╁睍

## 鍥涖€丆laude Code vs IDE Coding Agent

### IDE Agent 鐨勫吀鍨嬬壒寰?
- 缂栬緫鍣ㄤ笂涓嬫枃鏄腑蹇?- UI 鏄?IDE 闈㈡澘鎴栧唴宓屼氦浜?- 鐘舵€侀€氬父闄勭潃鍦?IDE 宸ヤ綔鍖?
### Claude Code 鐨勫樊寮?
- 瀹冪殑鍘熺敓蹇冩櫤妯″瀷鏄粓绔細璇濓紝涓嶆槸 IDE 闈㈡澘
- 鍗充娇鏈?IDE/remote/bridge 鎵╁睍锛孯EPL 浠嶆槸浜у搧鏍稿績
- 瀹冨 shell銆亀orktree銆乸ermissions銆丆LI modes 闈炲父閲嶈

### 杩佺Щ鎻愰啋

濡傛灉浣犳潵鑷?IDE agent 瑙嗚锛屼笉瑕佸厛鎵锯€滅紪杈戝櫒鍔熻兘鈥濓紱鍏堟壘锛?
- 鍚姩閾捐矾
- REPL
- query loop
- 宸ュ叿涓庢潈闄愯竟鐣?
## 浜斻€丆laude Code 鏈€鐗瑰埆鐨?6 涓偣

### 1. REPL 鏄骇鍝佹牳蹇冿紝涓嶆槸澶栧３

寰堝 agent 浜у搧鎶?UI 褰撳睍绀哄眰锛孋laude Code 涓嶆槸銆?
### 2. query loop 鏄郴缁熷績鑴?
寰堝绯荤粺鎶?query 钘忓湪 API service 閲岋紝Claude Code 鏄庣‘鎶婂畠鍋氭垚涓诲惊鐜€?
### 3. 鏉冮檺琚墠缃垚杩愯鏃惰竟鐣?
瀹冧笉鏄渶鍚庡脊涓€涓‘璁ゆ锛岃€屾槸褰卞搷宸ュ叿鑳借搴﹀拰鑷姩妯″紡琛屼负銆?
### 4. 宸ュ叿绯荤粺閲嶉噺绾?
`ToolUseContext` 鏄庣‘琛ㄦ槑宸ュ叿浼氳法瓒婄姸鎬併€乁I銆佹潈闄愬拰 agent 杈圭晫銆?
### 5. AppState 寰堥噸锛屼絾涓嶆槸鍋剁劧

杩欏弽鏄犵殑鏄暱鏈熶細璇濄€佷换鍔°€佹彃浠躲€丮CP銆乺emote/bridge 鐨勭湡瀹炲鏉傚害銆?
### 6. 骞冲彴鍖栨墿灞曞緢寮?
MCP銆佹彃浠躲€丼kills 涓嶆槸闆舵暎鍔熻兘锛岃€屾槸绯荤粺婕旇繘鏂瑰悜銆?
## 鍏€佸鏋滀綘鏉ヨ嚜鍒殑 Agent 绯荤粺锛屽缓璁綘鍏堢湅浠€涔?
### 濡傛灉浣犵啛鎮?chat agent

鍏堢湅锛?
- 绗笁璇?REPL / AppState
- 绗簩璇?query loop

鍥犱负浣犳渶瀹规槗浣庝及浜や簰涓庣姸鎬佸鏉傚害銆?
### 濡傛灉浣犵啛鎮?tool-calling agent

鍏堢湅锛?
- 绗簩璇惧伐鍏风郴缁?- 绗洓璇炬潈闄愩€佹秷鎭€佷笂涓嬫枃

鍥犱负浣犳渶瀹规槗鎶婂伐鍏风郴缁熸兂寰楀お杞汇€?
### 濡傛灉浣犵啛鎮夊 agent 妗嗘灦

鍏堢湅锛?
- 绗笁璇?AppState
- 绗簲璇炬墿灞曟灦鏋?
鍥犱负浣犳渶瀹规槗蹇界暐 Claude Code 鐨勫崟浼氳瘽涓績璁捐銆?
### 濡傛灉浣犵啛鎮?IDE coding agent

鍏堢湅锛?
- 绗竴璇惧惎鍔ㄩ摼璺?- 绗笁璇?REPL

鍥犱负浣犳渶闇€瑕侀噸鏂板缓绔嬧€滅粓绔細璇濅紭鍏堚€濈殑蹇冩櫤妯″瀷銆?
## 鏈€鍚庝竴鍙ヨ瘽

鐞嗚В Claude Code 鏈€閲嶈鐨勫垏鎹紝涓嶆槸浠庘€滀笉浼?agent鈥濆埌鈥滀細 agent鈥濓紝鑰屾槸浠庘€滄垜鐔熸倝鐨?agent 鏄?X鈥濆垏鎹㈠埌鈥淐laude Code 鏄竴涓互缁堢杩愯鏃朵负涓績鐨?coding agent 骞冲彴鈥濄€?
