'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { StyleSheet } from 'react-native';
import TabsHostAndroidNativeComponent from '../../../fabric/tabs/TabsHostAndroidNativeComponent';
import { RNSLog } from '../../../private';
import { useTabsHost } from './useTabsHost';
function TabsHost(props) {
  RNSLog.log(`TabsHost render`);

  // android props (even if unused for now) are extracted - these should be handled separately from base props
  // ios props are safely dropped
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    android,
    ios,
    ...baseProps
  } = props;
  const {
    children,
    direction,
    nativeContainerStyle,
    onTabSelected,
    navStateRequest,
    ...filteredBaseProps
  } = baseProps;
  const componentNodeRef = React.useRef(null);
  const {
    onTabSelected: onTabSelectedCallback
  } = useTabsHost({
    componentNodeRef,
    onTabSelected
  });
  return /*#__PURE__*/React.createElement(TabsHostAndroidNativeComponent, _extends({
    style: [styles.fillParent, {
      direction
    }],
    navStateRequest: navStateRequest,
    onTabSelected: onTabSelectedCallback,
    nativeContainerBackgroundColor: nativeContainerStyle?.backgroundColor
    // @ts-ignore suppress ref - debug only
    ,
    ref: componentNodeRef
  }, filteredBaseProps, {
    // Android-specific
    tabBarRespectsIMEInsets: android?.tabBarRespectsIMEInsets
  }), children);
}
export default TabsHost;
const styles = StyleSheet.create({
  fillParent: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
//# sourceMappingURL=TabsHost.android.js.map