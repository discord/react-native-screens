'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { parseBooleanToOptionalBooleanNativeProp, isSearchBarAvailableForCurrentPlatform } from '../utils';
import { View } from 'react-native';

// Native components
import SearchBarNativeComponent, { Commands as NativeSearchBarCommands } from '../fabric/SearchBarNativeComponent';
function SearchBar(props) {
  const searchBarRef = React.useRef(null);
  React.useImperativeHandle(props.ref, () => ({
    blur: () => {
      _callWithNativeInstance(instance => NativeSearchBarCommands.blur(instance));
    },
    focus: () => {
      _callWithNativeInstance(instance => NativeSearchBarCommands.focus(instance));
    },
    toggleCancelButton: flag => {
      _callWithNativeInstance(instance => NativeSearchBarCommands.toggleCancelButton(instance, flag));
    },
    clearText: () => {
      _callWithNativeInstance(instance => NativeSearchBarCommands.clearText(instance));
    },
    setText: text => {
      _callWithNativeInstance(instance => NativeSearchBarCommands.setText(instance, text));
    },
    cancelSearch: () => {
      _callWithNativeInstance(instance => NativeSearchBarCommands.cancelSearch(instance));
    }
  }));
  const _callWithNativeInstance = React.useCallback(command => {
    const instance = searchBarRef.current;
    if (instance) {
      command(instance);
    } else {
      console.warn('Reference to native search bar component has not been updated yet');
    }
  }, [searchBarRef]);
  if (!isSearchBarAvailableForCurrentPlatform) {
    console.warn('Importing SearchBar is only valid on iOS and Android devices.');
    return View;
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
  return /*#__PURE__*/React.createElement(SearchBarNativeComponent, _extends({
    ref: searchBarRef
  }, rest, {
    obscureBackground: parseBooleanToOptionalBooleanNativeProp(obscureBackground),
    hideNavigationBar: parseBooleanToOptionalBooleanNativeProp(hideNavigationBar),
    onSearchFocus: onFocus,
    onSearchBlur: onBlur,
    onSearchButtonPress: onSearchButtonPress,
    onCancelButtonPress: onCancelButtonPress,
    onChangeText: onChangeText
  }));
}
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map