import { ScreenProps } from '../types';
import { View } from 'react-native';
import React from 'react';
export declare const InnerScreen: (props: Omit<import("react-native").ViewProps, keyof {
    ref?: React.Ref<import("react-native").ViewInstance> | undefined;
}> & {
    ref?: React.Ref<import("react-native").ViewInstance> | undefined;
}) => React.ReactNode;
export declare class NativeScreen extends React.Component<ScreenProps> {
    render(): React.JSX.Element;
}
declare const Screen: React.ComponentType<ScreenProps & React.RefAttributes<View>>;
export declare const ScreenContext: React.Context<React.ComponentType<ScreenProps & React.RefAttributes<(props: Omit<import("react-native").ViewProps, keyof {
    ref?: React.Ref<import("react-native").ViewInstance> | undefined;
}> & {
    ref?: React.Ref<import("react-native").ViewInstance> | undefined;
}) => React.ReactNode>>>;
export default Screen;
//# sourceMappingURL=Screen.web.d.ts.map