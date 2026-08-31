"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Commands = void 0;
var _reactNative = require("react-native");
// Codegen requires a concrete interface — bare `object` causes
// "Unknown primitive type TSObjectKeyword". Fields are intentionally
// loose (all optional) because the native side uses 3-state semantics
// (key absent = no change, null = reset, value = set).

const Commands = exports.Commands = (0, _reactNative.codegenNativeCommands)({
  supportedCommands: ['setMenuItemOptions', 'setMenuOptions']
});
var _default = exports.default = (0, _reactNative.codegenNativeComponent)('RNSStackHeaderConfigIOS', {
  interfaceOnly: true,
  excludedPlatforms: ['android']
});
//# sourceMappingURL=StackHeaderConfigIOSNativeComponent.js.map