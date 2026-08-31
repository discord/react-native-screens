import type { CodegenTypes as CT, ColorValue, HostComponent, ViewProps } from 'react-native';
type TabSelectedEvent = Readonly<{
    selectedScreenKey: string;
    provenance: CT.Int32;
    isRepeated: boolean;
    hasTriggeredSpecialEffect: boolean;
    actionOrigin: 'user' | 'programmatic-js' | 'programmatic-native' | 'implicit';
}>;
type NavigationStateRequest = Readonly<{
    selectedScreenKey: string;
    baseProvenance: CT.Int32;
}>;
type TabSelectionRejectedEvent = Readonly<{
    selectedScreenKey: string;
    provenance: CT.Int32;
    rejectedScreenKey: string;
    rejectedBaseProvenance: CT.Int32;
    rejectionReason: 'stale' | 'repeated';
}>;
type TabSelectionPreventedEvent = Readonly<{
    selectedScreenKey: string;
    provenance: CT.Int32;
    preventedScreenKey: string;
}>;
type MoreTabSelectedEvent = Readonly<{
    selectedScreenKey: string;
    provenance: CT.Int32;
}>;
type TabsHostColorScheme = 'inherit' | 'light' | 'dark';
type LayoutDirection = 'inherit' | 'ltr' | 'rtl';
type TabBarMinimizeBehavior = 'automatic' | 'never' | 'onScrollDown' | 'onScrollUp';
type TabBarControllerMode = 'automatic' | 'tabBar' | 'tabSidebar';
export interface NativeProps extends ViewProps {
    navStateRequest: NavigationStateRequest;
    rejectStaleNavStateUpdates?: CT.WithDefault<boolean, false>;
    onTabSelected?: CT.DirectEventHandler<TabSelectedEvent> | undefined;
    onTabSelectionRejected?: CT.DirectEventHandler<TabSelectionRejectedEvent> | undefined;
    onTabSelectionPrevented?: CT.DirectEventHandler<TabSelectionPreventedEvent> | undefined;
    onMoreTabSelected?: CT.DirectEventHandler<MoreTabSelectedEvent> | undefined;
    tabBarHidden?: CT.WithDefault<boolean, false>;
    nativeContainerBackgroundColor?: ColorValue | undefined;
    colorScheme?: CT.WithDefault<TabsHostColorScheme, 'inherit'>;
    layoutDirection?: CT.WithDefault<LayoutDirection, 'inherit'>;
    tabBarTintColor?: ColorValue | undefined;
    tabBarMinimizeBehavior?: CT.WithDefault<TabBarMinimizeBehavior, 'automatic'>;
    tabBarControllerMode?: CT.WithDefault<TabBarControllerMode, 'automatic'>;
    bottomAccessoryHidden?: CT.WithDefault<boolean, false>;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=TabsHostIOSNativeComponent.d.ts.map