import type { CodegenTypes as CT, HostComponent, ViewProps } from 'react-native';
type EnvironmentChangeEvent = {
    environment: 'regular' | 'inline';
};
export interface NativeProps extends ViewProps {
    onEnvironmentChange?: CT.DirectEventHandler<EnvironmentChangeEvent> | undefined;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=TabsBottomAccessoryNativeComponent.d.ts.map