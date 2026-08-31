"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _StackHeaderConfigAndroidNativeComponent = _interopRequireWildcard(require("../../../../fabric/gamma/stack/StackHeaderConfigAndroidNativeComponent"));
var _StackHeaderSubview = _interopRequireDefault(require("./android/StackHeaderSubview.android"));
var _shared = require("../../../shared");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
function StackHeaderConfig(props, forwardedRef) {
  // ios props are safely dropped
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    android,
    ios,
    ...baseProps
  } = props;
  const ref = useHeaderConfigRef(forwardedRef);
  const {
    backgroundSubview,
    leadingSubview,
    centerSubview,
    trailingSubview,
    backButtonIcon,
    scrollFlagScroll,
    scrollFlagEnterAlways,
    scrollFlagEnterAlwaysCollapsed,
    scrollFlagExitUntilCollapsed,
    scrollFlagSnap,
    toolbarMenu,
    toolbarMenuGroupDividerEnabled,
    ...filteredAndroidProps
  } = android ?? {};
  const parsedToolbarMenu = parseToolbarMenuToNativeProps(toolbarMenu);
  const handleToolbarMenuItemPress = event => {
    const element = findToolbarMenuElementById(toolbarMenu?.children, event.nativeEvent.id);
    if (element?.type === 'menuItem') {
      element.onPress?.();
    }
  };
  const handleToolbarMenuGroupSelectionChange = event => {
    const {
      groupId,
      selectedIds
    } = event.nativeEvent;
    const group = findToolbarMenuGroupById(toolbarMenu, groupId);
    group?.onSelectionChange?.(selectedIds);
  };
  const backButtonIconProps = parseBackButtonIconToNativeProps(backButtonIcon);
  const scrollFlagProps = resolveScrollFlags(filteredAndroidProps.type, {
    scrollFlagScroll,
    scrollFlagEnterAlways,
    scrollFlagEnterAlwaysCollapsed,
    scrollFlagExitUntilCollapsed,
    scrollFlagSnap
  });
  return /*#__PURE__*/_react.default.createElement(_StackHeaderConfigAndroidNativeComponent.default, _extends({
    ref: ref,
    collapsable: false,
    style: _reactNative.StyleSheet.absoluteFill,
    toolbarMenu: parsedToolbarMenu,
    toolbarMenuGroupDividerEnabled: toolbarMenuGroupDividerEnabled,
    onToolbarMenuItemPress: handleToolbarMenuItemPress,
    onToolbarMenuGroupSelectionChange: handleToolbarMenuGroupSelectionChange
  }, baseProps, filteredAndroidProps, backButtonIconProps, scrollFlagProps), backgroundSubview && /*#__PURE__*/_react.default.createElement(_StackHeaderSubview.default, {
    type: "background",
    collapseMode: backgroundSubview.collapseMode
  }, backgroundSubview.render()), leadingSubview && /*#__PURE__*/_react.default.createElement(_StackHeaderSubview.default, {
    type: "leading"
  }, leadingSubview.render()), centerSubview && /*#__PURE__*/_react.default.createElement(_StackHeaderSubview.default, {
    type: "center"
  }, centerSubview.render()), trailingSubview && /*#__PURE__*/_react.default.createElement(_StackHeaderSubview.default, {
    type: "trailing"
  }, trailingSubview.render()));
}
function parseBackButtonIconToNativeProps(icon) {
  if (!icon) {
    return {};
  }
  if (icon.type === 'imageSource') {
    const resolved = _reactNative.Image.resolveAssetSource(icon.imageSource);
    if (!resolved) {
      console.error('[RNScreens] failed to resolve an asset for back button icon');
    }
    return {
      backButtonImageIconResource: resolved || undefined
    };
  } else if (icon.type === 'drawableResource') {
    return {
      backButtonDrawableIconResourceName: icon.name
    };
  } else {
    throw new Error('[RNScreens] Incorrect icon format for Android. You must provide `imageSource` or `drawableResource`.');
  }
}
const SCROLL_FLAG_DEFAULTS_BY_TYPE = {
  small: {
    scrollFlagScroll: false,
    scrollFlagEnterAlways: false,
    scrollFlagEnterAlwaysCollapsed: false,
    scrollFlagExitUntilCollapsed: false,
    scrollFlagSnap: false
  },
  medium: {
    scrollFlagScroll: true,
    scrollFlagEnterAlways: false,
    scrollFlagEnterAlwaysCollapsed: false,
    scrollFlagExitUntilCollapsed: true,
    scrollFlagSnap: true
  },
  large: {
    scrollFlagScroll: true,
    scrollFlagEnterAlways: false,
    scrollFlagEnterAlwaysCollapsed: false,
    scrollFlagExitUntilCollapsed: true,
    scrollFlagSnap: true
  }
};
function resolveScrollFlags(type, overrides) {
  const defaults = SCROLL_FLAG_DEFAULTS_BY_TYPE[type ?? 'small'];
  return {
    scrollFlagScroll: overrides.scrollFlagScroll ?? defaults.scrollFlagScroll,
    scrollFlagEnterAlways: overrides.scrollFlagEnterAlways ?? defaults.scrollFlagEnterAlways,
    scrollFlagEnterAlwaysCollapsed: overrides.scrollFlagEnterAlwaysCollapsed ?? defaults.scrollFlagEnterAlwaysCollapsed,
    scrollFlagExitUntilCollapsed: overrides.scrollFlagExitUntilCollapsed ?? defaults.scrollFlagExitUntilCollapsed,
    scrollFlagSnap: overrides.scrollFlagSnap ?? defaults.scrollFlagSnap
  };
}
function useHeaderConfigRef(forwardedRef) {
  const ref = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(forwardedRef, () => ({
    android: {
      updateToolbarMenuElements: updates => {
        if (!ref.current) {
          console.warn('[RNScreens] Reference to native header config component has not been updated yet.');
          return;
        }
        const updatesArray = Array.isArray(updates) ? updates : [updates];
        const nativeUpdates = updatesArray.map(({
          id,
          options
        }) => ({
          id,
          ...parseToolbarMenuElementOptionsToNativeProps(options)
        }));
        _StackHeaderConfigAndroidNativeComponent.Commands.updateToolbarMenuElements(ref.current, nativeUpdates);
      }
    }
  }));
  return ref;
}
function findToolbarMenuGroupById(menu, groupId) {
  if (!menu) {
    return null;
  }
  for (const group of menu.groups ?? []) {
    if (group.groupId === groupId) {
      return group;
    }
  }
  for (const element of menu.children ?? []) {
    if (element.type === 'menu') {
      const found = findToolbarMenuGroupById(element, groupId);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
function findToolbarMenuElementById(elements, id) {
  if (!elements) {
    return null;
  }
  for (const element of elements) {
    if (element.id === id) {
      return element;
    }
    if (element.type === 'menu') {
      const found = findToolbarMenuElementById(element.children, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
function parseToolbarMenuToNativeProps(menu) {
  if (!menu?.children?.length) {
    return undefined;
  }
  assertUniqueItemIds(menu.children);
  assertUniqueGroupIds(menu);
  assertGroupIdReferencesExist(menu);
  assertRadioInitialSelection(menu);
  return {
    groups: parseGroupsToNativeProps(menu.groups),
    children: menu.children.map(parseElementToNativeProps)
  };
}
function parseGroupsToNativeProps(groups) {
  if (!groups?.length) {
    return undefined;
  }
  return groups.map(({
    groupId,
    singleSelection
  }) => ({
    groupId,
    singleSelection
  }));
}
function parseElementToNativeProps(element) {
  if (element.type === 'menu') {
    const {
      type,
      children,
      groups,
      ...baseProps
    } = element;
    return {
      type,
      ...parseBaseItemToNativeProps(baseProps),
      groups: parseGroupsToNativeProps(groups),
      children: children?.map(parseElementToNativeProps)
    };
  }
  assertItemTypeGroupIdConsistency(element);
  assertNoOnPressOnToggleItem(element);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    type,
    onPress,
    groupId,
    itemType,
    initialToggleState,
    ...baseProps
  } = element;
  return {
    type,
    groupId,
    itemType,
    initialToggleState,
    ...parseBaseItemToNativeProps(baseProps)
  };
}
function assertUniqueItemIds(elements, seen = new Set()) {
  for (const element of elements) {
    if (seen.has(element.id)) {
      throw new Error(`[RNScreens] Duplicate toolbar menu item id: '${element.id}'. ` + `Item IDs must be unique across the entire menu.`);
    }
    seen.add(element.id);
    if (element.type === 'menu' && element.children) {
      assertUniqueItemIds(element.children, seen);
    }
  }
}
function assertUniqueGroupIds(menu, seen = new Set()) {
  if (menu.groups) {
    for (const group of menu.groups) {
      if (seen.has(group.groupId)) {
        throw new Error(`[RNScreens] Duplicate toolbar menu group id: '${group.groupId}'. ` + `Group IDs must be unique across the entire menu.`);
      }
      seen.add(group.groupId);
    }
  }
  if (menu.children) {
    for (const element of menu.children) {
      if (element.type === 'menu') {
        assertUniqueGroupIds(element, seen);
      }
    }
  }
}
function assertGroupIdReferencesExist(menu) {
  const localGroupIds = new Set(menu.groups?.map(g => g.groupId));
  if (menu.children) {
    for (const element of menu.children) {
      if (element.type === 'menuItem' && element.groupId != null) {
        if (!localGroupIds.has(element.groupId)) {
          throw new Error(`[RNScreens] Menu item '${element.id}' references group ` + `'${element.groupId}' which is not defined at the same ` + `menu level. Groups cannot span submenus.`);
        }
      }
      if (element.type === 'menu') {
        assertGroupIdReferencesExist(element);
      }
    }
  }
}
function assertRadioInitialSelection(menu) {
  if (menu.groups && menu.children) {
    for (const group of menu.groups) {
      if (!group.singleSelection) {
        continue;
      }
      let count = 0;
      for (const element of menu.children) {
        if (element.type === 'menuItem' && element.groupId === group.groupId && element.initialToggleState) {
          count++;
        }
      }
      if (count > 1) {
        throw new Error(`[RNScreens] Radio group '${group.groupId}' has ${count} items ` + `with initialToggleState=true. At most 1 is allowed for ` + `single-selection groups.`);
      }
    }
  }
  if (menu.children) {
    for (const element of menu.children) {
      if (element.type === 'menu') {
        assertRadioInitialSelection(element);
      }
    }
  }
}
function assertItemTypeGroupIdConsistency(element) {
  if (element.itemType === 'toggle' && element.groupId == null) {
    throw new Error(`[RNScreens] Menu item '${element.id}' has itemType='toggle' ` + `but no groupId. Toggle items must belong to a group.`);
  }
  if (element.itemType === 'action' && element.groupId != null) {
    throw new Error(`[RNScreens] Menu item '${element.id}' has itemType='action' ` + `and belongs to group '${element.groupId}'. ` + `Action items cannot belong to groups.`);
  }
}
function assertNoOnPressOnToggleItem(element) {
  if (!element.onPress) {
    return;
  }
  const effectiveItemType = element.itemType ?? 'automatic';
  if (effectiveItemType === 'toggle') {
    throw new Error(`[RNScreens] Menu item '${element.id}' has itemType='toggle' and defines onPress. ` + `Toggle items do not emit press events. Use onSelectionChange on the group instead.`);
  }
  if (effectiveItemType === 'automatic' && element.groupId != null) {
    throw new Error(`[RNScreens] Menu item '${element.id}' belongs to group '${element.groupId}' ` + `and defines onPress. Items in a group behave as toggles and do not emit press events. ` + `Use onSelectionChange on the group instead.`);
  }
}
function parseBaseItemToNativeProps({
  icon,
  iconTintColorNormal,
  iconTintColorPressed,
  iconTintColorFocused,
  iconTintColorDisabled,
  ...rest
}) {
  return {
    ...rest,
    ...(0, _shared.parseAndroidIconToNativeProps)(icon),
    iconTintColorNormal: (0, _reactNative.processColor)(iconTintColorNormal),
    iconTintColorPressed: (0, _reactNative.processColor)(iconTintColorPressed),
    iconTintColorFocused: (0, _reactNative.processColor)(iconTintColorFocused),
    iconTintColorDisabled: (0, _reactNative.processColor)(iconTintColorDisabled)
  };
}
function parseToolbarMenuElementOptionsToNativeProps(options) {
  const nativeOptions = Object.fromEntries(Object.entries(options).flatMap(([key, value]) => {
    const typedKey = key;
    switch (typedKey) {
      case 'iconTintColorNormal':
      case 'iconTintColorPressed':
      case 'iconTintColorFocused':
      case 'iconTintColorDisabled':
        return [[key, (0, _reactNative.processColor)(value) ?? null]];
      case 'icon':
        {
          const iconValue = value;

          // Explicit `undefined` means "reset the icon". The native side treats
          // an absent key as "no change", so to clear the icon we must send every
          // native icon key explicitly as `null`.
          if (iconValue === undefined) {
            const noIcon = {
              imageIconResource: null,
              drawableIconResourceName: null
            };
            return Object.entries(noIcon);
          }
          return Object.entries((0, _shared.parseAndroidIconToNativeProps)(iconValue));
        }
    }
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      throw new Error(`[RNScreens] Unexpected nested object.`);
    }
    return [[key,
    // We need to replace explicit `undefined` with `null`
    // so that we're able to read that information on the native side.
    value === undefined ? null : value]];
  }));
  return nativeOptions;
}
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(StackHeaderConfig);
//# sourceMappingURL=StackHeaderConfig.android.js.map