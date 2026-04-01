# 鏉冮檺銆佹秷鎭笌涓婁笅鏂囨祦绋嬪垎鏋?
## 涓绘祦绋?
```text
CLI flags / settings / disk rules
  -> initializeToolPermissionContext(...)
      -> ToolPermissionContext
          -> getTools(permissionContext)
              -> model sees allowed tool pool

user / system / tool / attachment events
  -> create*Message(...)
      -> normalizeMessagesForAPI(...)
          -> API-facing message stream

git / CLAUDE.md / date / env
  -> getSystemContext()
  -> getUserContext()
      -> context assembly
          -> prepend / append into query path
```

## 绗?1 灞傦細鏉冮檺鍒濆鍖?
鍦?`main.tsx` 鐨勫惎鍔ㄨ繃绋嬩腑锛屼細璋冪敤锛?
- `initializeToolPermissionContext(...)`

杩欎竴闃舵浼氳€冭檻锛?
- `allowedToolsCli`
- `disallowedToolsCli`
- `baseToolsCli`
- `permissionMode`
- `allowDangerouslySkipPermissions`
- `addDirs`

### 涓轰粈涔堣繖涓€姝ュ緢鏃?
鍥犱负瀹冧笉鏄湪闂€滄墽琛屾椂鏄惁鏀捐鈥濓紝鑰屾槸鍦ㄩ棶锛?
- 褰撳墠浼氳瘽搴旇鏆撮湶鍝簺宸ュ叿
- 褰撳墠鏉冮檺妯″紡鏄粈涔?- 鏄惁瑕佽嚜鍔ㄥ墺绂诲嵄闄╄鍒?
## 绗?2 灞傦細娑堟伅鍒涘缓涓庢秷鎭爣鍑嗗寲

Claude Code 閲屼笉鏄洿鎺ユ墜鍐?message 瀵硅薄锛岃€屾槸閫氳繃宸ュ巶鍑芥暟鍒涘缓锛?
- `createUserMessage(...)`
- `createSystemMessage(...)`
- `createAssistantAPIErrorMessage(...)`
- `createToolUseSummaryMessage(...)`

鐒跺悗鍦ㄧ湡姝ｅ彂缁?API 鍓嶏紝閫氳繃锛?
- `normalizeMessagesForAPI(...)`

鎶婂唴閮ㄦ秷鎭巻鍙叉暣鐞嗘垚 API 鍙秷璐瑰舰鎬併€?
### 涓轰粈涔堥渶瑕佷袱姝?
鍥犱负鍐呴儴杩愯鏃跺巻鍙插拰鏈€缁堝彂缁欐ā鍨嬬殑娑堟伅涓嶆槸瀹屽叏鐩稿悓鐨勪笢瑗裤€?
鍐呴儴鍘嗗彶瑕佷繚鐣欙細

- UI-only 淇℃伅
- 铏氭嫙娑堟伅
- 绯荤粺浜嬩欢
- 鏈湴鍛戒护杈撳嚭

鑰?API 杈撳叆蹇呴』鏇翠弗鏍笺€佹洿绋冲畾銆?
## 绗?3 灞傦細涓婁笅鏂囨瀯寤?
鍦?`context.ts` 閲岋紝绯荤粺浼氬垎鍒瀯寤猴細

- `getSystemContext()`
- `getUserContext()`

### `getSystemContext()` 浼氬叧蹇冧粈涔?
- git 鐘舵€?- 褰撳墠鍒嗘敮鍜屼富鍒嗘敮
- recent commits
- 鏌愪簺璋冭瘯鎬?system prompt injection

### `getUserContext()` 浼氬叧蹇冧粈涔?
- CLAUDE.md 鍐呭
- memory files
- 褰撳墠鏃ユ湡

### 涓轰粈涔堝畠浠€煎緱鍗曠嫭寤烘ā

鍥犱负杩欎簺淇℃伅锛?
- 鏉ユ簮涓嶅悓
- 寮€閿€涓嶅悓
- 鐢熷懡鍛ㄦ湡涓嶅悓
- 缂撳瓨绛栫暐涓嶅悓

## 杩欎竴鏁村璁捐鍦ㄨВ鍐充粈涔堥棶棰?
### 闂 1锛氭潈闄愪笉鑳藉お鏅氱敓鏁?
瑙ｅ喅鏂瑰紡锛?鏉冮檺涓婁笅鏂囧墠缃垵濮嬪寲锛屽弬涓庡伐鍏锋睜鏆撮湶銆?
### 闂 2锛氳繍琛屾椂鍘嗗彶涓嶈兘鐩存帴绛変簬 API 杈撳叆

瑙ｅ喅鏂瑰紡锛?鍐呴儴娑堟伅缁撴瀯鍜?API 褰掍竴鍖栧垎灞傘€?
### 闂 3锛氫笂涓嬫枃鏉ユ簮澶嶆潅锛屼笉鑳藉埌澶勪复鏃舵嫾鎺?
瑙ｅ喅鏂瑰紡锛?鏄惧紡 `getSystemContext()` / `getUserContext()`銆?
## 闃舵鎬ф€荤粨

濡傛灉浣犲彧璁颁竴鍙ヨ瘽锛屽簲璇ヨ杩欏彞锛?
鈥淐laude Code 鍏堢敤鏉冮檺鍐冲畾鑳藉姏杈圭晫锛屽啀鐢ㄦ秷鎭淮鎶よ繍琛屾椂鍘嗗彶锛屾渶鍚庣敤涓婁笅鏂囪閰嶅喅瀹氭ā鍨嬬湅鍒扮殑涓栫晫銆傗€?
