function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { StyleSheet } from 'react-native';
import StackHeaderSubviewAndroidNativeComponent from '../../../../../fabric/gamma/stack/StackHeaderSubviewAndroidNativeComponent';

/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
function StackHeaderSubview(props) {
  const {
    children,
    ...filteredProps
  } = props;
  return /*#__PURE__*/React.createElement(StackHeaderSubviewAndroidNativeComponent, _extends({
    collapsable: false,
    style: filteredProps.type === 'background' ? StyleSheet.absoluteFill : styles.absoluteStartTop
  }, filteredProps), children);
}
export default StackHeaderSubview;
const styles = StyleSheet.create({
  absoluteStartTop: {
    position: 'absolute',
    start: 0,
    top: 0
  }
});
//# sourceMappingURL=StackHeaderSubview.android.js.map