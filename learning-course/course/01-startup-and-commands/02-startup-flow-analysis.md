# 鍚姩娴佺▼鍒嗘瀽

## 涓绘祦绋?
```text
package.json
  -> src/bootstrap-entry.ts
      -> src/entrypoints/cli.tsx
          -> src/main.tsx
              -> run() / preAction init
                  -> permissions / setup / commands / agents / REPL
```

## 绗?1 灞傦細`package.json`

杩欓噷鍐冲畾浜嗙敤鎴疯緭鍏ュ懡浠ゅ悗锛岃繘绋嬮鍏堣繘鍏ュ摢閲屻€?
鍏抽敭鐐逛笉鏄剼鏈悕瀛楋紝鑰屾槸瀹冧滑缁熶竴鎸囧悜浜?`src/bootstrap-entry.ts`锛岃繖璇存槑锛?
- 椤圭洰浣滆€呮湁鎰忛伩鍏嶆妸涓氬姟涓绘枃浠舵毚闇叉垚鐩存帴鍏ュ彛
- 甯屾湜鎵€鏈夎繍琛屾ā寮忓厛缁忚繃缁熶竴 bootstrap

## 绗?2 灞傦細`src/bootstrap-entry.ts`

鏂囦欢鍐呭鏋佸皬锛?
- 鎵ц `ensureBootstrapMacro()`
- 鍔ㄦ€佸鍏?`./entrypoints/cli.tsx`

### 涓轰粈涔堣繖灞傝杩欎箞钖?
鏍囧噯鍥炵瓟锛?鍥犱负杩欏眰浼氳鎵€鏈夎矾寰勫叡浜€備竴鏃﹁繖閲屽お閲嶏紝鎵€鏈夊懡浠ら兘浼氫竴璧峰彉鎱€?
### 杩欏眰鏈€鍊煎緱瀛︾殑鐐?
涓嶆槸鈥滈€昏緫澶氣€濓紝鑰屾槸鈥滈€昏緫鍏嬪埗鈥濄€?
## 绗?3 灞傦細`src/entrypoints/cli.tsx`

杩欓噷鏄涓€閬撶湡姝ｇ殑鍐崇瓥灞傘€?
瀹冭礋璐ｅ垽鏂細

- 鏈夋病鏈夌畝鍗?flag 鍙互蹇€熻繑鍥?- 鏈夋病鏈夌壒娈婃ā寮忓簲杩涘叆鐙珛璺緞
- 浠€涔堟椂鍊欏繀椤诲姞杞藉畬鏁磋繍琛屾椂

### 鍏稿瀷 fast-path

- `--version`
- `--dump-system-prompt`
- Chrome / computer-use MCP host 妯″紡
- `remote-control`
- `daemon`
- `ps/logs/attach/kill`
- template job 妯″紡
- environment/self-hosted runner

### 涓轰粈涔堣繖浜涢€昏緫瑕佸湪杩欓噷

鏍囧噯鍥炵瓟锛?鍥犱负瀹冧滑閮芥槸鈥滃彲浠ュ湪瀹屾暣 CLI 涔嬪墠鐙珛瀹屾垚鈥濈殑璺緞銆傛妸瀹冧滑鎷﹀湪鍓嶉潰锛岃兘鏄捐憲鍑忓皯鏃犳晥鍒濆鍖栥€?
## 绗?4 灞傦細`src/main.tsx`

鍙湁 full-path 鎵嶄細杩涘埌杩欓噷銆?
瀹冭礋璐ｏ細

- 鍐嶆鍒ゆ柇 interactive / non-interactive
- 璁剧疆 entrypoint 绫诲瀷涓?client type
- 鎻愬墠鍔犺浇 settings
- 鍦?`preAction` 涓墽琛?`init()`
- 鍒濆鍖栨潈闄愪笂涓嬫枃
- 鎻愬墠娉ㄥ唽 bundled plugins / skills
- 骞惰鍚姩 `setup()`銆乣getCommands()`銆乣getAgentDefinitions...`

### 鍏抽敭璁よ瘑

`main.tsx` 涓嶆槸绠€鍗曞叆鍙ｏ紝鑰屾槸鈥滃垵濮嬪寲缂栨帓鍣ㄢ€濄€?
## 绗?5 灞傦細`src/commands.ts`

杩欐槸鍛戒护瑁呴厤灞傘€?
瀹冭鏀堕泦锛?
- 鍐呭缓鍛戒护
- skill dir commands
- plugin commands
- plugin skills
- bundled skills
- built-in plugin skills
- workflows
- dynamic skills

### 涓轰粈涔堝畠閲嶈

鍥犱负鐪熸瑕佷氦缁欑郴缁熶娇鐢ㄧ殑涓嶆槸鈥滃畾涔夎繃鐨勫懡浠も€濓紝鑰屾槸鈥滄寜褰撳墠鐜瑁呴厤鍚庡彲鐢ㄧ殑鍛戒护鈥濄€?
## 杩欎竴鏁村璁捐鍦ㄨВ鍐充粈涔堥棶棰?
### 闂 1锛氬惎鍔ㄦ參

瑙ｅ喅鏂瑰紡锛?鍏ュ彛鍒嗗眰 + fast-path + 鍔ㄦ€佸鍏ャ€?
### 闂 2锛氭ā寮忓

瑙ｅ喅鏂瑰紡锛?鍦?`cli.tsx` 鍋氭ā寮忓垎娴侊紝鍦?`main.tsx` 鍋氶噸閲忓垵濮嬪寲銆?
### 闂 3锛氬懡浠ゆ潵婧愬

瑙ｅ喅鏂瑰紡锛?缁熶竴娉ㄥ唽涓績 + 鎸夐渶瑁呴厤銆?
## 闃舵鎬ф€荤粨

濡傛灉浣犲彧璁颁竴鍙ヨ瘽锛屽簲璇ヨ杩欏彞锛?
鈥淐laude Code 鍏堣В鍐冲惎鍔ㄨ矾寰勫垎娴侀棶棰橈紝鍐嶈В鍐冲畬鏁磋繍琛屾椂瑁呴厤闂锛屾渶鍚庢墠瑙ｅ喅鍛戒护缁熶竴鏆撮湶闂銆傗€?
