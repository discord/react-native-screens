"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIOS26OrHigher = void 0;
var _reactNative = require("react-native");
const isIOS26OrHigher = exports.isIOS26OrHigher = _reactNative.Platform.OS === 'ios' && parseInt(_reactNative.Platform.Version, 10) >= 26;
//# sourceMappingURL=PlatformUtils.js.map