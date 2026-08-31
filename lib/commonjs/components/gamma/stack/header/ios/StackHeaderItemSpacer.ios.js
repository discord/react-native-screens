"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StackHeaderItemSpacer;
var _react = _interopRequireDefault(require("react"));
var _StackHeaderItemSpacerIOSNativeComponent = _interopRequireDefault(require("../../../../../fabric/gamma/stack/StackHeaderItemSpacerIOSNativeComponent"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StackHeaderItemSpacer(props) {
  return /*#__PURE__*/_react.default.createElement(_StackHeaderItemSpacerIOSNativeComponent.default, _extends({}, props, {
    style: styles.config
  }));
}
const styles = _reactNative.StyleSheet.create({
  config: {
    position: 'absolute',
    left: 0,
    top: 0
  }
});
//# sourceMappingURL=StackHeaderItemSpacer.ios.js.map