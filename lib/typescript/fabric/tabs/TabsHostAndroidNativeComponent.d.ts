import type { CodegenTypes as CT, ColorValue, HostComponent, ViewProps } from 'react-native';
type TabSelectedEvent = {
    selectedScreenKey: string;
    provenance: CT.Int32;
    isRepeated: boolean;
    hasTriggeredSpecialEffect: boolean;
    actionOrigin: 'user' | 'programmatic-js' | 'programmatic-native' | 'implicit';
};
type NavigationStateRequest = {
    selectedScreenKey: string;
    baseProvenance: CT.Int32;
};
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
type TabsHostColorScheme = 'inherit' | 'light' | 'dark';
export interface NativeProps extends ViewProps {
    navStateRequest: NavigationStateRequest;
    rejectStaleNavStateUpdates?: CT.WithDefault<boolean, false>;
    onTabSelected?: CT.DirectEventHandler<TabSelectedEvent> | undefined;
    onTabSelectionRejected?: CT.DirectEventHandler<TabSelectionRejectedEvent> | undefined;
    onTabSelectionPrevented?: CT.DirectEventHandler<TabSelectionPreventedEvent> | undefined;
    tabBarHidden?: CT.WithDefault<boolean, false>;
    nativeContainerBackgroundColor?: ColorValue | undefined;
    colorScheme?: CT.WithDefault<TabsHostColorScheme, 'inherit'>;
    tabBarRespectsIMEInsets?: CT.WithDefault<boolean, false>;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=TabsHostAndroidNativeComponent.d.ts.map