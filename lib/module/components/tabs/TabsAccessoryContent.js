function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { StyleSheet } from 'react-native';
import TabsBottomAccessoryContentNativeComponent from '../../fabric/tabs/TabsBottomAccessoryContentNativeComponent';

/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
export default function TabsAccessoryContent(props) {
  return /*#__PURE__*/React.createElement(TabsBottomAccessoryContentNativeComponent, _extends({}, props, {
    collapsable: false,
    style: [props.style, StyleSheet.absoluteFill]
  }));
}
//# sourceMappingURL=TabsAccessoryContent.js.map