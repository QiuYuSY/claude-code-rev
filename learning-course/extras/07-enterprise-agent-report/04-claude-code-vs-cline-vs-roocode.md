# 闄勫綍锛欳laude Code vs Cline vs Roo Code 鐨?Agent 璁捐宸紓

杩欎唤闄勫綍閫傚悎鏀惧湪浼佷笟鍐呴儴姹囨姤鐨勬渶鍚庯紝鍥炵瓟涓€涓緢甯歌鐨勯棶棰橈細

鈥滃鏋滃競闈笂宸茬粡鏈?Cline銆丷oo Code銆丆laude Code 杩欎簺 coding agent锛屽畠浠湪 Agent 璁捐涓婂埌搴曟湁浠€涔堜笉鍚岋紵鎴戜滑搴旇鍊熼壌璋佺殑浠€涔堬紵鈥?
## 涓€鍙ヨ瘽缁撹

- `Cline` 鏇村儚鈥滀汉鍦ㄥ洖璺殑 IDE agent鈥?- `Roo Code` 鏇村儚鈥滄ā寮忓寲 / 鍥㈤槦鍖栫殑 IDE+Cloud agent鈥?- `Claude Code` 鏇村儚鈥渞untime-first 鐨勭粓绔?/ 骞冲彴鍨?agent鈥?
濡傛灉浣犲湪鍋氫紒涓氬唴閮?Agent 骞冲彴锛?
- 鎯冲€熼壌鈥滃鎵瑰拰鍙帶鑷姩鍖栤€濓紝浼樺厛鐪?`Cline`
- 鎯冲€熼壌鈥滄ā寮忓寲銆佸瑙掕壊銆佸洟闃熷伐浣滄祦鈥濓紝浼樺厛鐪?`Roo Code`
- 鎯冲€熼壌鈥滆繍琛屾椂銆佹潈闄愩€佺姸鎬併€佹墿灞曟不鐞嗏€濓紝浼樺厛鐪?`Claude Code`

## 涓€銆佷笁鑰呭悇鑷殑浜у搧閲嶅績

## Claude Code

浠庢湰浠撳簱婧愮爜鍙互鐪嬪嚭锛孋laude Code 鐨勮璁￠噸蹇冩槸锛?
- 缁堢 REPL / TUI 浣滀负涓讳氦浜掗潰
- query loop 浣滀负绯荤粺蹇冭剰
- 宸ュ叿銆佹潈闄愩€佹秷鎭€佷笂涓嬫枃褰㈡垚杩愯鏃堕棴鐜?- AppState 鎵胯浇闀挎湡浼氳瘽澶嶆潅搴?- MCP銆佹彃浠躲€丼kills 缁熶竴绾冲叆骞冲彴鎵╁睍娌荤悊

瀹冩洿鍍忎竴涓細

鈥滃彲闀挎湡杩愯銆佸彲娌荤悊銆佸彲鎵╁睍鐨?coding agent runtime鈥?
## Cline

Cline 瀹樻柟瀹氫綅寮鸿皟锛?
- 鈥淎utonomous coding agent right in your IDE鈥?- 鍦?IDE 涓伐浣?- 瀵规枃浠躲€佸懡浠ゃ€佹祻瑙堝櫒銆丮CP 宸ュ叿杩涜閫愭瀹℃壒鎴?auto-approve

浠庡叾瀹樻柟鏂囨。鐪嬶紝Cline 寰堝己璋冿細

- Auto-approve 绮掑害鎺у埗
- Plan / Act 妯″紡鍒囨崲
- YOLO Mode
- 鐢ㄦ埛闅忔椂涓柇

瀹冩洿鍍忎竴涓細

鈥滅紪杈戝櫒鍐呫€佸己瀹℃壒銆佸己浜哄湪鍥炶矾鐨勬墽琛屽瀷 agent鈥?
鍙傝€冿細
- [Cline GitHub](https://github.com/cline/cline)
- [Cline Auto Approve](https://docs.cline.bot/features/auto-approve)
- [Cline Interactive Mode](https://docs.cline.bot/cline-cli/interactive-mode)

## Roo Code

Roo Code 瀹樻柟瀹氫綅寮鸿皟锛?
- 鈥淵our AI-Powered Dev Team, Right in Your Editor鈥?- 澶氭ā寮忥細Code / Architect / Ask / Debug / Custom Modes
- IDE 鍐?dev team 浣撻獙
- MCP銆丆ustom Modes銆丆loud/Router 绛夎兘鍔?
瀹冩洿鍍忎竴涓細

鈥滀互瑙掕壊/妯″紡涓烘牳蹇冩娊璞＄殑鍥㈤槦鍨?agent 濂椾欢鈥?
鍙傝€冿細
- [Roo Code GitHub](https://github.com/RooCodeInc/Roo-Code)
- [Roo Code Docs](https://docs.roocode.com/)

## 浜屻€佹寜 Agent 璁捐缁村害瀵规瘮

## 1. 浜や簰涓績

### Claude Code

- 缁堢 REPL/TUI 浼樺厛
- REPL 涓嶆槸澹筹紝鑰屾槸杩愯鏃堕┚椹惰埍
- 鐘舵€佷腑蹇冦€乻etup flow銆乺emote/bridge 閮藉洿缁曚細璇濆睍寮€

### Cline

- IDE 闈㈡澘浼樺厛
- 寮鸿皟浣犲湪缂栬緫鍣ㄩ噷瀹炴椂鐪嬪畠涓€姝ユ鍋氫簨
- 瀹℃壒涓庤嚜鍔ㄥ寲閮芥湇鍔′簬 IDE 鍐呬綋楠?
### Roo Code

- 涔熸槸缂栬緫鍣ㄤ紭鍏?- 浣嗘瘮 Cline 鏇村己璋冩ā寮忎笌鈥滃紑鍙戝洟闃熻鑹插寲鈥?
### 浼佷笟鍊熼壌

濡傛灉浼佷笟涓诲叆鍙ｆ槸锛?
- IDE锛氭洿閫傚悎鍙傝€?Cline / Roo Code 鐨勪氦浜掑舰鎬?- Web / CLI / 澶氬叆鍙ｇ粺涓€锛氭洿閫傚悎鍙傝€?Claude Code 鐨勮繍琛屾椂鍜岀姸鎬佽璁?
## 2. 杩愯鏃舵娊璞?
### Claude Code

鏍稿績鎶借薄鏄細

- query loop
- ToolUseContext
- 娑堟伅闂幆
- 鐘舵€佷腑蹇?
瀹冩妸 Agent 鐪嬫垚杩愯鏃躲€?
### Cline

鏍稿績鎶借薄鏇村亸锛?
- 浠诲姟鎵ц
- 妯″紡鍒囨崲
- 宸ュ叿瀹℃壒
- 鐢ㄦ埛鍙殢鏃跺共棰?
瀹冩洿鍍忊€滀互鎵ц鍜屽鎵逛负涓績鐨?agent鈥濄€?
### Roo Code

鏍稿績鎶借薄鏇村亸锛?
- modes
- custom modes
- agent team / cloud workflows

瀹冩洿鍍忊€滀互瑙掕壊/妯″紡 orchestration 涓轰腑蹇冪殑 agent鈥濄€?
### 浼佷笟鍊熼壌

濡傛灉浣犲湪璁捐浼佷笟骞冲彴灞傦紝Claude Code 鐨?runtime-first 鎬濊矾鏇村€煎緱鍊熼壌锛涘鏋滀綘鍦ㄨ璁?IDE 渚т綋楠屽眰锛孋line/Roo Code 鐨勪氦浜掓娊璞℃洿鍊煎緱鍊熼壌銆?
## 3. 鏉冮檺妯″瀷

### Claude Code

鏉冮檺鏇村墠缃細

- 涓嶆槸鍙湪鎵ц鍓嶅鎵?- 鑰屾槸鍏堟瀯寤烘潈闄愪笂涓嬫枃锛屽啀鍐冲畾妯″瀷鍙鑳藉姏闆嗗悎

### Cline

鏉冮檺鏇村己璋冿細

- approval-required
- auto-approve
- YOLO mode
- 瀵?reads / writes / commands / browser / MCP 鍋氱矑搴︽帶鍒?
### Roo Code

涔熸湁杈冨己鐨勬ā寮忓拰鍙帶鎵ц璇箟锛屼絾鏇村己璋冩ā寮?瑙掕壊宸紓鑰屼笉鏄函瀹℃壒寮€鍏炽€?
### 浼佷笟鍊熼壌

浼佷笟鍐呴儴娌荤悊鏈€璇ュ€熼壌鐨勬槸锛?
- Claude Code 鐨勨€滄潈闄愬墠缃埌鑳藉姏鏆撮湶灞傗€?- Cline 鐨勨€滃鎵圭矑搴︽竻鏅般€佺敤鎴峰績鏅烘槑纭€?
鏈€濂戒笉瑕佷簩閫変竴锛岃€屾槸缁勫悎鍊熼壌銆?
## 4. 鐘舵€佽璁?
### Claude Code

鐘舵€侀潪甯搁噸锛岃€屼笖鏄樉寮忕殑锛?
- 浼氳瘽
- 浠诲姟
- agent
- MCP
- plugins
- remote / bridge
- notifications

### Cline

鏇村鏄€淚DE 涓綋鍓嶄换鍔℃墽琛岀姸鎬佲€濈殑鎰熻銆?
### Roo Code

鐘舵€佹洿鍋忊€滄ā寮?瑙掕壊/鍥㈤槦宸ヤ綔娴佲€濄€?
### 浼佷笟鍊熼壌

濡傛灉浣犵殑浼佷笟 Agent 鏈夛細

- 闀夸細璇?- 鍚庡彴浠诲姟
- 澶氬叆鍙ｅ鎴风
- 澶?Agent

閭?Claude Code 寮忕殑缁熶竴鐘舵€佹ā鍨嬫洿鏈夊弬鑰冧环鍊笺€?
## 5. 鎵╁睍鏋舵瀯

### Claude Code

鎵╁睍灞傞潪甯稿钩鍙板寲锛?
- built-in commands
- skills
- plugins
- workflows
- MCP tools/resources/skills

鏈€缁堥兘缁熶竴杩涘叆娉ㄥ唽涓績娌荤悊銆?
### Cline

涔熸敮鎸?MCP锛屾墿灞曡兘鍔涘凡缁忓緢寮猴紝浣嗘暣浣撲粛鏇村亸鈥淚DE 涓墽琛屽瀷 agent鈥濈殑鎵╁睍銆?
### Roo Code

鏀寔 MCP銆丮odes銆丆ustom Modes銆丆loud/Router 绛夛紝鎵╁睍閲嶇偣鏇村亸鈥滆鑹插寲涓庝骇鍝佽兘鍔涙墿灞曗€濄€?
### 浼佷笟鍊熼壌

濡傛灉浼佷笟鍐呴儴闇€瑕佸缓璁锯€滈暱鏈熷彲娌荤悊鐨勬墿灞曠敓鎬佲€濓紝Claude Code 鐨勭粺涓€娉ㄥ唽涓績鎬濊矾鏇撮€傚悎鍋氬簳搴у弬鑰冦€?
## 涓夈€佽皝鏇村儚浣犺鍋氱殑涓滆タ

## 濡傛灉浣犺鍋?IDE 鍐?coding copilot

浼樺厛鍙傝€冿細

- `Cline`
- `Roo Code`

鍥犱负瀹冧滑鐨勪氦浜掑舰鎬佸拰鐢ㄦ埛蹇冩櫤鏇磋创杩戠紪杈戝櫒宸ヤ綔娴併€?
## 濡傛灉浣犺鍋氫紒涓氬唴閮?Agent 骞冲彴

浼樺厛鍙傝€冿細

- `Claude Code`

鍥犱负瀹冨湪杩愯鏃躲€佹潈闄愩€佺姸鎬併€佹墿灞曟不鐞嗕笂鏇村儚骞冲彴搴曞骇銆?
## 濡傛灉浣犺鍋氣€滃洟闃熷瀷 Agent 濂椾欢鈥?
浼樺厛鍙傝€冿細

- `Roo Code`

鍥犱负瀹冪殑妯″紡鍜岃鑹插寲璁捐鏇村己銆?
## 濡傛灉浣犺鍋氣€滃己瀹℃壒銆佸彲鎺ц嚜鍔ㄥ寲鈥?
浼樺厛鍙傝€冿細

- `Cline`

鍥犱负瀹冨湪瀹℃壒銆乤uto-approve銆乊OLO 鐨勪骇鍝佽涔変笂鏇寸洿鎺ャ€?
## 鍥涖€佷紒涓氬唴閮ㄦ渶鎺ㄨ崘鐨勫€熼壌缁勫悎

鎴戞洿寤鸿浼佷笟涓嶈鍙€熼壌鍏朵腑涓€涓紝鑰屾槸缁勫悎鍊熼壌銆?
## 缁勫悎寤鸿

### 杩愯鏃朵笌骞冲彴娌荤悊

鍊熼壌 `Claude Code`

鎷挎潵鍋氾細

- runtime loop
- 鐘舵€佷腑蹇?- 鏉冮檺鍓嶇疆
- 鎵╁睍娉ㄥ唽涓績

### 鐢ㄦ埛鍙帶鑷姩鍖栦綋楠?
鍊熼壌 `Cline`

鎷挎潵鍋氾細

- 瀹℃壒鍒嗙骇
- auto-approve 绛栫暐
- 鐢ㄦ埛鍙悊瑙ｇ殑瀹夊叏妯″紡

### 鍥㈤槦瑙掕壊涓庡伐浣滄祦妯″紡

鍊熼壌 `Roo Code`

鎷挎潵鍋氾細

- 妯″紡鍖栬鑹?- 鍥㈤槦宸ヤ綔娴佸叆鍙?- 缁勭粐绾у畾鍒舵ā寮?
## 浜斻€侀€傚悎姹囨姤鏃舵€庝箞璁?
浣犲彲浠ョ洿鎺ョ敤涓嬮潰杩欐浣滀负姹囨姤闄勫綍鎬荤粨锛?
鈥滀粠 Agent 璁捐瑙掑害鐪嬶紝Claude Code銆丆line 鍜?Roo Code 鍒嗗埆浠ｈ〃浜嗕笁绉嶄笉鍚岄噸蹇冦€侰line 鏇村己璋冧汉鍦ㄥ洖璺笌瀹℃壒鎺у埗锛孯oo Code 鏇村己璋冩ā寮忓寲涓庡洟闃熷寲浣撻獙锛孋laude Code 鏇村己璋冭繍琛屾椂銆佹潈闄愩€佺姸鎬佸拰鎵╁睍娌荤悊銆傚浜庝紒涓氬唴閮?Agent 骞冲彴寤鸿锛屾垜浠缓璁紭鍏堝€熼壌 Claude Code 鐨勮繍琛屾椂涓庢不鐞嗚璁★紝鍚屾椂鍚告敹 Cline 鐨勫鎵逛綋楠岃璁″拰 Roo Code 鐨勬ā寮忓寲缁勭粐璁捐锛屽舰鎴愭洿閫傚悎浼佷笟鍦烘櫙鐨勭粍鍚堟柟妗堛€傗€?
## 鍏€佸彲鐩存帴澶嶅埗鍒?PPT 鐨勫姣旈〉

鏍囬寤鸿锛?
`Claude Code / Cline / Roo Code锛欰gent 璁捐閲嶅績瀵规瘮`

浣犲彲浠ョ洿鎺ユ斁涓嬮潰杩欏紶琛細

| 缁村害 | Claude Code | Cline | Roo Code |
|---|---|---|---|
| 浜や簰涓績 | 缁堢 REPL/TUI | IDE 闈㈡澘 | IDE 闈㈡澘 |
| 杩愯鏃舵娊璞?| query loop / runtime-first | 鎵ц + 瀹℃壒 | 妯″紡/瑙掕壊椹卞姩 |
| 鏉冮檺妯″瀷 | 鏉冮檺鍓嶇疆 | 瀹℃壒/auto-approve/YOLO | 妯″紡鍖栧彲鎺ф墽琛?|
| 鐘舵€佽璁?| 閲嶇姸鎬佷腑蹇?| 浠诲姟鎵ц瀵煎悜 | 妯″紡涓庡洟闃熷鍚?|
| 鎵╁睍璁捐 | 骞冲彴缁熶竴鏀跺彛 | IDE agent 鎵╁睍 | 妯″紡 + MCP + Cloud |
| 鏈€閫傚悎鍊熼壌 | 骞冲彴搴曞骇 | 鍙帶鑷姩鍖栦綋楠?| 鍥㈤槦瑙掕壊鍖栬璁?|

## 涓冦€佹簮鐮佷笌瀹樻柟璧勬枡鍙傝€?
### Claude Code

- 鏈粨搴撴簮鐮侊細
  - [`src/query.ts`](/d:/Code/learn-claude/claude-code-rev/src/query.ts)
  - [`src/Tool.ts`](/d:/Code/learn-claude/claude-code-rev/src/Tool.ts)
  - [`src/state/AppStateStore.ts`](/d:/Code/learn-claude/claude-code-rev/src/state/AppStateStore.ts)
  - [`src/commands.ts`](/d:/Code/learn-claude/claude-code-rev/src/commands.ts)

### Cline

- [Cline GitHub](https://github.com/cline/cline)
- [Cline Auto Approve](https://docs.cline.bot/features/auto-approve)
- [Cline Interactive Mode](https://docs.cline.bot/cline-cli/interactive-mode)

### Roo Code

- [Roo Code GitHub](https://github.com/RooCodeInc/Roo-Code)
- [Roo Code Docs](https://docs.roocode.com/)

