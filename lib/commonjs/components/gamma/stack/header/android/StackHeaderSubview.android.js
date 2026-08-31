"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _StackHeaderSubviewAndroidNativeComponent = _interopRequireDefault(require("../../../../../fabric/gamma/stack/StackHeaderSubviewAndroidNativeComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
function StackHeaderSubview(props) {
  const {
    children,
    ...filteredProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_StackHeaderSubviewAndroidNativeComponent.default, _extends({
    collapsable: false,
    style: filteredProps.type === 'background' ? _reactNative.StyleSheet.absoluteFill : styles.absoluteStartTop
  }, filteredProps), children);
}
var _default = exports.default = StackHeaderSubview;
const styles = _reactNative.StyleSheet.create({
  absoluteStartTop: {
    position: 'absolute',
    start: 0,
    top: 0
  }
});
//# sourceMappingURL=StackHeaderSubview.android.js.map