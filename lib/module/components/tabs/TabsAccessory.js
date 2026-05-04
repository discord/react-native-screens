function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import TabsBottomAccessoryNativeComponent from '../../fabric/tabs/TabsBottomAccessoryNativeComponent';
import { StyleSheet } from 'react-native';

/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
export default function TabsAccessory(props) {
  return /*#__PURE__*/React.createElement(TabsBottomAccessoryNativeComponent, _extends({}, props, {
    collapsable: false,
    style: [props.style, StyleSheet.absoluteFill]
  }));
}
//# sourceMappingURL=TabsAccessory.js.map