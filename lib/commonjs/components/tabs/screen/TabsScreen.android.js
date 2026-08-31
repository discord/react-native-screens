"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _TabsScreenAndroidNativeComponent = _interopRequireDefault(require("../../../fabric/tabs/TabsScreenAndroidNativeComponent"));
var _useTabsScreen = require("./useTabsScreen");
var _shared = require("../../shared");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TabsScreen(props) {
  // ios props are safely dropped
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    android,
    ios,
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
  const iconProps = parseIconsToNativeProps(android?.icon, android?.selectedIcon);
  return /*#__PURE__*/_react.default.createElement(_TabsScreenAndroidNativeComponent.default, _extends({
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
    tabBarBackgroundColor: (0, _reactNative.processColor)(tabBarBackgroundColor),
    tabBarItemRippleColor: (0, _reactNative.processColor)(tabBarItemRippleColor),
    normal: mapItemStateAppearanceToNativeProp(normal),
    selected: mapItemStateAppearanceToNativeProp(selected),
    focused: mapItemStateAppearanceToNativeProp(focused),
    disabled: mapItemStateAppearanceToNativeProp(disabled),
    tabBarItemActiveIndicatorColor: (0, _reactNative.processColor)(tabBarItemActiveIndicatorColor),
    tabBarItemTitleFontWeight: tabBarItemTitleFontWeight !== undefined ? String(tabBarItemTitleFontWeight) : undefined,
    tabBarItemBadgeBackgroundColor: (0, _reactNative.processColor)(tabBarItemBadgeBackgroundColor),
    tabBarItemBadgeTextColor: (0, _reactNative.processColor)(tabBarItemBadgeTextColor)
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
    tabBarItemTitleFontColor: (0, _reactNative.processColor)(tabBarItemTitleFontColor),
    tabBarItemIconColor: (0, _reactNative.processColor)(tabBarItemIconColor)
  };
}
function parseIconsToNativeProps(icon, selectedIcon) {
  const parsedIcon = (0, _shared.parseAndroidIconToNativeProps)(icon);
  const parsedSelectedIcon = (0, _shared.parseAndroidIconToNativeProps)(selectedIcon);
  return {
    imageIconResource: parsedIcon.imageIconResource,
    drawableIconResourceName: parsedIcon.drawableIconResourceName,
    selectedImageIconResource: parsedSelectedIcon.imageIconResource,
    selectedDrawableIconResourceName: parsedSelectedIcon.drawableIconResourceName
  };
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
//# sourceMappingURL=TabsScreen.android.js.map