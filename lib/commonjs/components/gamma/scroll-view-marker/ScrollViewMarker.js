"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollViewMarker = ScrollViewMarker;
var _react = _interopRequireDefault(require("react"));
var _ScrollViewMarkerNativeComponent = _interopRequireDefault(require("../../../fabric/gamma/ScrollViewMarkerNativeComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScrollViewMarker(props) {
  const {
    scrollEdgeEffects,
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(_ScrollViewMarkerNativeComponent.default, _extends({
    leftScrollEdgeEffect: scrollEdgeEffects?.left,
    topScrollEdgeEffect: scrollEdgeEffects?.top,
    rightScrollEdgeEffect: scrollEdgeEffects?.right,
    bottomScrollEdgeEffect: scrollEdgeEffects?.bottom
  }, rest));
}
//# sourceMappingURL=ScrollViewMarker.js.map