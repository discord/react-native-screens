'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { StyleSheet, processColor } from 'react-native';
import TabsScreenAndroidNativeComponent from '../../../fabric/tabs/TabsScreenAndroidNativeComponent';
import { useTabsScreen } from './useTabsScreen';
import { parseAndroidIconToNativeProps } from '../../shared';
function TabsScreen(props) {
  // ios props are safely dropped
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    android,
    ios,
    ...baseProps
  } = props;
  const componentNodeRef = React.useRef(null);
  const {
    onDidAppear,
    onDidDisappear,
    onWillAppear,
    onWillDisappear,
    children,
    style,
    ...filteredBaseProps
  } = baseProps;
  const {
    lifecycleCallbacks
  } = useTabsScreen({
    componentNodeRef,
    onDidAppear,
    onDidDisappear,
    onWillAppear,
    onWillDisappear,
    screenKey: filteredBaseProps.screenKey
  });
  const iconProps = parseIconsToNativeProps(android?.icon, android?.selectedIcon);
  return /*#__PURE__*/React.createElement(TabsScreenAndroidNativeComponent, _extends({
    collapsable: false,
    style: [style, styles.fillParent]
    // @ts-ignore - This is debug only anyway
    ,
    ref: componentNodeRef
  }, lifecycleCallbacks, iconProps, filteredBaseProps, {
    // Android-specific
    standardAppearance: mapAppearanceToNativeProps(android?.standardAppearance)
  }), children);
}
function mapAppearanceToNativeProps(appearance) {
  if (!appearance) return undefined;
  const {
    tabBarBackgroundColor,
    tabBarItemRippleColor,
    normal,
    selected,
    focused,
    disabled,
    tabBarItemActiveIndicatorColor,
    tabBarItemTitleFontWeight,
    tabBarItemBadgeBackgroundColor,
    tabBarItemBadgeTextColor,
    ...rest
  } = appearance;
  return {
    ...rest,
    tabBarBackgroundColor: processColor(tabBarBackgroundColor),
    tabBarItemRippleColor: processColor(tabBarItemRippleColor),
    normal: mapItemStateAppearanceToNativeProp(normal),
    selected: mapItemStateAppearanceToNativeProp(selected),
    focused: mapItemStateAppearanceToNativeProp(focused),
    disabled: mapItemStateAppearanceToNativeProp(disabled),
    tabBarItemActiveIndicatorColor: processColor(tabBarItemActiveIndicatorColor),
    tabBarItemTitleFontWeight: tabBarItemTitleFontWeight !== undefined ? String(tabBarItemTitleFontWeight) : undefined,
    tabBarItemBadgeBackgroundColor: processColor(tabBarItemBadgeBackgroundColor),
    tabBarItemBadgeTextColor: processColor(tabBarItemBadgeTextColor)
  };
}
function mapItemStateAppearanceToNativeProp(itemStateAppearance) {
  if (!itemStateAppearance) return undefined;
  const {
    tabBarItemTitleFontColor,
    tabBarItemIconColor,
    ...rest
  } = itemStateAppearance;
  return {
    ...rest,
    tabBarItemTitleFontColor: processColor(tabBarItemTitleFontColor),
    tabBarItemIconColor: processColor(tabBarItemIconColor)
  };
}
function parseIconsToNativeProps(icon, selectedIcon) {
  const parsedIcon = parseAndroidIconToNativeProps(icon);
  const parsedSelectedIcon = parseAndroidIconToNativeProps(selectedIcon);
  return {
    imageIconResource: parsedIcon.imageIconResource,
    drawableIconResourceName: parsedIcon.drawableIconResourceName,
    selectedImageIconResource: parsedSelectedIcon.imageIconResource,
    selectedDrawableIconResourceName: parsedSelectedIcon.drawableIconResourceName
  };
}
export default TabsScreen;
const styles = StyleSheet.create({
  fillParent: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
//# sourceMappingURL=TabsScreen.android.js.map