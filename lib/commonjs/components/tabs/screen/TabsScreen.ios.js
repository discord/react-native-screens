"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _TabsScreenIOSNativeComponent = _interopRequireDefault(require("../../../fabric/tabs/TabsScreenIOSNativeComponent"));
var _useTabsScreen = require("./useTabsScreen");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TabsScreen(props) {
  // android props are safely dropped
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    ios,
    android,
    ...baseProps
  } = props;
  const componentNodeRef = _react.default.useRef(null);
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
  } = (0, _useTabsScreen.useTabsScreen)({
    componentNodeRef,
    onDidAppear,
    onDidDisappear,
    onWillAppear,
    onWillDisappear,
    screenKey: filteredBaseProps.screenKey
  });
  const iconProps = parseIconsToNativeProps(ios?.icon, ios?.selectedIcon);
  return /*#__PURE__*/_react.default.createElement(_TabsScreenIOSNativeComponent.default, _extends({
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
    tabBarBackgroundColor: (0, _reactNative.processColor)(tabBarBackgroundColor),
    tabBarShadowColor: (0, _reactNative.processColor)(tabBarShadowColor)
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
    tabBarItemTitleFontColor: (0, _reactNative.processColor)(tabBarItemTitleFontColor),
    tabBarItemIconColor: (0, _reactNative.processColor)(tabBarItemIconColor),
    tabBarItemBadgeBackgroundColor: (0, _reactNative.processColor)(tabBarItemBadgeBackgroundColor),
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
var _default = exports.default = TabsScreen;
const styles = _reactNative.StyleSheet.create({
  fillParent: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
//# sourceMappingURL=TabsScreen.ios.js.map