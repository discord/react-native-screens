import type { CodegenTypes as CT, HostComponent, ViewProps } from 'react-native';
type SpacerSize = 'fixed' | 'flexible';
type Placement = 'leading' | 'trailing';
export interface NativeProps extends ViewProps {
    placement?: CT.WithDefault<Placement, 'trailing'>;
    sizing?: CT.WithDefault<SpacerSize, 'flexible'>;
    width?: CT.Float | undefined;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=StackHeaderItemSpacerIOSNativeComponent.d.ts.map