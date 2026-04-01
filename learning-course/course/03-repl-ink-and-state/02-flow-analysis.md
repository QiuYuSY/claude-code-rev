# REPL 涓庣姸鎬佺郴缁熸祦绋嬪垎鏋?
## 涓绘祦绋?
```text
main.tsx
  -> launchRepl(root, appProps, replProps, renderAndRun)
      -> replLauncher.tsx
          -> import('./components/App.js')
          -> import('./screens/REPL.js')
          -> renderAndRun(root, <App><REPL /></App>)
              -> interactiveHelpers.tsx
                  -> root.render(...)
                  -> startDeferredPrefetches()
                  -> waitUntilExit()
                  -> gracefulShutdown()
```

## 绗?1 灞傦細`replLauncher.tsx`

杩欐槸涓€涓緢钖勭殑瑁呴厤灞傘€?
瀹冪殑鑱岃矗鍙湁涓変欢浜嬶細

1. 鍔ㄦ€佸姞杞?`App`
2. 鍔ㄦ€佸姞杞?`REPL`
3. 璋冪敤 `renderAndRun()`

### 涓轰粈涔堝畠杩欎箞钖?
鏍囧噯鍥炵瓟锛?鍥犱负瀹冪殑鑱岃矗鍙槸鎷兼帴 REPL 鍚姩閾撅紝鑰屼笉鏄寔鏈変細璇濈姸鎬佸拰 UI 閫昏緫銆?
## 绗?2 灞傦細`App.tsx`

杩欎釜鏂囦欢鐪嬭捣鏉ヤ笉澶嶆潅锛屼絾闈炲父鍏抽敭銆?
瀹冩妸杩欏嚑涓?Provider 缁勫悎璧锋潵锛?
- `AppStateProvider`
- `StatsProvider`
- `FpsMetricsProvider`
- `BootstrapBoundary`

### 涓轰粈涔?`App.tsx` 鍊煎緱瀛?
鍥犱负瀹冨睍绀轰簡椤跺眰 UI 澶栧３鐪熸瑕佽礋璐ｇ殑涓滆タ锛?
- 鎻愪緵涓婁笅鏂?- 鎻愪緵鐘舵€佹牴
- 鎻愪緵鐩戞帶淇℃伅
- 鎻愪緵 bootstrap 閿欒杈圭晫

涔熷氨鏄锛屽畠涓嶆槸涓氬姟缁勪欢锛岃€屾槸鈥滀氦浜掓牴瀹瑰櫒鈥濄€?
## 绗?3 灞傦細`interactiveHelpers.tsx`

杩欏眰璐熻矗鎶娾€滄牴娓叉煋鑳藉姏鈥濆拰鈥滆繍琛屾椂琛屼负鈥濇帴璧锋潵銆?
渚嬪锛?
- `renderAndRun(...)`
- `showSetupScreens(...)`
- `exitWithError(...)`
- `exitWithMessage(...)`
- `getRenderContext(...)`

### 涓轰粈涔堣繖灞傞噸瑕?
鍥犱负鐪熸鐨勪氦浜掔郴缁熶笉鍙槸 render锛屽畠杩樺繀椤昏礋璐ｏ細

- setup flow
- trust dialog
- onboarding
- graceful shutdown
- 閫氳繃 Ink 娓叉煋閿欒涓庨€€鍑烘秷鎭?
## 绗?4 灞傦細`AppStateStore.ts`

杩欐槸绗笁璇炬渶鍊煎緱閲嶇偣璇荤殑鏂囦欢銆?
浣犱笉鐢ㄤ竴寮€濮嬪氨閫愬瓧娈电‖鑳岋紝鑰屽簲璇ユ寜涓婚鐪嬬姸鎬佸煙銆?
### 浼氳瘽涓庢ā鍨嬪煙

- `settings`
- `mainLoopModel`
- `mainLoopModelForSession`
- `verbose`
- `statusLineText`
- `thinkingEnabled`

### 鏉冮檺涓庝氦浜掑煙

- `toolPermissionContext`
- `footerSelection`
- `viewSelectionMode`
- `spinnerTip`

### 浠诲姟涓?agent 鍩?
- `tasks`
- `agentNameRegistry`
- `foregroundedTaskId`
- `viewingAgentTaskId`

### MCP 涓庢彃浠跺煙

- `mcp.clients / tools / commands / resources`
- `plugins.enabled / disabled / commands / errors`

### remote / bridge 鍩?
- `remoteSessionUrl`
- `remoteConnectionStatus`
- `replBridgeEnabled`
- `replBridgeConnected`
- `replBridgeSessionActive`
- `replBridgeError`

### 鍘嗗彶涓庤緟鍔╁煙

- `fileHistory`
- `attribution`
- `todos`
- `notifications`
- `elicitation`

## 涓轰粈涔堣 `AppState` 鏄」鐩鐭ュ湴鍥?
鍥犱负鍙湁鐪熸褰卞搷闀挎湡浼氳瘽鍜屼氦浜掔殑涓滆タ锛屾墠浼氳鎻愬崌鍒板叏灞€鐘舵€併€?
瀹冩毚闇蹭簡绯荤粺鐪熸鍏冲績鐨勬牳蹇冨疄浣擄細

- 浼氳瘽
- 鏉冮檺
- 浠诲姟
- 鎵╁睍
- 杩滅▼杩炴帴
- 鍘嗗彶

## 杩欎竴鏁村璁捐鍦ㄨВ鍐充粈涔堥棶棰?
### 闂 1锛氱粓绔?UI 涔熶細鏈夐暱鏈熷鏉傜姸鎬?
瑙ｅ喅鏂瑰紡锛?缁熶竴 AppState銆?
### 闂 2锛歎I 涓嶆槸鍗曠函鏄剧ず锛岃€岃椹卞姩杩愯鏃?
瑙ｅ喅鏂瑰紡锛?璁?App 鏍瑰鍣ㄣ€乮nteractive helpers 鍜?AppState 涓€璧锋壙鎷?orchestration銆?
### 闂 3锛氱郴缁熻兘鍔涜秺鏉ヨ秺澶氾紝灞€閮ㄧ姸鎬佷細澶辨帶

瑙ｅ喅鏂瑰紡锛?鎶婅法妯″潡鍏变韩鐨勯暱鏈熺姸鎬佹斁杩涚粺涓€ store銆?
## 闃舵鎬ф€荤粨

濡傛灉浣犲彧璁颁竴鍙ヨ瘽锛屽簲璇ヨ杩欏彞锛?
鈥淐laude Code 鎶?REPL 璁捐鎴愪竴涓暱鏈熶細璇濋┚椹惰埍锛屽洜姝ょ姸鎬佷腑蹇冨拰浜や簰缂栨帓灞傝嚜鐒舵垚涓轰骇鍝佹牳蹇冿紝鑰屼笉鏄厤瑙掋€傗€?
