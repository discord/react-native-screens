import type { CodegenTypes as CT, HostComponent, ViewProps } from 'react-native';
type ScrollEdgeEffect = 'automatic' | 'hard' | 'soft' | 'hidden';
interface NativeProps extends ViewProps {
    leftScrollEdgeEffect?: CT.WithDefault<ScrollEdgeEffect, 'automatic'>;
    topScrollEdgeEffect?: CT.WithDefault<ScrollEdgeEffect, 'automatic'>;
    rightScrollEdgeEffect?: CT.WithDefault<ScrollEdgeEffect, 'automatic'>;
    bottomScrollEdgeEffect?: CT.WithDefault<ScrollEdgeEffect, 'automatic'>;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=ScrollViewMarkerNativeComponent.d.ts.map