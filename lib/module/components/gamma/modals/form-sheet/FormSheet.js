function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { StyleSheet } from 'react-native';
import FormSheetHostNativeComponent from '../../../../fabric/gamma/modals/form-sheet/FormSheetHostNativeComponent';
import FormSheetContentWrapperNativeComponent from '../../../../fabric/gamma/modals/form-sheet/FormSheetContentWrapperNativeComponent';
import { resolveInitialDetentIndex, resolveLargestUndimmedDetentIndex, resolveNativeCornerRadius, resolveNativeDetents } from './FormSheetUtils';
export function FormSheet(props) {
  const {
    children,
    detents,
    initialDetentIndex,
    largestUndimmedDetentIndex,
    preferredCornerRadius,
    nativeContainerStyle,
    ...rest
  } = props;
  const nativeCornerRadius = resolveNativeCornerRadius(preferredCornerRadius);
  const nativeDetents = resolveNativeDetents(detents);
  const detentsCount = nativeDetents?.length ?? 0;
  const resolvedInitialDetentIndex = resolveInitialDetentIndex(initialDetentIndex, detentsCount);
  const resolvedUndimmedDetentIndex = resolveLargestUndimmedDetentIndex(largestUndimmedDetentIndex, detentsCount);
  const isFitToContents = detents === 'fitToContents';
  return /*#__PURE__*/React.createElement(FormSheetHostNativeComponent, _extends({
    style: styles.host,
    detents: nativeDetents,
    initialDetentIndex: resolvedInitialDetentIndex,
    largestUndimmedDetentIndex: resolvedUndimmedDetentIndex,
    preferredCornerRadius: nativeCornerRadius,
    nativeContainerBackgroundColor: nativeContainerStyle?.backgroundColor
  }, rest), isFitToContents ? /*#__PURE__*/React.createElement(FormSheetContentWrapperNativeComponent, {
    style: styles.absoluteWithNoBottom
  }, children) : children);
}
const styles = StyleSheet.create({
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