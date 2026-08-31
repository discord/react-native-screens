'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { StyleSheet } from 'react-native';
import TabsHostIOSNativeComponent from '../../../fabric/tabs/TabsHostIOSNativeComponent';
import { RNSLog } from '../../../private';
import TabsBottomAccessory from '../bottom-accessory/TabsBottomAccessory';
import TabsBottomAccessoryContent from '../bottom-accessory/TabsBottomAccessoryContent';
import { isIOS26OrHigher } from '../../helpers/PlatformUtils';
import { useTabsHost } from './useTabsHost';
function TabsHost(props) {
  RNSLog.log(`TabsHost render`);

  // android props are safely dropped
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    ios,
    android,
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
  return /*#__PURE__*/React.createElement(TabsHostIOSNativeComponent, _extends({
    style: styles.fillParent,
    navStateRequest: navStateRequest,
    onTabSelected: onTabSelectedCallback,
    nativeContainerBackgroundColor: nativeContainerStyle?.backgroundColor
    // @ts-ignore suppress ref - debug only
    ,
    ref: componentNodeRef
  }, filteredBaseProps, {
    // iOS-specific
    layoutDirection: direction,
    tabBarControllerMode: ios?.tabBarControllerMode,
    tabBarMinimizeBehavior: ios?.tabBarMinimizeBehavior,
    tabBarTintColor: ios?.tabBarTintColor,
    bottomAccessoryHidden: ios?.bottomAccessoryHidden,
    onMoreTabSelected: ios?.onMoreTabSelected
  }), children, ios?.bottomAccessory && isIOS26OrHigher && /*#__PURE__*/React.createElement(TabsBottomAccessory, null, /*#__PURE__*/React.createElement(TabsBottomAccessoryContent, {
    environment: "regular"
  }, ios.bottomAccessory('regular')), /*#__PURE__*/React.createElement(TabsBottomAccessoryContent, {
    environment: "inline"
  }, ios.bottomAccessory('inline'))));
}
export default TabsHost;
const styles = StyleSheet.create({
  fillParent: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
//# sourceMappingURL=TabsHost.ios.js.map