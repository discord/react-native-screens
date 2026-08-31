import type { CodegenTypes as CT, HostComponent, ViewProps } from 'react-native';
import { PlatformIconIOS } from './StackHeaderItemIOSNativeComponent';
import { UnsafeMixed } from '../../codegenUtils';
export type MenuItemPressEvent = Readonly<{
    menuItemId: string;
}>;
export type MenuSelectionChangeEvent = Readonly<{
    menuId: string;
    selectedMenuItemIds: string[];
}>;
export interface NativeProps extends ViewProps {
    title?: string | undefined;
    subtitle?: string | undefined;
    hidden?: CT.WithDefault<boolean, false>;
    transparent?: CT.WithDefault<boolean, false>;
    backButtonHidden?: CT.WithDefault<boolean, false>;
    largeTitle?: string | undefined;
    largeSubtitle?: string | undefined;
    largeTitleEnabled?: CT.WithDefault<boolean, false>;
    onMenuItemPress?: CT.DirectEventHandler<MenuItemPressEvent> | undefined;
    onMenuSelectionChange?: CT.DirectEventHandler<MenuSelectionChangeEvent> | undefined;
}
type ComponentType = HostComponent<NativeProps>;
export interface NativeMenuElementOptionsIOS {
    title?: string | null | undefined;
    icon?: UnsafeMixed<PlatformIconIOS> | null | undefined;
    toggleState?: boolean | undefined;
}
export interface NativeCommands {
    setMenuItemOptions: (viewRef: React.ComponentRef<ComponentType>, menuElementId: string, options: NativeMenuElementOptionsIOS[]) => void;
    setMenuOptions: (viewRef: React.ComponentRef<ComponentType>, menuElementId: string, options: NativeMenuElementOptionsIOS[]) => void;
}
export declare const Commands: NativeCommands;
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=StackHeaderConfigIOSNativeComponent.d.ts.map