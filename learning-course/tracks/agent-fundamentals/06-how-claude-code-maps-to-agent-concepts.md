# Claude Code 濡備綍鏄犲皠杩欎簺 Agent 姒傚康

闅惧害锛氫腑绾?棰勮闃呰鏃堕棿锛?0-12 鍒嗛挓
寤鸿鏂瑰紡锛氬缓璁簿璇?
鍓嶉潰 5 绡囪鐨勬槸閫氱敤 Agent 璁捐锛岃繖涓€绡囨妸瀹冧滑鏄犲皠鍥?Claude Code銆?
## Agent loop 瀵瑰簲鍝噷

瀵瑰簲锛?
- `src/query.ts`

鍥犱负杩欓噷璐熻矗锛?
- 鍐冲畾浠€涔堟椂鍊欓棶妯″瀷
- 浠€涔堟椂鍊欒皟宸ュ叿
- 浠€涔堟椂鍊欑户缁笅涓€杞?
## Tools 瀵瑰簲鍝噷

瀵瑰簲锛?
- `src/Tool.ts`
- `src/tools.ts`

鍥犱负杩欓噷瀹氫箟浜嗭細

- 宸ュ叿鏄粈涔?- 宸ュ叿鑳借闂粈涔堜笂涓嬫枃
- 褰撳墠浼氳瘽鏆撮湶浠€涔堝伐鍏?
## Memory / Context 瀵瑰簲鍝噷

瀵瑰簲锛?
- `src/context.ts`
- `src/utils/messages.ts`

鍥犱负杩欓噷璐熻矗锛?
- 绯荤粺涓婁笅鏂?- 鐢ㄦ埛涓婁笅鏂?- 浼氳瘽娑堟伅鍘嗗彶

## Human-in-the-loop / Permissions 瀵瑰簲鍝噷

瀵瑰簲锛?
- `src/utils/permissions/permissionSetup.ts`

鍥犱负杩欓噷璐熻矗锛?
- 鏉冮檺妯″紡
- 宸ュ叿鏆撮湶杈圭晫
- 鍗遍櫓瑙勫垯鍓ョ

## Long-lived State 瀵瑰簲鍝噷

瀵瑰簲锛?
- `src/state/AppStateStore.ts`

鍥犱负杩欓噷鎵胯浇锛?
- 浼氳瘽鐘舵€?- 浠诲姟鐘舵€?- 鎻掍欢鐘舵€?- MCP 鐘舵€?
## Platform Extensibility 瀵瑰簲鍝噷

瀵瑰簲锛?
- `src/commands.ts`
- `src/services/mcp/client.ts`
- `src/utils/plugins/loadPluginCommands.ts`

鍥犱负杩欓噷璐熻矗锛?
- built-in commands
- skills
- plugins
- MCP

## 鏈€鍚庝竴鍙ヨ瘽

濡傛灉浣犲瀹?Agent 姒傚康鍚庡啀鍥炴潵鐪?Claude Code锛屽氨浼氬彂鐜帮細

瀹冧笉鏄€滃緢澶氶浂鏁ｅ姛鑳芥嫾璧锋潵鈥濓紝鑰屾槸鎶?Agent 璁捐閲岀殑鍏抽敭瑕佺礌閮借惤瀹炴垚浜嗗叿浣撳伐绋嬫ā鍧椼€?
