import type { CodegenTypes as CT, HostComponent, ViewProps, ColorValue } from 'react-native';
type FinishTransitioningEvent = Readonly<{}>;
export interface NativeProps extends ViewProps {
    nativeContainerBackgroundColor?: ColorValue | undefined;
    onFinishTransitioning?: CT.DirectEventHandler<FinishTransitioningEvent> | undefined;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=ScreenStackNativeComponent.d.ts.map