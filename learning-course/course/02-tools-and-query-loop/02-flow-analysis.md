# 宸ュ叿绯荤粺涓?Query Loop 娴佺▼鍒嗘瀽

## 涓绘祦绋?
```text
User Input
  -> messages
      -> query()
          -> queryLoop()
              -> buildQueryConfig()
              -> prepare messagesForQuery
              -> model streaming
              -> inspect assistant output
                  -> no tool use
                      -> budget / stop / complete
                  -> tool use
                      -> runTools(...)
                      -> normalize tool results
                      -> write results back to messages
                      -> continue next iteration
```

## 绗?1 灞傦細`src/Tool.ts`

杩欎釜鏂囦欢鏈€搴旇琚悊瑙ｆ垚鈥滆繍琛屾椂鍗忚灞傗€濄€?
瀹冨畾涔夌殑涓嶆槸涓€涓绔嬬殑宸ュ叿绛惧悕锛岃€屾槸宸ュ叿鍦ㄧ郴缁熼噷鐢熷瓨鎵€闇€瑕佺殑杈圭晫淇℃伅銆?
### 杩欓噷鏈€鍊煎緱鍏虫敞鐨勫璞?
- `ToolInputJSONSchema`
- `ToolPermissionContext`
- `ToolUseContext`
- 鑻ュ共 progress / permission / message 鐩稿叧绫诲瀷

### 涓轰粈涔堝畠閲嶈

鍥犱负浣犱粠杩欎釜鏂囦欢閲屽氨鑳界湅鍑猴細

- 宸ュ叿瑕佹帴瑙︽秷鎭?- 宸ュ叿瑕佹帴瑙?UI
- 宸ュ叿瑕佹帴瑙︽潈闄?- 宸ュ叿瑕佹帴瑙?AppState
- 宸ュ叿瑕佹帴瑙?agent / MCP / resources

杩欒鏄庡伐鍏峰凡缁忎笉鏄€滅函鍑芥暟鈥濄€?
## 绗?2 灞傦細`src/tools.ts`

杩欎釜鏂囦欢鍋氫袱浠跺叧閿殑浜嬶細

1. 瀹氫箟鍏ㄩ噺鍩虹宸ュ叿闆?`getAllBaseTools()`
2. 鏍规嵁褰撳墠涓婁笅鏂囧緱鍒板疄闄呭伐鍏锋睜 `getTools(permissionContext)`

### 涓轰粈涔堣鍒嗚繖涓ゅ眰

鍥犱负绯荤粺闇€瑕佸尯鍒嗭細

- 鐞嗚涓婄殑鎬昏兘鍔?- 褰撳墠浼氳瘽瀹為檯鍏佽鏆撮湶鐨勮兘鍔?
### `getAllBaseTools()` 鍦ㄥ仛浠€涔?
瀹冨垪鍑哄叏閲忓熀纭€宸ュ叿锛屽寘鎷細

- 鏂囦欢璇诲啓缂栬緫
- Bash / PowerShell
- 鎼滅储宸ュ叿
- Web 宸ュ叿
- Agent / Team / Message 宸ュ叿
- 璁″垝涓庝换鍔″伐鍏?- MCP 璧勬簮宸ュ叿

### `getTools()` 鍦ㄥ仛浠€涔?
瀹冨啀鍩轰簬锛?
- simple mode
- repl mode
- deny rules
- coordinator mode
- 鐗规畩宸ュ叿鎺掗櫎

鏉ヨ鍓渶缁堝伐鍏锋睜銆?
## 绗?3 灞傦細`src/query.ts`

杩欓噷鎵嶆槸杩愯鏃朵富绾裤€?
### `query()` 鍋氫粈涔?
瀹冩槸瀵瑰鏆撮湶鐨?async generator 鍖呰鍣紝璐熻矗锛?
- 璋冪敤 `queryLoop()`
- 鍦ㄦ甯哥粨鏉熸椂鍥炴敹鍛戒护鐢熷懡鍛ㄦ湡鐘舵€?
### `queryLoop()` 鍋氫粈涔?
瀹冩墠鏄湡姝ｇ殑涓诲惊鐜紝璐熻矗锛?
- 鍒濆鍖栫姸鎬?- 棰勫彇璁板繂涓庢妧鑳藉彂鐜?- 鏋勯€?queryTracking
- 澶勭悊 tool result budget
- 澶勭悊 snip / microcompact / autocompact
- 璇锋眰妯″瀷骞舵祦寮忔秷璐硅緭鍑?- 杩涘叆宸ュ叿鎵ц
- 鍒ゆ柇缁х画杩樻槸瀹屾垚

## 涓轰粈涔?`State` 鏄繖鑺傝鐨勯噸鐐?
`State` 淇濆瓨浜嗚法 iteration 鐨勫叧閿姸鎬侊細

- `messages`
- `toolUseContext`
- `autoCompactTracking`
- `maxOutputTokensRecoveryCount`
- `hasAttemptedReactiveCompact`
- `maxOutputTokensOverride`
- `pendingToolUseSummary`
- `stopHookActive`
- `turnCount`
- `transition`

杩欒鏄庝綔鑰呭湪鍒绘剰鎶娾€滅户缁矾寰勨€濇樉寮忓寲銆?
## 鍏抽敭琛屼负閾?
### 琛屼负閾?1锛氳繘鍏ヤ富寰幆

- 璇诲彇 immutable params
- 鍒濆鍖?mutable `state`
- 鏋勫缓 `config`
- 寮€濮嬮鍙?
### 琛屼负閾?2锛氬噯澶囧綋鍓嶈疆 query

- 浠庣姸鎬佷腑瑙ｆ瀯鍙橀噺
- 缁勮 `messagesForQuery`
- 鎵ц tool result budget 闄愬埗
- 鎵ц compact / collapse 鐩稿叧閫昏緫

### 琛屼负閾?3锛氭ā鍨嬭緭鍑哄悗鍒嗗弶

- 濡傛灉娌℃湁 tool use锛岃繘鍏?budget / complete 鍒ゆ柇
- 濡傛灉鏈?tool use锛岃繘鍏ュ伐鍏锋壒澶勭悊

### 琛屼负閾?4锛氬伐鍏锋墽琛屽悗缁х画

- 浜у嚭宸ュ叿娑堟伅
- 鎶婄粨鏋?normalize 鍥炴秷鎭祦
- 寮傛鍚姩 tool summary
- 鍒ゆ柇鏄惁涓柇銆侀樆姝㈢户缁垨杩涘叆涓嬩竴杞?
## 杩欎竴鏁村璁捐鍦ㄨВ鍐充粈涔堥棶棰?
### 闂 1锛氬崟娆¤姹傝〃杈句笉浜嗛暱鏈?agent 浼氳瘽

瑙ｅ喅鏂瑰紡锛?鏄惧紡 query loop銆?
### 闂 2锛氬伐鍏风粨鏋滀笉鑳芥父绂讳簬妯″瀷鍘嗗彶涔嬪

瑙ｅ喅鏂瑰紡锛?宸ュ叿缁撴灉娑堟伅鍖栵紝鍐嶅洖鍒版秷鎭富绾裤€?
### 闂 3锛氶绠椼€佹仮澶嶅拰涓柇寰堝鏄撴暎鎴愯ˉ涓侀€昏緫

瑙ｅ喅鏂瑰紡锛?缁熶竴杩涗富寰幆銆?
## 闃舵鎬ф€荤粨

濡傛灉浣犲彧璁颁竴鍙ヨ瘽锛屽簲璇ヨ杩欏彞锛?
鈥淐laude Code 鎶婂伐鍏风郴缁熴€佹秷鎭郴缁熷拰鎭㈠鎺у埗缁熶竴鏀捐繘 query loop锛屽洜姝ゅ畠鏇村儚涓€涓繍琛屾椂锛岃€屼笉鏄竴涓?API 璋冪敤鍣ㄣ€傗€?
