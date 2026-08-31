"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _TabsHostIOSNativeComponent = _interopRequireDefault(require("../../../fabric/tabs/TabsHostIOSNativeComponent"));
var _private = require("../../../private");
var _TabsBottomAccessory = _interopRequireDefault(require("../bottom-accessory/TabsBottomAccessory"));
var _TabsBottomAccessoryContent = _interopRequireDefault(require("../bottom-accessory/TabsBottomAccessoryContent"));
var _PlatformUtils = require("../../helpers/PlatformUtils");
var _useTabsHost = require("./useTabsHost");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TabsHost(props) {
  _private.RNSLog.log(`TabsHost render`);

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
  const componentNodeRef = _react.default.useRef(null);
  const {
    onTabSelected: onTabSelectedCallback
  } = (0, _useTabsHost.useTabsHost)({
    componentNodeRef,
    onTabSelected
  });
  return /*#__PURE__*/_react.default.createElement(_TabsHostIOSNativeComponent.default, _extends({
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
  }), children, ios?.bottomAccessory && _PlatformUtils.isIOS26OrHigher && /*#__PURE__*/_react.default.createElement(_TabsBottomAccessory.default, null, /*#__PURE__*/_react.default.createElement(_TabsBottomAccessoryContent.default, {
    environment: "regular"
  }, ios.bottomAccessory('regular')), /*#__PURE__*/_react.default.createElement(_TabsBottomAccessoryContent.default, {
    environment: "inline"
  }, ios.bottomAccessory('inline'))));
}
var _default = exports.default = TabsHost;
const styles = _reactNative.StyleSheet.create({
  fillParent: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
//# sourceMappingURL=TabsHost.ios.js.map