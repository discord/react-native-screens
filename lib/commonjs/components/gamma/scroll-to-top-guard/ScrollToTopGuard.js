"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollToTopGuard = ScrollToTopGuard;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 *
 * This is an **experimental, unstable** component which might be subject to
 * breaking changes and will be removed in the future. It is meant to be used
 * only as a temporary workaround until the issue is fixed on `react-native`'s
 * side. The issue report: https://github.com/react/react-native/issues/56061.
 *
 * Falls back to `React.Fragment` on platforms other than iOS.
 */
function ScrollToTopGuard({
  children
}) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
}
//# sourceMappingURL=ScrollToTopGuard.js.map