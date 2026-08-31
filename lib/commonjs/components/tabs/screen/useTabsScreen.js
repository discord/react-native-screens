"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTabsScreen = useTabsScreen;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _private = require("../../../private");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function useTabsScreen({
  componentNodeRef,
  onDidAppear,
  onDidDisappear,
  onWillAppear,
  onWillDisappear,
  screenKey
}) {
  const componentNodeHandle = _react.default.useRef(-1);
  _react.default.useEffect(() => {
    if (componentNodeRef.current != null) {
      componentNodeHandle.current = (0, _reactNative.findNodeHandle)(componentNodeRef.current) ?? -1;
    } else {
      componentNodeHandle.current = -1;
    }
  }, []);
  const onWillAppearCallback = _react.default.useCallback(event => {
    _private.RNSLog.log(`TabsScreen [${componentNodeHandle.current}] onWillAppear received`);
    onWillAppear?.(event);
  }, [onWillAppear]);
  const onDidAppearCallback = _react.default.useCallback(event => {
    _private.RNSLog.log(`TabsScreen [${componentNodeHandle.current}] onDidAppear received`);
    onDidAppear?.(event);
  }, [onDidAppear]);
  const onWillDisappearCallback = _react.default.useCallback(event => {
    _private.RNSLog.log(`TabsScreen [${componentNodeHandle.current}] onWillDisappear received`);
    onWillDisappear?.(event);
  }, [onWillDisappear]);
  const onDidDisappearCallback = _react.default.useCallback(event => {
    _private.RNSLog.log(`TabsScreen [${componentNodeHandle.current}] onDidDisappear received`);
    onDidDisappear?.(event);
  }, [onDidDisappear]);
  _private.RNSLog.log(`TabsScreen [${componentNodeHandle.current ?? -1}] render; screenKey: ${screenKey}`);
  return {
    componentNodeRef,
    lifecycleCallbacks: {
      onWillAppear: onWillAppearCallback,
      onDidAppear: onDidAppearCallback,
      onWillDisappear: onWillDisappearCallback,
      onDidDisappear: onDidDisappearCallback
    }
  };
}
//# sourceMappingURL=useTabsScreen.js.map