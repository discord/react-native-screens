import type { CodegenTypes as CT, HostComponent, ViewProps } from 'react-native';
export type HeaderSubviewTypes = 'back' | 'right' | 'left' | 'title' | 'center' | 'searchBar';
export interface NativeProps extends ViewProps {
    type?: CT.WithDefault<HeaderSubviewTypes, 'left'>;
    hidesSharedBackground?: boolean | undefined;
    synchronousShadowStateUpdatesEnabled?: CT.WithDefault<boolean, true>;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=ScreenStackHeaderSubviewNativeComponent.d.ts.map