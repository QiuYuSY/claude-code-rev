# MCP銆佹彃浠朵笌 Skills 娴佺▼鍒嗘瀽

## 涓绘祦绋?
```text
MCP configs
  -> MCP clients
      -> tools / resources / mcp commands / mcp skills

plugin markdown + frontmatter
  -> collectMarkdownFiles()
      -> createPluginCommand(...)
          -> Command[]

skills / bundled skills / plugin skills / workflows / builtins
  -> loadAllCommands(cwd)
      -> getCommands(cwd)
          -> filtered, merged command list
```

## 绗?1 灞傦細MCP 鑳藉姏鎺ュ叆

鍦?`src/services/mcp/client.ts` 涓紝绯荤粺瑕佸仛鐨勪笉鍙槸鈥滆皟鐢ㄨ繙绋嬪伐鍏封€濓紝鑰屾槸涓€鏁村鍗忚鎺ュ叆宸ヤ綔锛?
- transport
- auth
- tool discovery
- resource discovery
- skill discovery
- timeout
- session 澶辨晥鎭㈠
- tool result persistence

### 涓轰粈涔?MCP 鍊煎緱鍗曠嫭鎴愪负涓€灞?
鍥犱负瀹冭В鍐崇殑鏄€滃浣曟妸澶栭儴绯荤粺绾冲叆 Claude Code 杩愯鏃垛€濓紝鑰屼笉鏄畝鍗曞鍔犱竴涓唴寤哄懡浠ゃ€?
## 绗?2 灞傦細鎻掍欢鍛戒护鐢熸垚

鍦?`src/utils/plugins/loadPluginCommands.ts` 涓紝绯荤粺浼氾細

- 鏀堕泦 markdown 鏂囦欢
- 瀵?skill 鐩綍鍋氱壒娈婂彉鎹?- 瑙ｆ瀽 frontmatter
- 澶勭悊 allowed-tools銆乤rguments銆乵odel銆乪ffort
- 鏈€缁堢敓鎴愮粺涓€ `Command`

### 涓轰粈涔堣繖寰堥噸瑕?
鍥犱负瀹冭鈥滃唴瀹硅祫浜р€濅篃鑳藉彉鎴愭墿灞曡兘鍔涳紝闄嶄綆浜嗘墿灞曢棬妲涖€?
## 绗?3 灞傦細缁熶竴鍛戒护姹囨€?
鍦?`src/commands.ts` 涓紝绯荤粺浼氭妸杩欎簺鏉ユ簮鍚堝苟锛?
- bundled skills
- built-in plugin skills
- skill directory commands
- workflow commands
- plugin commands
- plugin skills
- built-in commands
- dynamic skills

### 涓轰粈涔堣繖鏄钩鍙板寲鍏抽敭涓€姝?
鍥犱负澶氭潵婧愭墿灞曞鏋滄病鏈夌粺涓€鏀跺彛锛屾渶缁堜竴瀹氫細锛?
- 灞曠ず涓嶄竴鑷?- 鍙敤鎬у垽鏂笉涓€鑷?- 鎺掑簭涓庤繃婊や笉涓€鑷?
## MCP 涓轰粈涔堣繕浼氳繘鍏ュ懡浠よ鍥?
`commands.ts` 閲岃繕鏈夛細

- `getMcpSkillCommands(...)`

杩欒鏄?MCP 骞朵笉鏄彧褰卞搷宸ュ叿姹狅紝涔熻兘閫氳繃鎶€鑳藉舰鎬佸奖鍝嶅懡浠?鎶€鑳借鍥俱€?
## 杩欎竴鏁村璁捐鍦ㄨВ鍐充粈涔堥棶棰?
### 闂 1锛氬閮ㄨ兘鍔涗笉搴斿啓姝诲湪鍐呭缓鍛戒护閲?
瑙ｅ喅鏂瑰紡锛?MCP 鍗忚鎺ュ叆灞傘€?
### 闂 2锛氭墿灞曚笉搴旇鍙潬缂栫▼鑳藉姏

瑙ｅ喅鏂瑰紡锛?markdown/frontmatter 鎻掍欢鍛戒护銆?
### 闂 3锛氬鏉ユ簮鑳藉姏蹇呴』缁熶竴绠＄悊

瑙ｅ喅鏂瑰紡锛?`loadAllCommands()` + `getCommands()`

## 闃舵鎬ф€荤粨

濡傛灉浣犲彧璁颁竴鍙ヨ瘽锛屽簲璇ヨ杩欏彞锛?
鈥淐laude Code 鎶婂閮ㄥ崗璁兘鍔涖€佹湰鍦板唴瀹规墿灞曞拰妯″瀷鑳藉姏鍏ュ彛鍚屾椂鎺ュ叆绯荤粺锛屽苟鏈€缁堢敤缁熶竴娉ㄥ唽涓績瀹屾垚骞冲彴鍖栨敹鍙ｃ€傗€?
