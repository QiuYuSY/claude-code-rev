# 閫愭绮捐锛歚bootstrap-entry.ts -> cli.tsx -> main.tsx -> commands.ts`

杩欎唤鏂囨。鎸夌湡瀹炶皟鐢ㄩ『搴忓甫浣犺绗竴璇剧殑鍏抽敭鏂囦欢銆?
---

## 涓€銆乣src/bootstrap-entry.ts`

浠ｇ爜闈炲父鐭細

```ts
import { ensureBootstrapMacro } from './bootstrapMacro'

ensureBootstrapMacro()

await import('./entrypoints/cli.tsx')
```

### 杩欎笁琛屽垎鍒湪鍋氫粈涔?
#### 1. 瀵煎叆 bootstrap 瀹忓垵濮嬪寲鍑芥暟

杩欒〃鏄庨」鐩渶瑕佸湪鏈€鏃╅樁娈垫敞鍏ユ煇浜涙瀯寤烘垨杩愯鏃跺畯鑳藉姏銆?
#### 2. 绔嬪嵆鎵ц `ensureBootstrapMacro()`

璁捐鍚箟锛?
- 杩欐槸鍏ㄥ眬鍓嶇疆鏉′欢
- 鍚庣画浠讳綍璺緞閮藉簲璇ュ缓绔嬪湪瀹冨凡缁忓畬鎴愮殑鍓嶆彁涓?
#### 3. 寤惰繜瀵煎叆鐪熸 CLI 鍏ュ彛

璁捐鍚箟锛?
- bootstrap 灞備笉鎵挎媴 CLI 閫昏緫
- CLI 閫昏緫鍙互鐙珛婕斿寲

### 涓轰粈涔堣繖涓€灞傝鐭埌杩戜箮绌哄３

鍥炵瓟锛?鍥犱负杩欏眰鏄墍鏈夎矾寰勫叡浜殑鈥滄渶鏃╁叡鍚岀鍏堚€濄€傝繖閲岃秺鐭紝绯荤粺瓒婄ǔ锛屼篃瓒婂鏄撴帶鍒跺惎鍔ㄦ垚鏈€?
### 鍊煎緱瀛︿範鐨勫湴鏂?
- 鏋佹棭鏈熷眰鍙繚鐣欑湡姝ｅ繀瑕佺殑閫昏緫
- 閫氳繃鍔ㄦ€佸鍏ユ妸澶嶆潅搴︽帹杩熷埌涓嬩竴灞?
---

## 浜屻€乣src/entrypoints/cli.tsx`

杩欐槸绗竴浠界湡姝ｉ渶瑕佺簿璇荤殑鏂囦欢銆?
### 绗竴娈碉細鏋佹棭鏈熺幆澧冧慨姝?
瀹冧細鍋氫竴浜涘繀椤诲湪妯″潡鍔犺浇鍓嶅氨纭畾鐨勭幆澧冭缃紝渚嬪锛?
- 鍏抽棴 corepack 鑷姩 pin
- 鍦ㄨ繙绋嬬幆澧冧笅璁剧疆 `NODE_OPTIONS`
- 鏌愪簺 feature gate 涓嬫彁鍓嶈缃畝鍖栫幆澧冨彉閲?
### 涓轰粈涔堣繖浜涗簨鎯呮斁鍦ㄨ繖閲?
鍥炵瓟锛?鍥犱负鏈変簺瀛愭ā鍧椾細鍦?import 鏃惰鍙栫幆澧冨彉閲忋€傚鏋滅瓑 `init()` 鍐嶈缃紝灏卞凡缁忓お鏅氫簡銆?
### 绗簩娈碉細`--version` 蹇€熻矾寰?
```ts
if (args.length === 1 && (args[0] === '--version' || ...)) {
  console.log(`${MACRO.VERSION} (Claude Code)`)
  return
}
```

### 涓轰粈涔堣繖娈佃璁″緢鍏抽敭

瀹冭鏄庝綔鑰呴潪甯告槑纭湴鐭ラ亾锛?
- `version` 鏄竴涓珮棰戝懡浠?- 瀹冧笉鍊煎緱寮曞叆鍏ㄩ噺鍒濆鍖?- 瀹冨簲璇ュ敖鍙兘绋冲畾

### 绗笁娈碉細鍚姩 profiler锛屽啀澶勭悊鍏朵綑鐗规畩妯″紡

鍦?fast-path 涔嬪悗锛屾枃浠朵細鍔犺浇 startup profiler锛岀劧鍚庣户缁鐞嗭細

- `--dump-system-prompt`
- Chrome 鐩稿叧 MCP host
- computer-use MCP
- daemon worker
- remote-control / bridge
- daemon
- bg session 瀛愬懡浠?- template jobs
- environment runner
- self-hosted runner
- tmux worktree 蹇矾寰?
### 杩欐鏈€鍊煎緱瀛︿粈涔?
鏄€滃垎娴佸師鍒欌€濄€?
杩欎簺璺緞鐨勫叡鍚岀偣鏄細

- 涓嶄竴瀹氶渶瑕佸畬鏁?UI
- 涓嶄竴瀹氶渶瑕佸姞杞芥墍鏈夊懡浠?- 鑳界嫭绔嬪畬鎴愯嚜宸辫亴璐?
### 绗洓娈碉細鐪熸 full-path 鎵嶈繘鍏?`main.tsx`

鏈€鍚庢墠浼氾細

```ts
const { startCapturingEarlyInput } = await import('../utils/earlyInput.js')
startCapturingEarlyInput()
const { main: cliMain } = await import('../main.js')
await cliMain()
```

### 涓轰粈涔堣繖閲屽厛鍚姩 early input capture

鍥炵瓟锛?鍥犱负浠庡紑濮嬪姞杞?`main.js` 鍒扮湡姝?REPL ready 涔嬮棿锛岀敤鎴峰彲鑳藉凡缁忚緭鍏ュ唴瀹广€備竴涓氦浜掑瀷 CLI 濡傛灉涓嶈兘瑕嗙洊杩欐绐楀彛鏈燂紝浣撻獙浼氬緢宸€?
### 灏忕粨

`cli.tsx` 鐨勮鑹蹭笉鏄€滀富搴旂敤鈥濓紝鑰屾槸锛?
- 鐜淇灞?- 蹇€熻矾寰勫垎娴佸眰
- 瀹屾暣杩愯鏃跺姞杞介椄闂?
---

## 涓夈€乣src/main.tsx`

`main.tsx` 闈炲父澶э紝鎵€浠ヨ繖涓€璇句笉杩芥眰閫氳锛岃€屾槸鎶撳惎鍔ㄧ浉鍏充富绾裤€?
### 绗竴娈碉細`initializeEntrypoint(isNonInteractive)`

杩欐閫昏緫璐熻矗璁剧疆 `CLAUDE_CODE_ENTRYPOINT`銆?
瀹冧細鍖哄垎锛?
- `mcp serve`
- GitHub Action
- local-agent
- 闈炰氦浜?`sdk-cli`
- 浜や簰 `cli`

### 涓轰粈涔堣繖涓€灞傞噸瑕?
鍥炵瓟锛?鍥犱负 entrypoint 涓嶅彧鏄煁鐐瑰瓧娈碉紝瀹冧細褰卞搷绯荤粺濡備綍鐞嗚В鑷繁褰撳墠鎵€澶勭殑杩愯妯″紡銆?
### 绗簩娈碉細`main()` 涓€寮€濮嬪仛鐨勪簨鎯?
瀹冧細鍏堝仛锛?
- 澶勭悊璋冭瘯鍒悕
- 璁剧疆 Windows 瀹夊叏鐩稿叧鐜鍙橀噺
- 鍒濆鍖?warning handler
- 娉ㄥ唽 `exit` / `SIGINT` 澶勭悊
- 澶勭悊 `cc://` 鍜?deep link
- 澶勭悊 assistant / ssh 绛夌壒娈婁氦浜掕矾寰?
### 涓轰粈涔堣繖浜涗簨鎯呮斁鍦ㄦ渶鍓嶉潰

鍥炵瓟锛?鍥犱负杩欑被閫昏緫灞炰簬鈥滆繕娌¤繘鍏?commander 鍜屼笟鍔″眰涔嬪墠锛屽繀椤诲厛绋冲畾杩愯鏃惰竟鐣屸€濈殑閮ㄥ垎銆?
### 绗笁娈碉細鍒ゆ柇 interactive / non-interactive

杩欎竴姝ヤ細鍩轰簬锛?
- `-p / --print`
- `--init-only`
- `--sdk-url`
- `stdout.isTTY`

寰楀埌 `isNonInteractive`銆?
### 涓轰粈涔堣繖涓€姝ヨ鏃╁仛

鍥炵瓟锛?鍥犱负鍚庣画 telemetry銆乤uth銆乁I銆乻tdin 澶勭悊閮戒細渚濊禆杩欎釜鍒ゆ柇銆?
### 绗洓娈碉細`run()` 涓殑 `preAction` hook

杩欐槸 `main.tsx` 鐨勪竴涓叧閿璁＄偣銆?
绯荤粺骞朵笉鏄湪妯″潡鍔犺浇鏃跺氨鎵ц `init()`锛岃€屾槸鍦?commander 鐨?`preAction` 閲屾墽琛岋細

- 绛夊緟 MDM / keychain prefetch
- 鎵ц `init()`
- 璁剧疆缁堢鏍囬

### 涓轰粈涔堜笉鏄《灞傚垵濮嬪寲

鍥炵瓟锛?鍥犱负 help 绛夎矾寰勪笉搴旀壙鎷呭畬鏁村垵濮嬪寲鎴愭湰銆傛妸鍒濆鍖栨帹杩熷埌鍛戒护鐪熸鎵ц鍓嶏紝鏄垚鐔?CLI 鐨勫父瑙佸仛娉曘€?
### 绗簲娈碉細鏉冮檺涓婁笅鏂囧垵濮嬪寲

杩欓噷浼氳皟鐢細

- `initializeToolPermissionContext(...)`

骞跺鐞嗭細

- `allowedToolsCli`
- `disallowedToolsCli`
- `baseToolsCli`
- `permissionMode`
- `allowDangerouslySkipPermissions`
- `addDirs`

### 涓轰粈涔堣繖涓€姝ユ槸鍚姩涓荤嚎鐨勪竴閮ㄥ垎

鍥炵瓟锛?鍥犱负宸ュ叿姹犳毚闇蹭粈涔堣兘鍔涳紝蹇呴』鍏堢煡閬撴潈闄愪笂涓嬫枃銆傚惁鍒欐ā鍨嬪彲鑳藉厛鐪嬪埌涓嶈鐪嬪埌鐨勫伐鍏枫€?
### 绗叚娈碉細`setup()`銆乣getCommands()`銆乣getAgentDefinitions...` 骞惰

杩欐槸 `main.tsx` 寰堝€煎緱瀛︿範鐨勪竴鐐广€?
绯荤粺浼氾細

- 鍏堟敞鍐?bundled skills/plugins
- 鍐嶅惎鍔?`setupPromise`
- 鍐嶅惎鍔?`commandsPromise`
- 鍐嶅惎鍔?`agentDefsPromise`
- 鏈€鍚?`await` 杩欎簺缁撴灉

### 杩欓噷涓轰粈涔堝厛娉ㄥ唽 bundled skills/plugins

婧愮爜娉ㄩ噴宸茬粡璇存槑锛?
濡傛灉鍏堝苟琛屾墽琛?`getCommands()`锛岃€?bundled skills/plugins 杩樻病娉ㄥ唽杩涘幓锛宍getCommands()` 鍙兘浼?memoize 鍒扮┖缁撴灉銆?
### 杩欓噷鏈€鍊煎緱瀛︾殑涓嶆槸 API锛岃€屾槸鈥滃垵濮嬪寲鏃跺簭璇箟鈥?
涔熷氨鏄細

- 鍝簺浜嬫儏鍙互骞惰
- 鍝簺浜嬫儏蹇呴』鍏堝彂鐢?- 鍝簺缂撳瓨濡傛灉鏃舵満閿欎簡浼氭妸閿欒鐘舵€佽浣?
---

## 鍥涖€乣src/commands.ts`

### 绗竴娈碉細`COMMANDS()`

`COMMANDS` 琚０鏄庢垚 memoized function锛岃€屼笉鏄《灞傚父閲忔暟缁勩€?
### 涓轰粈涔堬紵

婧愮爜娉ㄩ噴缁欎簡鐩存帴绛旀锛?
- 搴曞眰鍑芥暟浼氳鍙?config
- config 涓嶈兘鍦ㄦā鍧楀垵濮嬪寲鏃惰繃鏃╄鍙?
### 杩欒鏄庝粈涔?
璇存槑鈥滃懡浠ゅ畾涔夆€濆苟涓嶆槸瀹屽叏闈欐€佺殑锛屽畠閮ㄥ垎渚濊禆杩愯鏃剁姸鎬併€?
### 绗簩娈碉細`loadAllCommands(cwd)`

杩欓噷浼氬苟琛屾敹闆嗭細

- `getSkills(cwd)`
- `getPluginCommands()`
- `getWorkflowCommands(cwd)`

鐒跺悗鍐嶆妸杩欎簺鏉ユ簮涓?`COMMANDS()` 鍚堝苟銆?
### 涓轰粈涔堝畠寰堥噸瑕?
鍥犱负杩欎竴姝ユ妸鈥滃鏉ユ簮鍛戒护瑁呴厤鈥濇娊璞℃垚浜嗙嫭绔嬮樁娈点€?
### 绗笁娈碉細`getCommands(cwd)`

杩欎竴姝ヤ細锛?
1. 鍙?`loadAllCommands(cwd)` 鐨勭粨鏋?2. 璇诲彇鍔ㄦ€佸彂鐜扮殑 skills
3. 鍏堣繃婊?availability 鍜?`isEnabled()`
4. 鍐嶆妸 dynamic skills 鎻掑叆鍚堥€備綅缃?
### 涓轰粈涔?dynamic skills 涓嶆槸绠€鍗?append

鍥炵瓟锛?鍥犱负鍛戒护琛ㄤ笉浠呮槸鏁版嵁锛岃繕浣撶幇璇箟鍒嗗眰鍜岀敤鎴蜂綋楠屻€?
### 绗洓娈碉細skill/tool 瑙嗗浘涓?user command 瑙嗗浘鍒嗙

`commands.ts` 杩樺畾涔変簡锛?
- `getSkillToolCommands()`
- `getSlashCommandToolSkills()`

杩欒鏄庯細

- 鈥滅敤鎴疯兘鐪嬪埌鐨勫懡浠も€?- 鈥滄ā鍨嬭兘璋冪敤鐨勬妧鑳解€?
涓嶆槸鍚屼竴闆嗗悎銆?
### 杩欐槸骞冲彴鍨嬬郴缁熷緢甯歌鐨勫垎灞?
鍥犱负鍚屼竴绉嶈兘鍔涳紝鍙兘浼氭湁涓嶅悓鍙椾紬锛?
- 浜虹被鐢ㄦ埛
- 妯″瀷
- 杩滅▼瀹㈡埛绔?
---

## 浜斻€佹妸鍥涗釜鏂囦欢涓茶捣鏉ョ湅

```text
bootstrap-entry.ts
  -> 纭繚鏈€鏃╂湡 bootstrap 瀹屾垚
  -> 鎶婂鏉傚害寤跺悗鍒?cli.tsx

cli.tsx
  -> 澶勭悊鏈€杞婚噺鍜屾渶鐗规畩鐨勮矾寰?  -> 鍙湪蹇呰鏃惰繘鍏?main.tsx

main.tsx
  -> 缂栨帓鍒濆鍖栨椂搴?  -> 鏋勯€犲綋鍓嶈繍琛屾ā寮?  -> 鐢熸垚褰撳墠浼氳瘽鐨勫懡浠ゃ€佸伐鍏枫€佹潈闄愬拰鐘舵€佸熀纭€

commands.ts
  -> 鎶婂鏉ユ簮鍛戒护瑁呴厤鎴愭渶缁堝彲鐢ㄥ懡浠ら泦
```

## 杩欎竴濂楄璁″洖绛斾簡浠€涔堟洿澶х殑闂

鍥炵瓟锛?瀹冨洖绛旂殑鏄€滀竴涓鏉?AI CLI 鎬庝箞閬垮厤鎴愪负涓€鍥㈠惎鍔ㄦ湡娉ョ悆鈥濄€?
瀹冪殑绛旀鏄細

- 鎻愬墠鍒嗗眰
- 鎻愬墠鍒嗘祦
- 鏄庣‘鏃跺簭
- 缁熶竴瑁呴厤

