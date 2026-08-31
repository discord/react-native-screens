"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSheet = FormSheet;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _FormSheetHostNativeComponent = _interopRequireDefault(require("../../../../fabric/gamma/modals/form-sheet/FormSheetHostNativeComponent"));
var _FormSheetContentWrapperNativeComponent = _interopRequireDefault(require("../../../../fabric/gamma/modals/form-sheet/FormSheetContentWrapperNativeComponent"));
var _FormSheetUtils = require("./FormSheetUtils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FormSheet(props) {
  const {
    children,
    detents,
    initialDetentIndex,
    largestUndimmedDetentIndex,
    preferredCornerRadius,
    nativeContainerStyle,
    ...rest
  } = props;
  const nativeCornerRadius = (0, _FormSheetUtils.resolveNativeCornerRadius)(preferredCornerRadius);
  const nativeDetents = (0, _FormSheetUtils.resolveNativeDetents)(detents);
  const detentsCount = nativeDetents?.length ?? 0;
  const resolvedInitialDetentIndex = (0, _FormSheetUtils.resolveInitialDetentIndex)(initialDetentIndex, detentsCount);
  const resolvedUndimmedDetentIndex = (0, _FormSheetUtils.resolveLargestUndimmedDetentIndex)(largestUndimmedDetentIndex, detentsCount);
  const isFitToContents = detents === 'fitToContents';
  return /*#__PURE__*/_react.default.createElement(_FormSheetHostNativeComponent.default, _extends({
    style: styles.host,
    detents: nativeDetents,
    initialDetentIndex: resolvedInitialDetentIndex,
    largestUndimmedDetentIndex: resolvedUndimmedDetentIndex,
    preferredCornerRadius: nativeCornerRadius,
    nativeContainerBackgroundColor: nativeContainerStyle?.backgroundColor
  }, rest), isFitToContents ? /*#__PURE__*/_react.default.createElement(_FormSheetContentWrapperNativeComponent.default, {
    style: styles.absoluteWithNoBottom
  }, children) : children);
}
const styles = _reactNative.StyleSheet.create({
  // We use absolute positioning so the Host view doesn't affect the layout of its siblings.
  // Setting `top: 0` and `left: 0` explicitly anchors the view to a predictable origin,
  // preventing it from floating at an arbitrary offset based on its position in the Element tree.
  //
  // IMPORTANT: "Absolute" positioning is still relative to the nearest positioned containing
  // box. This anchors it to that specific container's (0,0), not the global window (0,0).
  host: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  absoluteWithNoBottom: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});
//# sourceMappingURL=FormSheet.js.map