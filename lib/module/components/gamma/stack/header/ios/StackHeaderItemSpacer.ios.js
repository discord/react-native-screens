function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import StackHeaderItemSpacerIOSNativeComponent from '../../../../../fabric/gamma/stack/StackHeaderItemSpacerIOSNativeComponent';
import { StyleSheet } from 'react-native';
export default function StackHeaderItemSpacer(props) {
  return /*#__PURE__*/React.createElement(StackHeaderItemSpacerIOSNativeComponent, _extends({}, props, {
    style: styles.config
  }));
}
const styles = StyleSheet.create({
  config: {
    position: 'absolute',
    left: 0,
    top: 0
  }
});
//# sourceMappingURL=StackHeaderItemSpacer.ios.js.map