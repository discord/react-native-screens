"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _TabsHostAndroidNativeComponent = _interopRequireDefault(require("../../../fabric/tabs/TabsHostAndroidNativeComponent"));
var _private = require("../../../private");
var _useTabsHost = require("./useTabsHost");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TabsHost(props) {
  _private.RNSLog.log(`TabsHost render`);

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
  const componentNodeRef = _react.default.useRef(null);
  const {
    onTabSelected: onTabSelectedCallback
  } = (0, _useTabsHost.useTabsHost)({
    componentNodeRef,
    onTabSelected
  });
  return /*#__PURE__*/_react.default.createElement(_TabsHostAndroidNativeComponent.default, _extends({
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
var _default = exports.default = TabsHost;
const styles = _reactNative.StyleSheet.create({
  fillParent: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
//# sourceMappingURL=TabsHost.android.js.map