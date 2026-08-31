"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
var _reactNative = require("react-native");
var _SearchBarNativeComponent = _interopRequireWildcard(require("../fabric/SearchBarNativeComponent"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // Native components
function SearchBar(props) {
  const searchBarRef = _react.default.useRef(null);
  _react.default.useImperativeHandle(props.ref, () => ({
    blur: () => {
      _callWithNativeInstance(instance => _SearchBarNativeComponent.Commands.blur(instance));
    },
    focus: () => {
      _callWithNativeInstance(instance => _SearchBarNativeComponent.Commands.focus(instance));
    },
    toggleCancelButton: flag => {
      _callWithNativeInstance(instance => _SearchBarNativeComponent.Commands.toggleCancelButton(instance, flag));
    },
    clearText: () => {
      _callWithNativeInstance(instance => _SearchBarNativeComponent.Commands.clearText(instance));
    },
    setText: text => {
      _callWithNativeInstance(instance => _SearchBarNativeComponent.Commands.setText(instance, text));
    },
    cancelSearch: () => {
      _callWithNativeInstance(instance => _SearchBarNativeComponent.Commands.cancelSearch(instance));
    }
  }));
  const _callWithNativeInstance = _react.default.useCallback(command => {
    const instance = searchBarRef.current;
    if (instance) {
      command(instance);
    } else {
      console.warn('Reference to native search bar component has not been updated yet');
    }
  }, [searchBarRef]);
  if (!_utils.isSearchBarAvailableForCurrentPlatform) {
    console.warn('Importing SearchBar is only valid on iOS and Android devices.');
    return _reactNative.View;
  }
  const {
    obscureBackground,
    hideNavigationBar,
    onFocus,
    onBlur,
    onSearchButtonPress,
    onCancelButtonPress,
    onChangeText,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref,
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(_SearchBarNativeComponent.default, _extends({
    ref: searchBarRef
  }, rest, {
    obscureBackground: (0, _utils.parseBooleanToOptionalBooleanNativeProp)(obscureBackground),
    hideNavigationBar: (0, _utils.parseBooleanToOptionalBooleanNativeProp)(hideNavigationBar),
    onSearchFocus: onFocus,
    onSearchBlur: onBlur,
    onSearchButtonPress: onSearchButtonPress,
    onCancelButtonPress: onCancelButtonPress,
    onChangeText: onChangeText
  }));
}
var _default = exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map