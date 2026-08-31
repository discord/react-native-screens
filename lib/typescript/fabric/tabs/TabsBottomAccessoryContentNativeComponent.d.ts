import type { CodegenTypes as CT, HostComponent, ViewProps } from 'react-native';
type BottomAccessoryEnvironment = 'regular' | 'inline';
export interface NativeProps extends ViewProps {
    environment?: CT.WithDefault<BottomAccessoryEnvironment, 'regular'>;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=TabsBottomAccessoryContentNativeComponent.d.ts.map