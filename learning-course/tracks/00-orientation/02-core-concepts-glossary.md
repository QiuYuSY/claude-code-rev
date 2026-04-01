# Claude Code 鏍稿績鏈琛?
杩欎唤鏈琛ㄤ笉鏄瘝鍏稿紡缃楀垪锛岃€屾槸涓衡€滄噦鍒殑 agent銆佷絾涓嶆噦 Claude Code鈥濈殑璇昏€呭仛璁ょ煡瀵归綈銆?
姣忎釜璇嶉兘鍥炵瓟 3 浠朵簨锛?
1. 鍦?Claude Code 閲屽畠鏄粈涔堟剰鎬?2. 瀹规槗鍜屼粈涔堟贩娣?3. 濡傛灉浣犳潵鑷埆鐨?agent 妗嗘灦锛屽彲浠ユ妸瀹冪被姣旀垚浠€涔?
## Command

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
缁熶竴鐨勫懡浠ゆ娊璞°€傛潵婧愬彲浠ユ槸锛?
- built-in commands
- plugin commands
- skills
- workflows
- MCP skill-like entries

### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗鍜?shell command 娣锋穯銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滅粺涓€鑳藉姏鍏ュ彛鈥濇垨鈥滅敤鎴?妯″瀷鍙闂殑鍛戒护鍨嬭兘鍔涙弿杩扳€濓紝涓嶆槸鍗曠函缁堢鍛戒护銆?
## Tool

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
妯″瀷鍙皟鐢ㄧ殑杩愯鏃惰兘鍔涘崟鍏冿紝渚嬪锛?
- Bash
- FileRead
- FileEdit
- WebSearch
- Agent

### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗鍜?Command 娣锋穯銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩?tool-calling agent 閲岀殑 function/tool锛屼絾 Claude Code 閲岀殑 Tool 鏇撮噸锛屽洜涓哄畠甯﹀畬鏁磋繍琛屾椂涓婁笅鏂囥€?
## ToolUseContext

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
宸ュ叿鎵ц鏃跺彲璁块棶鐨勫畬鏁磋繍琛屾椂涓婁笅鏂囷紝閲岄潰鍖呮嫭锛?
- AppState 璇诲啓
- 娑堟伅
- UI/notification 鑳藉姏
- MCP clients/resources
- agent 韬唤
- 闄愬埗椤?
### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗鍜屾櫘閫?dependency injection context 娣锋穯銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滆繍琛屾椂鎻掍欢 API surface鈥濓紝鑰屼笉鏄畝鍗?helper 鍙傛暟銆?
## Skill

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
涓€绉嶉潰鍚戞ā鍨嬪拰鐢ㄦ埛鐨勭粨鏋勫寲鑳藉姏鍏ュ彛锛岄€氬父鏉ヨ嚜锛?
- skills 鐩綍
- bundled skills
- plugin skills
- MCP skills

### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗鍜屾櫘閫氬懡浠ゃ€乸rompt template 娣锋穯銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滃甫鍏冧俊鎭殑 prompt capability鈥濓紝涓嶆槸绠€鍗曞埆鍚嶅懡浠ゃ€?
## MCP Resource

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
鏉ヨ嚜 MCP server 鐨勫彲璇诲彇璧勬簮锛屼笉涓€瀹氭槸鍙墽琛屽姩浣溿€?
### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗鍜?MCP Tool 娣锋穯銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滃閮ㄤ俊鎭簮瀵硅薄鈥濓紝涓嶆槸鈥滃彲鎵ц鍑芥暟鈥濄€?
## Query Loop

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
`src/query.ts` 閲岀殑涓诲惊鐜紝璐熻矗锛?
- 鏋勯€?query 杈撳叆
- 娴佸紡澶勭悊妯″瀷杈撳嚭
- 鎵ц宸ュ叿
- 澶勭悊棰勭畻鍜屾仮澶?- 鍐冲畾鏄惁缁х画涓嬩竴杞?
### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗琚悊瑙ｆ垚鈥滆皟鐢ㄦā鍨嬬殑鍑芥暟鈥濄€?
### 鏇存帴杩戜粈涔?
鏇存帴杩?agent runtime state machine銆?
## Message

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
绯荤粺缁熶竴鍘嗗彶杞戒綋锛屾壙杞斤細

- user input
- assistant output
- tool use / tool result
- system message
- attachment
- compact boundary
- tool summary

### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗琚綋鎴愯亰澶╂枃鏈銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滅粺涓€杩愯鏃朵簨浠跺巻鍙测€濄€?
## AppState

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
REPL 浼氳瘽鐨勫叏灞€鐘舵€佷腑蹇冿紝鍖呭惈锛?
- 浼氳瘽鍜屾ā鍨嬮厤缃?- 鏉冮檺鐘舵€?- 浠诲姟鍜?agent 鐘舵€?- MCP 涓庢彃浠剁姸鎬?- remote / bridge 鐘舵€?- 鍘嗗彶鍜岄€氱煡

### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗琚悊瑙ｆ垚鏅€氬墠绔〉闈?state銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滀氦浜掕繍琛屾椂鐨勫叏灞€鐘舵€佹爲鈥濄€?
## Permission Mode

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
褰撳墠浼氳瘽瀵瑰伐鍏疯皟鐢ㄧ殑鏉冮檺绛栫暐妯″紡锛屼細褰卞搷锛?
- 宸ュ叿鏆撮湶
- 鑷姩妯″紡
- 鏄惁鎻愮ず鐢ㄦ埛
- 鏄惁鍏佽鍗遍櫓琛屼负

### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗琚悊瑙ｆ垚绠€鍗?yes/no 鏉冮檺鍒ゆ柇銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滃伐鍏疯皟鐢ㄦ不鐞嗙瓥鐣モ€濄€?
## Compact

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
鎺у埗涓婁笅鏂囦綋绉殑涓€缁勬満鍒讹紝鍖呮嫭锛?
- microcompact
- autocompact
- snip
- context collapse

### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗琚悊瑙ｆ垚鍗曚竴鎽樿姝ラ銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滀笂涓嬫枃棰勭畻涓庡帇缂╃瓥鐣ラ泦鍚堚€濄€?
## Bridge / Remote Control

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
鎶婃湰鍦?CLI 浼氳瘽鍜岃繙绋?绉诲姩/缃戦〉鎺у埗鍦烘櫙杩炴帴璧锋潵鐨勪竴缁勮兘鍔涖€?
### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗鍜屾櫘閫?remote execution 娣锋穯銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滆繙绋嬩細璇濇ˉ鎺ヨ繍琛屾椂鈥濄€?
## REPL

### 鍦?Claude Code 閲屾槸浠€涔堟剰鎬?
缁堢浜や簰涓荤晫闈紝浣嗗畠骞朵笉鏄畝鍗曡緭鍏ヨ緭鍑虹獥鍙ｏ紝鑰屾槸浼氳瘽椹鹃┒鑸便€?
### 瀹规槗鍜屼粈涔堟贩娣?
瀹规槗琚悊瑙ｆ垚 shell prompt銆?
### 鏇存帴杩戜粈涔?
鏇存帴杩戔€滅粓绔噷鐨勭姸鎬佸寲搴旂敤鐣岄潰鈥濄€?
## 鏈€鍚庝竴鍙ヨ瘽

濡傛灉浣犳兂蹇€熷缓绔?Claude Code 蹇冩櫤妯″瀷锛屽彲浠ュ厛璁颁綇杩欑粍鍏崇郴锛?
`Command` 鏄粺涓€鑳藉姏鍏ュ彛  
`Tool` 鏄ā鍨嬪彲璋冪敤鑳藉姏  
`Skill` 鏄粨鏋勫寲鑳藉姏鎻忚堪  
`Message` 鏄粺涓€鍘嗗彶杞戒綋  
`AppState` 鏄氦浜掕繍琛屾椂鐘舵€佹爲  
`query loop` 鏄郴缁熷績鑴?
