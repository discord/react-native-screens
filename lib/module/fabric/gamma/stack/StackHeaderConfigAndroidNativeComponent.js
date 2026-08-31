'use client';

import { codegenNativeCommands, codegenNativeComponent } from 'react-native';
export const Commands = codegenNativeCommands({
  supportedCommands: ['updateToolbarMenuElements']
});
export default codegenNativeComponent('RNSStackHeaderConfigAndroid', {
  interfaceOnly: true,
  excludedPlatforms: ['iOS']
});
//# sourceMappingURL=StackHeaderConfigAndroidNativeComponent.js.map