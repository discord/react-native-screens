function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Image, processColor, StyleSheet } from 'react-native';
import StackHeaderConfigAndroidNativeComponent, { Commands as StackHeaderConfigAndroidNativeCommands } from '../../../../fabric/gamma/stack/StackHeaderConfigAndroidNativeComponent';
import StackHeaderSubview from './android/StackHeaderSubview.android';
import { parseAndroidIconToNativeProps } from '../../../shared';

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
  return /*#__PURE__*/React.createElement(StackHeaderConfigAndroidNativeComponent, _extends({
    ref: ref,
    collapsable: false,
    style: StyleSheet.absoluteFill,
    toolbarMenu: parsedToolbarMenu,
    toolbarMenuGroupDividerEnabled: toolbarMenuGroupDividerEnabled,
    onToolbarMenuItemPress: handleToolbarMenuItemPress,
    onToolbarMenuGroupSelectionChange: handleToolbarMenuGroupSelectionChange
  }, baseProps, filteredAndroidProps, backButtonIconProps, scrollFlagProps), backgroundSubview && /*#__PURE__*/React.createElement(StackHeaderSubview, {
    type: "background",
    collapseMode: backgroundSubview.collapseMode
  }, backgroundSubview.render()), leadingSubview && /*#__PURE__*/React.createElement(StackHeaderSubview, {
    type: "leading"
  }, leadingSubview.render()), centerSubview && /*#__PURE__*/React.createElement(StackHeaderSubview, {
    type: "center"
  }, centerSubview.render()), trailingSubview && /*#__PURE__*/React.createElement(StackHeaderSubview, {
    type: "trailing"
  }, trailingSubview.render()));
}
function parseBackButtonIconToNativeProps(icon) {
  if (!icon) {
    return {};
  }
  if (icon.type === 'imageSource') {
    const resolved = Image.resolveAssetSource(icon.imageSource);
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
  const ref = useRef(null);
  useImperativeHandle(forwardedRef, () => ({
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
        StackHeaderConfigAndroidNativeCommands.updateToolbarMenuElements(ref.current, nativeUpdates);
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
    ...parseAndroidIconToNativeProps(icon),
    iconTintColorNormal: processColor(iconTintColorNormal),
    iconTintColorPressed: processColor(iconTintColorPressed),
    iconTintColorFocused: processColor(iconTintColorFocused),
    iconTintColorDisabled: processColor(iconTintColorDisabled)
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
        return [[key, processColor(value) ?? null]];
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
          return Object.entries(parseAndroidIconToNativeProps(iconValue));
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
export default /*#__PURE__*/forwardRef(StackHeaderConfig);
//# sourceMappingURL=StackHeaderConfig.android.js.map