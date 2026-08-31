function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import ScrollViewMarkerNativeComponent from '../../../fabric/gamma/ScrollViewMarkerNativeComponent';
export function ScrollViewMarker(props) {
  const {
    scrollEdgeEffects,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(ScrollViewMarkerNativeComponent, _extends({
    leftScrollEdgeEffect: scrollEdgeEffects?.left,
    topScrollEdgeEffect: scrollEdgeEffects?.top,
    rightScrollEdgeEffect: scrollEdgeEffects?.right,
    bottomScrollEdgeEffect: scrollEdgeEffects?.bottom
  }, rest));
}
//# sourceMappingURL=ScrollViewMarker.js.map