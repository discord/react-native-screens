import type { CodegenTypes as CT, ViewProps, ColorValue, HostComponent } from 'react-native';
export type SearchBarEvent = Readonly<{}>;
export type SearchButtonPressedEvent = Readonly<{
    text?: string | undefined;
}>;
export type ChangeTextEvent = Readonly<{
    text?: string | undefined;
}>;
type SearchBarPlacement = 'automatic' | 'inline' | 'stacked' | 'integrated' | 'integratedButton' | 'integratedCentered';
type AutoCapitalizeType = 'systemDefault' | 'none' | 'words' | 'sentences' | 'characters';
type OptionalBoolean = 'undefined' | 'false' | 'true';
export interface NativeProps extends ViewProps {
    onSearchFocus?: CT.DirectEventHandler<SearchBarEvent> | null | undefined;
    onSearchBlur?: CT.DirectEventHandler<SearchBarEvent> | null | undefined;
    onSearchButtonPress?: CT.DirectEventHandler<SearchButtonPressedEvent> | null | undefined;
    onCancelButtonPress?: CT.DirectEventHandler<SearchBarEvent> | null | undefined;
    onChangeText?: CT.DirectEventHandler<ChangeTextEvent> | null | undefined;
    hideWhenScrolling?: CT.WithDefault<boolean, true>;
    autoCapitalize?: CT.WithDefault<AutoCapitalizeType, 'systemDefault'>;
    placeholder?: string | undefined;
    placement?: CT.WithDefault<SearchBarPlacement, 'automatic'>;
    allowToolbarIntegration?: CT.WithDefault<boolean, true>;
    obscureBackground?: CT.WithDefault<OptionalBoolean, 'undefined'>;
    hideNavigationBar?: CT.WithDefault<OptionalBoolean, 'undefined'>;
    cancelButtonText?: string | undefined;
    barTintColor?: ColorValue | undefined;
    tintColor?: ColorValue | undefined;
    textColor?: ColorValue | undefined;
    autoFocus?: CT.WithDefault<boolean, false>;
    disableBackButtonOverride?: boolean | undefined;
    inputType?: string | undefined;
    onClose?: CT.DirectEventHandler<SearchBarEvent> | null | undefined;
    onOpen?: CT.DirectEventHandler<SearchBarEvent> | null | undefined;
    hintTextColor?: ColorValue | undefined;
    headerIconColor?: ColorValue | undefined;
    shouldShowHintSearchIcon?: CT.WithDefault<boolean, true>;
}
type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
    blur: (instance: React.ComponentRef<ComponentType>) => void;
    focus: (instance: React.ComponentRef<ComponentType>) => void;
    clearText: (instance: React.ComponentRef<ComponentType>) => void;
    toggleCancelButton: (instance: React.ComponentRef<ComponentType>, flag: boolean) => void;
    setText: (instance: React.ComponentRef<ComponentType>, text: string) => void;
    cancelSearch: (instance: React.ComponentRef<ComponentType>) => void;
}
export declare const Commands: NativeCommands;
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=SearchBarNativeComponent.d.ts.map