# 鎵╁睍鏈哄埗鍥?
## 涓诲浘

```text
                    +------------------+
                    | Built-in Commands|
                    +------------------+
                              |
                              v
                    +------------------+
                    |   COMMANDS()     |
                    +------------------+
                              |
   +--------------------------+---------------------------+
   |                          |                           |
   v                          v                           v
skill dirs              plugin commands             workflow commands
   |                          |                           |
   v                          v                           v
plugin skills           bundled skills            built-in plugin skills
   |                          |                           |
   +--------------------------+---------------------------+
                              |
                              v
                    +------------------+
                    | loadAllCommands()|
                    +------------------+
                              |
                              v
                    +------------------+
                    |  getCommands()   |
                    | availability     |
                    | isEnabled        |
                    | dynamic skills   |
                    +------------------+
                              |
                              v
                    +------------------+
                    | user command list|
                    +------------------+

MCP side:

MCP configs -> MCP clients -> MCP tools / MCP resources / MCP skills
                         鈹斺攢 threaded into tool system and command-adjacent views
```

## 杩欏紶鍥炬兂琛ㄨ揪浠€涔?
### 1. 鎵╁睍鏉ユ簮寰堝锛屼絾鍑哄彛瑕佺粺涓€

Claude Code 鐨勫懡浠ゅ拰鎶€鑳戒笉鏄潵鑷崟涓€鏉ユ簮銆傚畠浠垎鍒潵鑷細

- 鍐呭缓鍛戒护
- skills 鐩綍
- plugin commands
- plugin skills
- bundled skills
- workflow commands
- dynamic skills
- 浠ュ強 MCP 渚х殑澶栭儴鑳藉姏

### 2. `getCommands()` 鏄粺涓€闂ㄩ潰

瀹冪湡姝ｅ仛鐨勬槸鎶娾€滃鏉ユ簮鑳藉姏鈥濇敹鏉熸垚鈥滃綋鍓嶄細璇濆彲瑙佽兘鍔涒€濄€?
### 3. MCP 涓嶅彧鏄懡浠ゆ墿灞?
MCP 杩樿兘寮曞叆锛?
- tools
- resources
- skills

鎵€浠ュ畠鏇村儚鍗忚鍨嬭兘鍔涘眰锛岃€屼笉鏄畝鍗曟彃浠躲€?
## 璁捐鏀剁泭

- 骞冲彴鎵╁睍鍙互鎸佺画澧為暱
- 鍚勬潵婧愯兘鍔涜兘鍏变韩杩囨护銆佹帓搴忓拰灞曠ず閫昏緫
- 鏇撮€傚悎浼佷笟鍜岀敓鎬佸寲鍦烘櫙

## 璁捐浠ｄ环

- 鍛戒护涓嶅彲瑙侀棶棰樹細鍙樻垚澶氶摼璺帓鏌?- 鍏冧俊鎭川閲忔帶鍒惰姹傞珮
- 鍒濆鑰呭鏄撶湅涓嶅嚭鍝簺鑳藉姏鏉ヨ嚜鍝噷

## 澶嶇洏闂

1. 涓轰粈涔堝鏉ユ簮鑳藉姏鏈€缁堝繀椤绘眹鎬诲埌缁熶竴娉ㄥ唽涓績锛?2. 涓轰粈涔?skills 鍜?commands 涓嶈兘绠€鍗曡涓哄悓涓€绉嶄笢瑗匡紵
3. MCP 涓轰粈涔堝悓鏃跺€煎緱寮曞叆 tools 鍜?resources 涓ょ被鎶借薄锛?
