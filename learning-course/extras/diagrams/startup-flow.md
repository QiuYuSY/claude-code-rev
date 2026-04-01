# 鍚姩閾捐矾鍥?
## 涓诲浘

```text
package.json
  鈹斺攢 dev/start/version
      鈹斺攢 src/bootstrap-entry.ts
          鈹溾攢 ensureBootstrapMacro()
          鈹斺攢 import('./entrypoints/cli.tsx')
              鈹斺攢 src/entrypoints/cli.tsx
                  鈹溾攢 fast-path: --version
                  鈹溾攢 fast-path: bridge / daemon / bg / template jobs / runners
                  鈹溾攢 fast-path: special MCP host modes
                  鈹斺攢 full-path
                      鈹溾攢 startCapturingEarlyInput()
                      鈹溾攢 import('../main.js')
                      鈹斺攢 main()
                          鈹斺攢 src/main.tsx
                              鈹溾攢 interactive / non-interactive mode detection
                              鈹溾攢 early settings loading
                              鈹溾攢 init() in preAction hook
                              鈹溾攢 permission context initialization
                              鈹溾攢 setup() + commands loading + agent loading
                              鈹溾攢 bundled plugins / bundled skills registration
                              鈹斺攢 launchRepl() / headless path
                                  鈹斺攢 commands.ts / tools.ts / query.ts / REPL
```

## 杩欏紶鍥炬兂琛ㄨ揪浠€涔?
### 1. 鍏ュ彛鏄垎灞傜殑

杩欎釜绯荤粺涓嶆槸鈥滀竴涓叆鍙ｆ枃浠堕€氬悆鍏ㄩ儴妯″紡鈥濓紝鑰屾槸鎶婏細

- 鏈€鏃╂湡 bootstrap
- CLI 鍒嗘祦
- 閲嶅瀷鍒濆鍖?- 浜や簰鎴?headless 杩愯

鎷嗘垚浜嗕笉鍚屽眰绾с€?
### 2. `cli.tsx` 鏄垎娴佸櫒锛屼笉鏄笟鍔″眰

寰堝瀛︿範鑰呯涓€娆＄湅鍒?`src/entrypoints/cli.tsx`锛屼細璇互涓鸿繖灏辨槸涓讳笟鍔″叆鍙ｃ€傚疄闄呬笂瀹冩洿鍍忔槸涓€涓祦閲忕綉鍏筹紝鍙礋璐ｏ細

- 鍒ゆ柇鏄惁鑳藉揩閫熻繑鍥?- 鍒ゆ柇鏄惁璧颁笓鐢ㄦā寮?- 鍒ゆ柇鏄惁闇€瑕佸畬鏁磋繍琛屾椂

### 3. `main.tsx` 鏄惎鍔ㄧ紪鎺掑櫒

`main.tsx` 鐨勬牳蹇冧环鍊间笉鍦ㄢ€滄湁澶氬皯涓氬姟閫昏緫鈥濓紝鑰屽湪浜庡畠鎺у埗浜嗭細

- 鍒濆鍖栭『搴?- 骞惰鍔犺浇鏃舵満
- 浜や簰妯″紡涓?headless 妯″紡鐨勫垎姝х偣

## 璁捐鏀剁泭

- 杞婚噺鍛戒护涓嶄細琚噸閲忓垵濮嬪寲鎷栨參
- 鍚勭鐗规畩妯″紡鍙互鐙珛婕斿寲
- 鍒濆鍖栭『搴忓彲琚樉寮忕淮鎶?
## 璁捐浠ｄ环

- 鍒嗗眰瓒婂锛岀悊瑙ｅ叆鍙ｈ秺闇€瑕佸叏灞€瑙嗚
- `main.tsx` 瀹规槗鍙樻垚鍗曠偣澶嶆潅搴︿腑蹇?
## 澶嶇洏闂

1. 涓轰粈涔?`--version` 搴旇灏介噺鍋滅暀鍦?`cli.tsx`锛?2. 涓轰粈涔?bundled skills / bundled plugins 瑕佸湪 `getCommands()` 涔嬪墠娉ㄥ唽锛?3. 濡傛灉鍙湁涓€涓€诲叆鍙ｆ枃浠讹紝杩欏紶鍥句細鍦ㄥ摢浜涘湴鏂瑰潔濉岋紵

