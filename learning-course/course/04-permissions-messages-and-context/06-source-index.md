# 婧愮爜绱㈠紩琛?
## 杩欎竴璇惧厛璇讳粈涔?
鎺ㄨ崘椤哄簭锛?
1. `src/utils/permissions/permissionSetup.ts`
2. `src/main.tsx` 涓潈闄愬垵濮嬪寲鐗囨
3. `src/utils/messages.ts`
4. `src/context.ts`
5. `src/Tool.ts`

## 鍏抽敭鏂囦欢

### `src/utils/permissions/permissionSetup.ts`

鍏虫敞鐐癸細

- `removeDangerousPermissions(...)`锛歔`src/utils/permissions/permissionSetup.ts:472`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:472)
- `stripDangerousPermissionsForAutoMode(...)`锛歔`src/utils/permissions/permissionSetup.ts:510`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:510)
- `initializeToolPermissionContext(...)`锛歔`src/utils/permissions/permissionSetup.ts:872`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:872)

涓轰粈涔堥噸瑕侊細
杩欓噷瀹氫箟浜嗘潈闄愬浣曚粠杈撳叆瑙勫垯杞垚杩愯鏃惰竟鐣屻€?
### `src/main.tsx`

鍏虫敞鐐癸細

- `initializeToolPermissionContext(...)` 璋冪敤锛歔`src/main.tsx:1753`](/d:/Code/learn-claude/claude-code-rev/src/main.tsx:1753)

涓轰粈涔堥噸瑕侊細
瀹冭鏄庢潈闄愬垵濮嬪寲鍦ㄥ惎鍔ㄤ富绾夸笂锛岃€屼笉鏄墽琛屾湯绔€?
### `src/utils/messages.ts`

鍏虫敞鐐癸細

- `createAssistantAPIErrorMessage(...)`锛歔`src/utils/messages.ts:435`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:435)
- `createUserMessage(...)`锛歔`src/utils/messages.ts:460`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:460)
- `normalizeMessagesForAPI(...)`锛歔`src/utils/messages.ts:1989`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:1989)
- `createSystemMessage(...)`锛歔`src/utils/messages.ts:4335`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:4335)

涓轰粈涔堥噸瑕侊細
杩欓噷瀹氫箟浜嗗唴閮ㄨ繍琛屾椂鍘嗗彶涓?API 杈撳叆杈圭晫銆?
### `src/context.ts`

鍏虫敞鐐癸細

- `getSystemContext`锛歔`src/context.ts:116`](/d:/Code/learn-claude/claude-code-rev/src/context.ts:116)
- `getUserContext`锛歔`src/context.ts:155`](/d:/Code/learn-claude/claude-code-rev/src/context.ts:155)

涓轰粈涔堥噸瑕侊細
杩欓噷瀹氫箟浜嗕笂涓嬫枃瑁呴厤鏈哄埗銆?
## 鍏抽敭鍑芥暟

- `initializeToolPermissionContext`
- `removeDangerousPermissions`
- `stripDangerousPermissionsForAutoMode`
- `createUserMessage`
- `createSystemMessage`
- `createAssistantAPIErrorMessage`
- `normalizeMessagesForAPI`
- `getSystemContext`
- `getUserContext`

## 鍏抽敭绫诲瀷

- `ToolPermissionContext`
- `UserMessage`
- `AssistantMessage`
- `SystemMessage`
- `Message`

## 寤鸿閲嶇偣鐪嬬殑浠ｇ爜娈?
### 浠ｇ爜娈?A锛氭潈闄愪笂涓嬫枃鏋勫缓

- [`src/utils/permissions/permissionSetup.ts:872`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:872)

鐪嬬偣锛?CLI 瑙勫垯銆乨isk 瑙勫垯鍜?mode 濡備綍鍚堝苟鎴愯繍琛屾椂鏉冮檺瀵硅薄銆?
### 浠ｇ爜娈?B锛氬嵄闄╂潈闄愬墺绂?
- [`src/utils/permissions/permissionSetup.ts:472`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:472)
- [`src/utils/permissions/permissionSetup.ts:510`](/d:/Code/learn-claude/claude-code-rev/src/utils/permissions/permissionSetup.ts:510)

鐪嬬偣锛?涓轰粈涔堢郴缁熻鍋氶闃插紡鏉冮檺鎺у埗銆?
### 浠ｇ爜娈?C锛氭秷鎭伐鍘?
- [`src/utils/messages.ts:435`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:435)
- [`src/utils/messages.ts:460`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:460)

鐪嬬偣锛?涓轰粈涔?message 蹇呴』缁熶竴宸ュ巶鍖栥€?
### 浠ｇ爜娈?D锛氳繍琛屾椂鍘嗗彶 -> API 杈撳叆

- [`src/utils/messages.ts:1989`](/d:/Code/learn-claude/claude-code-rev/src/utils/messages.ts:1989)

鐪嬬偣锛?涓轰粈涔堝唴閮ㄥ巻鍙插拰妯″瀷杈撳叆蹇呴』鍒嗗眰銆?
### 浠ｇ爜娈?E锛氫笂涓嬫枃瑁呴厤

- [`src/context.ts:116`](/d:/Code/learn-claude/claude-code-rev/src/context.ts:116)
- [`src/context.ts:155`](/d:/Code/learn-claude/claude-code-rev/src/context.ts:155)

鐪嬬偣锛?涓轰粈涔?system context 鍜?user context 鍊煎緱鍗曠嫭寤烘ā涓庣紦瀛樸€?
## 闃呰鏃惰鍥炵瓟鐨勯棶棰?
1. 涓轰粈涔堟潈闄愬睘浜庤繍琛屾椂杈圭晫锛岃€屼笉鏄渶鍚庣‘璁ゆ锛?2. 涓轰粈涔?message 鏄粺涓€鍘嗗彶璇█锛?3. 涓轰粈涔?context assembly 涓嶈兘鏁ｈ惤鍦ㄥ悇妯″潡閲岋紵

