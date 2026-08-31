import type { CodegenTypes as CT, ColorValue, HostComponent, ViewProps } from 'react-native';
type GenericEmptyEvent = Readonly<{}>;
type DetentChangedEvent = Readonly<{
    index: CT.Int32;
}>;
interface NativeProps extends ViewProps {
    isOpen?: CT.WithDefault<boolean, false>;
    detents?: CT.Double[] | undefined;
    prefersGrabberVisible?: CT.WithDefault<boolean, false>;
    preferredCornerRadius?: CT.WithDefault<CT.Float, -1.0>;
    largestUndimmedDetentIndex?: CT.WithDefault<CT.Int32, -1>;
    initialDetentIndex?: CT.WithDefault<CT.Int32, 0>;
    prefersScrollingExpandsWhenScrolledToEdge?: CT.WithDefault<boolean, true>;
    preventNativeDismiss?: CT.WithDefault<boolean, false>;
    nativeContainerBackgroundColor?: ColorValue | undefined;
    onWillAppear?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onDidAppear?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onWillDisappear?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onDidDisappear?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onDismiss?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onNativeDismiss?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onNativeDismissPrevented?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onDetentChanged?: CT.DirectEventHandler<DetentChangedEvent> | undefined;
    onSyncFlush?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=FormSheetHostNativeComponent.d.ts.map