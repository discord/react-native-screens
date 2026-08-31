'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import ScrollToTopGuardNativeComponent from '../../../fabric/gamma/scroll-to-top-guard/ScrollToTopGuardNativeComponent';

/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 *
 * This is an **experimental, unstable** component which might be subject to
 * breaking changes and will be removed in the future. It is meant to be used
 * only as a temporary workaround until the issue is fixed on `react-native`'s
 * side. The issue report: https://github.com/react/react-native/issues/56061.
 */
export function ScrollToTopGuard(props) {
  return /*#__PURE__*/React.createElement(ScrollToTopGuardNativeComponent, _extends({}, props, {
    collapsable: false
  }));
}
//# sourceMappingURL=ScrollToTopGuard.ios.js.map