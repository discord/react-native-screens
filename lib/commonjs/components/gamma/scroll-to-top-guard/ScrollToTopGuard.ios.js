"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollToTopGuard = ScrollToTopGuard;
var _react = _interopRequireDefault(require("react"));
var _ScrollToTopGuardNativeComponent = _interopRequireDefault(require("../../../fabric/gamma/scroll-to-top-guard/ScrollToTopGuardNativeComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 *
 * This is an **experimental, unstable** component which might be subject to
 * breaking changes and will be removed in the future. It is meant to be used
 * only as a temporary workaround until the issue is fixed on `react-native`'s
 * side. The issue report: https://github.com/react/react-native/issues/56061.
 */
function ScrollToTopGuard(props) {
  return /*#__PURE__*/_react.default.createElement(_ScrollToTopGuardNativeComponent.default, _extends({}, props, {
    collapsable: false
  }));
}
//# sourceMappingURL=ScrollToTopGuard.ios.js.map