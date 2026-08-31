"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StackHeaderConfigIOSNativeComponent = _interopRequireWildcard(require("../../../../fabric/gamma/stack/StackHeaderConfigIOSNativeComponent"));
var _StackHeaderItemSpacer = _interopRequireDefault(require("./ios/StackHeaderItemSpacer.ios"));
var _StackHeaderItem = _interopRequireDefault(require("./ios/StackHeaderItem.ios"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _iconUtils = require("./ios/iconUtils.ios");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
function StackHeaderConfig(props, forwardedRef) {
  // android props are safely dropped
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    ios,
    android,
    ...restProps
  } = props;
  const {
    leadingItems,
    trailingItems,
    titleItem,
    subtitleItem,
    largeSubtitleItem,
    largeTitle,
    largeSubtitle,
    largeTitleEnabled
  } = ios ?? {};
  const nativeRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(forwardedRef, () => ({
    ios: {
      setMenuItemOptions: (menuElementId, options) => {
        if (!nativeRef.current) {
          console.warn('[RNScreens] Reference to native header config component has not been updated yet.');
          return;
        }
        _StackHeaderConfigIOSNativeComponent.Commands.setMenuItemOptions(nativeRef.current, menuElementId, parseMenuElementOptionsToNative(options));
      },
      setMenuOptions: (menuElementId, options) => {
        if (!nativeRef.current) {
          console.warn('[RNScreens] Reference to native header config component has not been updated yet.');
          return;
        }
        _StackHeaderConfigIOSNativeComponent.Commands.setMenuOptions(nativeRef.current, menuElementId, parseMenuElementOptionsToNative(options));
      }
    }
  }));
  const handleMenuItemPress = (0, _react.useCallback)(event => {
    const items = Array.of(...(leadingItems ?? []).filter(it => it && it.type === 'item'), ...(trailingItems ?? []).filter(it => it && it.type === 'item'));
    const menuElement = (0, _utils.findMenuElementByIdInItems)(items, event.nativeEvent.menuItemId);
    if (menuElement && menuElement.type === 'menuItem') {
      menuElement.onPress?.();
    }
  }, [leadingItems, trailingItems]);
  const allMenuItems = [...(leadingItems ?? []), ...(trailingItems ?? [])].filter(it => it && it.type === 'item');
  const handleSelectionChange = (0, _react.useCallback)(event => {
    const {
      menuId,
      selectedMenuItemIds
    } = event.nativeEvent;
    const menu = (0, _utils.findMenuElementByIdInItems)(allMenuItems, menuId);
    if (menu && menu.type === 'menu') {
      menu.onSelectionChange?.(selectedMenuItemIds);
    }
  }, [allMenuItems]);
  (0, _react.useEffect)(() => {
    for (const item of allMenuItems) {
      if ('menu' in item && item.menu) {
        (0, _utils.validateMenuCallbacks)(item.menu);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadingItems, trailingItems]);
  return /*#__PURE__*/_react.default.createElement(_StackHeaderConfigIOSNativeComponent.default, _extends({
    ref: nativeRef
  }, restProps, {
    collapsable: false,
    largeTitle: largeTitle,
    largeSubtitle: largeSubtitle,
    largeTitleEnabled: !!largeTitleEnabled,
    style: styles.config,
    onMenuItemPress: handleMenuItemPress,
    onMenuSelectionChange: handleSelectionChange
  }), leadingItems?.map(item => makeItemViewFromItem(item, 'leading')), titleItem && makeItemViewFromItem(titleItem, 'title'), subtitleItem && makeItemViewFromItem(subtitleItem, 'subtitle'), largeSubtitleItem && makeItemViewFromItem(largeSubtitleItem, 'largeSubtitle'), trailingItems?.map(item => makeItemViewFromItem(item, 'trailing')));
}
function makeItemViewFromItem(item, placement) {
  if ('type' in item && item.type === 'spacer') {
    const {
      id,
      ...rest
    } = item;
    if (!(placement === 'leading' || placement === 'trailing')) {
      console.warn(`[Stack] Invalid placement for spacer: "${placement}", defaulting to "trailing"`);
      placement = 'trailing';
    }
    return /*#__PURE__*/_react.default.createElement(_StackHeaderItemSpacer.default, _extends({
      key: id,
      placement: placement
    }, rest));
  }
  const {
    id,
    ...rest
  } = item;
  return /*#__PURE__*/_react.default.createElement(_StackHeaderItem.default, _extends({
    key: id,
    itemId: id,
    placement: placement
  }, rest));
}
function parseMenuElementOptionsToNative(options) {
  const nativeOptions = Object.fromEntries(Object.entries(options).flatMap(([key, value]) => {
    const typedKey = key;
    switch (typedKey) {
      case 'icon':
        return [['icon', options.icon === undefined ? null : (0, _iconUtils.resolveIconAssetSources)(options.icon)]];
      default:
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          throw new Error(`[RNScreens] Unexpected nested object.`);
        }
        return [[key,
        // We need to replace explicit `undefined` with `null`
        // so that we're able to read that information on the native side.
        value === undefined ? null : value]];
    }
  }));

  // passing array here -- see android implementation
  return [nativeOptions];
}
const styles = _reactNative.StyleSheet.create({
  config: {
    position: 'absolute',
    left: 0,
    top: 0
  }
});
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(StackHeaderConfig);
//# sourceMappingURL=StackHeaderConfig.ios.js.map