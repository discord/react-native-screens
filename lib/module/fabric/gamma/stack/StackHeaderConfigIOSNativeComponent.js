'use client';

import { codegenNativeCommands, codegenNativeComponent } from 'react-native';

// Codegen requires a concrete interface — bare `object` causes
// "Unknown primitive type TSObjectKeyword". Fields are intentionally
// loose (all optional) because the native side uses 3-state semantics
// (key absent = no change, null = reset, value = set).

export const Commands = codegenNativeCommands({
  supportedCommands: ['setMenuItemOptions', 'setMenuOptions']
});
export default codegenNativeComponent('RNSStackHeaderConfigIOS', {
  interfaceOnly: true,
  excludedPlatforms: ['android']
});
//# sourceMappingURL=StackHeaderConfigIOSNativeComponent.js.map