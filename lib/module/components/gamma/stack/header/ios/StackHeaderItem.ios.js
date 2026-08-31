function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useCallback, useMemo } from 'react';
import StackHeaderItemIOSNativeComponent from '../../../../../fabric/gamma/stack/StackHeaderItemIOSNativeComponent';
import { StyleSheet } from 'react-native';
import { resolveIconAssetSources } from './iconUtils.ios';
function resolveMenuElementIcons(element) {
  if (element.type === 'menuItem') {
    if (element.icon == null) {
      return element;
    }
    return {
      ...element,
      icon: resolveIconAssetSources(element.icon)
    };
  }
  return resolveMenuIcons(element);
}
function resolveMenuIcons(menu) {
  const resolvedIcon = resolveIconAssetSources(menu.icon);
  const resolvedChildren = menu.children.map(resolveMenuElementIcons);
  return {
    ...menu,
    icon: resolvedIcon,
    children: resolvedChildren
  };
}
export default function StackHeaderItem(props) {
  const {
    render,
    onPress,
    icon,
    menu,
    ...rest
  } = props;

  // `rest.menu` includes some JS callback within nested menu specification
  // codegen strips JS functions and replaces them with NULLT and keys of such type
  // are omitted inside RNSConvertFollyDynamicToId so we can safely pass `rest.menu` as-is

  const handlePress = useCallback(_event => {
    onPress?.();
  }, [onPress]);
  const resolvedIcon = useMemo(() => resolveIconAssetSources(icon), [icon]);
  const resolvedMenu = useMemo(() => menu != null ? resolveMenuIcons(menu) : undefined, [menu]);
  return /*#__PURE__*/React.createElement(StackHeaderItemIOSNativeComponent, _extends({}, rest, {
    icon: resolvedIcon,
    menu: resolvedMenu
    // We need to tell iOS that we want the handler to be attached only when we actually require it
    // because doing so makes the menu appear on long press instead of tap
    ,
    respondsToOnPress: !!onPress,
    onHeaderItemPress: handlePress,
    style: styles.config
  }), render?.());
}
const styles = StyleSheet.create({
  config: {
    position: 'absolute',
    left: 0,
    top: 0
  }
});
//# sourceMappingURL=StackHeaderItem.ios.js.map