"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTabsHost = useTabsHost;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _private = require("../../../private");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function useTabsHost({
  componentNodeRef,
  onTabSelected
}) {
  const componentNodeHandle = _react.default.useRef(-1);
  _react.default.useEffect(() => {
    if (componentNodeRef.current != null) {
      componentNodeHandle.current = (0, _reactNative.findNodeHandle)(componentNodeRef.current) ?? -1;
    } else {
      componentNodeHandle.current = -1;
    }
  }, []);
  const onTabSelectedCallback = _react.default.useCallback(event => {
    _private.RNSLog.log(`TabsHost [${componentNodeHandle.current ?? -1}] onTabSelected: ${JSON.stringify(event.nativeEvent)}`);
    onTabSelected?.(event);
  }, [onTabSelected]);
  return {
    onTabSelected: onTabSelectedCallback
  };
}
//# sourceMappingURL=useTabsHost.js.map