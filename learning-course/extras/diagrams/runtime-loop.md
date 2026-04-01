# 杩愯鏃跺惊鐜浘

## 涓诲浘

```text
User Input
  鈹斺攢 messages
      鈹斺攢 query()
          鈹斺攢 queryLoop()
              鈹溾攢 buildQueryConfig()
              鈹溾攢 assemble messagesForQuery
              鈹溾攢 send request to model
              鈹溾攢 stream assistant output
              鈹溾攢 inspect assistant message
              鈹?  鈹溾攢 no tool use
              鈹?  鈹?  鈹溾攢 token budget decision
              鈹?  鈹?  鈹溾攢 stop / continue decision
              鈹?  鈹?  鈹斺攢 return completed
              鈹?  鈹斺攢 tool use detected
              鈹?      鈹溾攢 runTools(...)
              鈹?      鈹溾攢 collect tool results
              鈹?      鈹溾攢 normalize tool results to messages
              鈹?      鈹溾攢 generate tool summary (async)
              鈹?      鈹斺攢 continue next iteration
              鈹溾攢 compact / recovery / interruption branches
              鈹斺攢 terminal reason
```

## 杩欏紶鍥炬兂琛ㄨ揪浠€涔?
### 1. query loop 鎵嶆槸杩愯鏃朵腑蹇?
浣犲彲浠ユ妸妯″瀷 API 鐪嬩綔涓€涓瓙姝ラ锛屼絾涓嶈兘鎶婂畠褰撲綔鏁翠釜绯荤粺銆傜湡姝ｉ┍鍔ㄧ郴缁熺殑鏄?`queryLoop()`銆?
### 2. tools 涓嶅湪澶栧洿锛岃€屽湪涓涓绘祦绋?
妯″瀷杈撳嚭涓€鏃﹀寘鍚?tool use锛岀郴缁熶細绔嬪嵆杞叆宸ュ叿鎵瑰鐞嗭紝鍐嶆妸缁撴灉鍥炲～鍒版秷鎭腑缁х画涓嬩竴杞€?
### 3. message 鏄棴鐜浇浣?
鐢ㄦ埛娑堟伅銆佸姪鎵嬫秷鎭€佸伐鍏风粨鏋溿€佺郴缁熷厓娑堟伅锛岄兘浼氬洖鍒板悓涓€鏉℃秷鎭富绾夸笂銆?
## 鍏抽敭鏀矾

### 姝ｅ父瀹屾垚

- 妯″瀷杈撳嚭
- 鏃犲伐鍏疯皟鐢?- budget 鍏佽
- 杩斿洖 completed

### 宸ュ叿缁х画

- 妯″瀷璇锋眰宸ュ叿
- 宸ュ叿鎵ц
- 宸ュ叿缁撴灉鍐欏洖 messages
- query loop 缁х画涓嬩竴杞?
### 鎭㈠缁х画

- max output tokens
- compact
- stop hooks
- token budget continuation

## 璁捐鏀剁泭

- 澶嶆潅琛屼负閮借鏀捐繘涓€鏉℃樉寮忚繍琛屼富绾?- 宸ュ叿銆佹仮澶嶃€侀绠椾笉浼氭暎钀藉湪澶栧洿
- 鏇撮€傚悎闀挎湡 agent 浼氳瘽

## 璁捐浠ｄ环

- 鍗曚釜鏂囦欢璁ょ煡璐熸媴寰堥珮
- continue 璺緞澶氭椂锛岄渶瑕佸己绾緥缁存姢鐘舵€?
## 澶嶇洏闂

1. 涓轰粈涔?query loop 鏇村儚鐘舵€佹満鑰屼笉鏄櫘閫氬嚱鏁帮紵
2. 涓轰粈涔堝伐鍏风粨鏋滃繀椤诲啀娆¤繘鍏ユ秷鎭郴缁燂紵
3. 濡傛灉鍘绘帀 generator锛屽彧淇濈暀 Promise锛屼細涓㈠け鍝簺鑳藉姏锛?
