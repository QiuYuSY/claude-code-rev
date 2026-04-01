# 涓€娆″畬鏁寸敤鎴疯姹傜殑绔埌绔?Walkthrough

杩欎唤鏂囨。瑕佽В鍐充竴涓緢瀹為檯鐨勯棶棰橈細

鈥滃鏋滄垜鍦?Claude Code 閲岃緭鍏ヤ竴鍙ヨ瘽锛屽埌搴曚細鍙戠敓浠€涔堬紵鈥?
瀹冧笉鏄瘡涓垎鏀殑瀹屾暣瀹炵幇锛岃€屾槸涓€鏉¤冻澶熺湡瀹炵殑涓诲共璺緞銆?
## 鍦烘櫙

鍋囪鐢ㄦ埛鍦?REPL 閲岃緭鍏ワ細

`甯垜鐪嬬湅杩欎釜浠撳簱鐨勫懡浠ょ郴缁熸槸鎬庝箞缁勭粐鐨刞

## 鎬绘祦绋?
```text
鐢ㄦ埛鍦?REPL 杈撳叆
  -> REPL 瑙﹀彂 submit
      -> handlePromptSubmit(...)
          -> processUserInput(...)
              -> createUserMessage(...)
              -> 鐢熸垚鏈疆 messages
                  -> onQuery(...)
                      -> query(...)
                          -> queryLoop()
                              -> 妯″瀷娴佸紡杈撳嚭
                              -> 濡傛湁 tool use 鍒欐墽琛屽伐鍏?                              -> 宸ュ叿缁撴灉鍥炲～娑堟伅
                              -> 鍐冲畾鏄惁缁х画
                  -> REPL 娑堣垂 stream event / message
                      -> setMessages(...)
                      -> 娓叉煋鍒?UI
```

## 绗竴姝ワ細鐢ㄦ埛鍦?REPL 閲屾彁浜よ緭鍏?
鍦?[`src/screens/REPL.tsx`](/d:/Code/learn-claude/claude-code-rev/src/screens/REPL.tsx) 閲岋紝鐢ㄦ埛鎻愪氦鍚庝細璧板埌锛?
- `handlePromptSubmit(...)`

杩欎竴姝ョ殑鍏抽敭鍚箟鏄細

- REPL 鑷繁涓嶆妸杈撳叆鐩存帴鎵旂粰妯″瀷
- 瀹冨厛杩涘叆涓€涓笓闂ㄧ殑鈥滆緭鍏ュ鐞嗗眰鈥?
## 绗簩姝ワ細`handlePromptSubmit(...)`

鍦?[`src/utils/handlePromptSubmit.ts`](/d:/Code/learn-claude/claude-code-rev/src/utils/handlePromptSubmit.ts) 閲岋紝浼氬仛鍑犱欢鍏抽敭鐨勪簨锛?
- reserve query guard锛岄伩鍏嶅苟鍙?turn 娣蜂贡
- 璋冪敤 `processUserInput(...)`
- 鏀堕泦杩欐 turn 鐢熸垚鐨勬柊 messages
- 鍐嶉€氳繃 `onQuery(...)` 鎶婅繖浜?messages 鎺ㄥ叆 query 涓诲惊鐜?
### 涓轰粈涔堣繖涓€姝ュ崟鐙瓨鍦?
鍥犱负鈥滅敤鎴锋彁浜よ緭鍏モ€濅笉鏄崟绾妸瀛楃涓插彂鍑哄幓锛岃繕娑夊強锛?
- 闃熷垪
- workload
- slash command / bash command / prompt 妯″紡鍒嗘祦
- 澶勭悊涓殑 placeholder
- turn 鐢熷懡鍛ㄦ湡鎺у埗

## 绗笁姝ワ細`processUserInput(...)`

鍦?[`src/utils/processUserInput/processUserInput.ts`](/d:/Code/learn-claude/claude-code-rev/src/utils/processUserInput/processUserInput.ts) 閲岋紝浼氬仛锛?
- 澶勭悊 prompt / slash command / bash command 绛変笉鍚岃緭鍏ユā寮?- 鎵ц鐢ㄦ埛鎻愪氦鐩稿叧 hooks
- 鐢熸垚娑堟伅瀵硅薄
- 杩藉姞 attachment銆乭ook 缁撴灉銆乵eta 娑堟伅

### 涓€涓叧閿偣

杩欓噷涓嶄細鐩存帴鈥滄墽琛屾ā鍨嬭姹傗€濓紝鑰屾槸鍏堟妸杈撳叆杞垚缁熶竴娑堟伅缁撴瀯銆?
涔熷氨鏄锛?
鐢ㄦ埛杈撳叆鍏堝彉鎴?`message`锛屽啀杩涘叆 query loop銆?
## 绗洓姝ワ細`createUserMessage(...)`

鍦?[`src/utils/messages.ts`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts) 涓紝鐢ㄦ埛杈撳叆鏈€缁堜細琚寘瑁呮垚缁撴瀯鍖?`UserMessage`銆?
### 涓轰粈涔堜笉鑳界洿鎺ヤ繚鐣欏瓧绗︿覆

鍥犱负绯荤粺鍚庨潰杩樿鐢ㄥ悓涓€濂楁秷鎭粨鏋勬潵鎵胯浇锛?
- meta 淇℃伅
- tool result
- permission mode
- origin
- attachment

鎵€浠ヤ竴寮€濮嬪氨杩涘叆缁熶竴娑堟伅妯″瀷锛屽悗闈㈡墠涓嶄細鏁ｆ帀銆?
## 绗簲姝ワ細REPL 鎶婃湰杞?messages 浜ょ粰 `onQuery(...)`

鍦?REPL 閲岋紝`onQuery(...)` 浼氳繘涓€姝ヨ繘鍏?[`src/query.ts`](/d:/Code/learn-claude/claude-code-rev/src/query.ts) 鐨勶細

- `query()`
- `queryLoop()`

杩欓噷姝ｅ紡杩涘叆 Claude Code 鐨勮繍琛屾椂涓诲惊鐜€?
## 绗叚姝ワ細`queryLoop()` 鍑嗗鏈疆妯″瀷杈撳叆

鍦ㄨ繘鍏ユā鍨嬪墠锛宍queryLoop()` 浼氬仛寰堝鍑嗗锛?
- 鏋勯€?`queryTracking`
- 澶勭悊 `messagesForQuery`
- 搴旂敤 tool result budget
- 鎵ц snip / microcompact / autocompact
- 瑁呴厤 system prompt銆乻ystem context銆乽ser context

### 杩欎竴姝ユ渶鍏抽敭鐨勭悊瑙?
Claude Code 涓嶆槸鈥滄嬁娑堟伅鐩存帴鍙戞ā鍨嬧€濓紝鑰屾槸浼氬厛鍐冲畾锛?
- 妯″瀷杩欒疆璇ョ湅鍒板摢浜涘巻鍙?- 鍘嗗彶璇ヤ互鎬庢牱鐨勫舰鎬佽鍘嬬缉鍜屾暣鐞?
## 绗竷姝ワ細妯″瀷寮€濮嬫祦寮忚緭鍑?
`queryLoop()` 浼氫竴杈逛粠妯″瀷鎷?stream event锛屼竴杈规妸锛?
- assistant message
- request start event
- 鍏朵粬杩愯鏃朵簨浠?
閫愭 `yield` 鍑哄幓銆?
### 涓轰粈涔堟槸 generator

鍥犱负 REPL 闇€瑕佽竟鎺ユ敹杈规覆鏌擄紝鑰屼笉鏄瓑鏁磋疆瀹屾垚鎵嶇湅鍒扮粨鏋溿€?
## 绗叓姝ワ細濡傛灉妯″瀷璇锋眰宸ュ叿

涓€鏃?assistant 杈撳嚭閲屽寘鍚?tool use blocks锛宍queryLoop()` 浼氾細

- 璋冪敤 `runTools(...)`
- 閫愭娑堣垂宸ュ叿鏇存柊
- 鎶婂伐鍏风粨鏋滆浆鎹㈡垚娑堟伅
- 鍐嶆妸杩欎簺缁撴灉鍥炲～鍒?message 涓荤嚎涓?
### 杩欐槸 Claude Code 鍜屾櫘閫氳亰澶╃郴缁熸渶澶х殑宸紓涔嬩竴

瀹冧笉鏄€滄ā鍨嬭瀹屼簡鍐嶉『渚胯皟涓伐鍏封€濓紝鑰屾槸锛?
- 妯″瀷杈撳嚭
- 宸ュ叿鎵ц
- 缁撴灉鍥炲啓
- 涓嬩竴杞户缁?
鍏卞悓鏋勬垚涓€鏉′富娴佺▼銆?
## 绗節姝ワ細鍐冲畾鏄惁缁х画涓嬩竴杞?
宸ュ叿鎵ц鍚庯紝绯荤粺杩樿缁х画鍒ゆ柇锛?
- 鏄惁琚腑鏂?- 鏄惁琚?hook 闃绘缁х画
- 鏄惁瑕佺敓鎴?tool summary
- 鏄惁鍥犱负 token budget 鑰岀户缁?- 鏄惁鐩存帴瀹屾垚

### 杩欒鏄庝粈涔?
Claude Code 鐨勪竴娆＄敤鎴疯姹傦紝甯稿父骞朵笉鏄€滀竴杩涗竴鍑衡€濓紝鑰屾槸澶氳疆鍐呴儴杩唬銆?
## 绗崄姝ワ細REPL 娑堣垂 `query()` 鐨勮緭鍑哄苟娓叉煋

鍦?[`src/screens/REPL.tsx`](/d:/Code/learn-claude/claude-code-rev/src/screens/REPL.tsx) 涓紝REPL 浼?`for await` 娑堣垂 `query(...)` 浜у嚭鐨勪簨浠躲€?
瀹冧細鍋氱殑浜嬫儏鍖呮嫭锛?
- `setMessages(...)`
- 澧為噺鏇存柊 assistant 杈撳嚭
- 杩藉姞绯荤粺娑堟伅銆佸伐鍏锋秷鎭€乨uration/message metrics
- 鎶婂彉鍖栧弽鏄犲埌 UI

### 涓轰粈涔?REPL 蹇呴』鍜?query 缁戝畾寰楄繖涔堟繁

鍥犱负瀹冧笉鏄彧鏄剧ず鏈€缁堢粨鏋滐紝鑰屾槸瑕佹樉绀猴細

- 杩囩▼
- 涓棿鐘舵€?- 宸ュ叿鎵ц
- 鎭㈠涓庣户缁?
## 鎶婃暣鏉￠摼鍘嬬缉鎴愪竴鍙ヨ瘽

鐢ㄦ埛杈撳叆鍦?Claude Code 涓殑澶ц嚧璺緞鏄細

`REPL submit -> handlePromptSubmit -> processUserInput -> createUserMessage -> queryLoop -> model stream -> tool execution -> message鍥炲～ -> REPL 娓叉煋`

## 濡傛灉浣犳潵鑷埆鐨?Agent 绯荤粺锛屾渶璇ユ敞鎰忎粈涔?
### 1. 杈撳叆涓嶆槸鐩存帴杩涙ā鍨?
涓棿浼氱粡杩囪緭鍏ュ鐞嗗拰娑堟伅寤烘ā銆?
### 2. 杈撳嚭涓嶆槸鐩存帴鍥?UI

涓棿浼氱粡杩?query loop 鐨勯绠椼€佸伐鍏枫€佹仮澶嶅拰缁х画閫昏緫銆?
### 3. REPL 涓嶅彧鏄樉绀哄眰

瀹冨拰 query銆乵essages銆丄ppState 涓€璧锋瀯鎴愬畬鏁翠細璇濊繍琛屾椂銆?
## 鏈€鍚庝竴鍙ヨ瘽

鐞嗚В Claude Code 鐨勫叧閿紝涓嶆槸鐩潃鈥滄ā鍨嬫€庝箞鍥炵瓟鈥濓紝鑰屾槸鐪嬫竻鈥滀竴娆＄敤鎴疯姹傚浣曞湪 REPL銆佹秷鎭€乹uery loop銆佸伐鍏锋墽琛屽拰 UI 娓叉煋涔嬮棿褰㈡垚闂幆鈥濄€?
