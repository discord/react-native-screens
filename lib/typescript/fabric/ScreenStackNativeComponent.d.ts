import type { CodegenTypes as CT, ViewProps } from 'react-native';
type FinishTransitioningEvent = Readonly<{}>;
export interface NativeProps extends ViewProps {
    iosPreventReattachmentOfDismissedScreens?: CT.WithDefault<boolean, false>;
    onFinishTransitioning?: CT.DirectEventHandler<FinishTransitioningEvent>;
}
declare const _default: import("react-native").HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=ScreenStackNativeComponent.d.ts.map