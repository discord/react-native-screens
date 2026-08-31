'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { StyleSheet, processColor } from 'react-native';
import TabsScreenIOSNativeComponent from '../../../fabric/tabs/TabsScreenIOSNativeComponent';
import { useTabsScreen } from './useTabsScreen';
function TabsScreen(props) {
  // android props are safely dropped
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    ios,
    android,
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
  const iconProps = parseIconsToNativeProps(ios?.icon, ios?.selectedIcon);
  return /*#__PURE__*/React.createElement(TabsScreenIOSNativeComponent, _extends({
    collapsable: false,
    style: [style, styles.fillParent]
    // @ts-ignore - This is debug only anyway
    ,
    ref: componentNodeRef
  }, lifecycleCallbacks, iconProps, filteredBaseProps, {
    // iOS-specific
    isTitleUndefined: baseProps.title === null || baseProps.title === undefined,
    standardAppearance: mapAppearanceToNativeProp(ios?.standardAppearance),
    scrollEdgeAppearance: mapAppearanceToNativeProp(ios?.scrollEdgeAppearance),
    userInterfaceStyle: ios?.experimental_userInterfaceStyle,
    systemItem: ios?.systemItem,
    overrideScrollViewContentInsetAdjustmentBehavior: ios?.overrideScrollViewContentInsetAdjustmentBehavior
  }), children);
}
function mapAppearanceToNativeProp(appearance) {
  if (!appearance) return undefined;
  const {
    stacked,
    inline,
    compactInline,
    tabBarBackgroundColor,
    tabBarShadowColor
  } = appearance;
  return {
    ...appearance,
    stacked: mapItemAppearanceToNativeProp(stacked),
    inline: mapItemAppearanceToNativeProp(inline),
    compactInline: mapItemAppearanceToNativeProp(compactInline),
    tabBarBackgroundColor: processColor(tabBarBackgroundColor),
    tabBarShadowColor: processColor(tabBarShadowColor)
  };
}
function mapItemAppearanceToNativeProp(itemAppearance) {
  if (!itemAppearance) return undefined;
  const {
    normal,
    selected,
    focused,
    disabled
  } = itemAppearance;
  return {
    ...itemAppearance,
    normal: mapItemStateAppearanceToNativeProp(normal),
    selected: mapItemStateAppearanceToNativeProp(selected),
    focused: mapItemStateAppearanceToNativeProp(focused),
    disabled: mapItemStateAppearanceToNativeProp(disabled)
  };
}
function mapItemStateAppearanceToNativeProp(itemStateAppearance) {
  if (!itemStateAppearance) return undefined;
  const {
    tabBarItemTitleFontColor,
    tabBarItemIconColor,
    tabBarItemBadgeBackgroundColor,
    tabBarItemTitleFontWeight
  } = itemStateAppearance;
  return {
    ...itemStateAppearance,
    tabBarItemTitleFontColor: processColor(tabBarItemTitleFontColor),
    tabBarItemIconColor: processColor(tabBarItemIconColor),
    tabBarItemBadgeBackgroundColor: processColor(tabBarItemBadgeBackgroundColor),
    tabBarItemTitleFontWeight: tabBarItemTitleFontWeight !== undefined ? String(tabBarItemTitleFontWeight) : undefined
  };
}
function parseIconsToNativeProps(icon, selectedIcon) {
  const parsedIcon = parseIconToNativeProps(icon);
  const parsedSelectedIcon = parseIconToNativeProps(selectedIcon);
  if (parsedIcon.iconType !== undefined && parsedSelectedIcon.iconType !== undefined && parsedIcon.iconType !== parsedSelectedIcon.iconType) {
    throw new Error('[RNScreens] icon and selectedIcon must be same type.');
  } else if (parsedIcon.iconType === undefined && parsedSelectedIcon.iconType !== undefined) {
    throw new Error('[RNScreens] To use selectedIcon prop, the icon prop must also be provided.');
  }
  return {
    iconType: parsedIcon.iconType,
    iconImageSource: parsedIcon.iconImageSource,
    iconResourceName: parsedIcon.iconResourceName,
    selectedIconImageSource: parsedSelectedIcon.iconImageSource,
    selectedIconResourceName: parsedSelectedIcon.iconResourceName
  };
}
function parseIconToNativeProps(icon) {
  if (!icon) {
    return {};
  }
  if (icon.type === 'sfSymbol') {
    return {
      iconType: 'sfSymbol',
      iconResourceName: icon.name
    };
  } else if (icon.type === 'imageSource') {
    return {
      iconType: 'image',
      iconImageSource: icon.imageSource
    };
  } else if (icon.type === 'templateSource') {
    return {
      iconType: 'template',
      iconImageSource: icon.templateSource
    };
  } else if (icon.type === 'xcasset') {
    return {
      iconType: 'xcasset',
      iconResourceName: icon.name
    };
  } else {
    throw new Error('[RNScreens] Incorrect icon format for iOS. You must provide `sfSymbol`, `imageSource`, `templateSource` or `xcasset`.');
  }
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
//# sourceMappingURL=TabsScreen.ios.js.map