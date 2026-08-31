import React from 'react';
import { ScreenStackHeaderConfigProps, ScreenStackHeaderSubviewProps } from '../types';
import { ImageProps, View, ViewProps } from 'react-native';
import { type NativeProps as ScreenStackHeaderSubviewNativeProps } from '../fabric/ScreenStackHeaderSubviewNativeComponent';
export declare const ScreenStackHeaderSubview: React.ComponentType<ScreenStackHeaderSubviewNativeProps>;
export interface ScreenStackHeaderConfigInstance extends React.ComponentRef<typeof View> {
}
export declare const ScreenStackHeaderConfig: React.ForwardRefExoticComponent<ScreenStackHeaderConfigProps & React.RefAttributes<ScreenStackHeaderConfigInstance>>;
export declare const ScreenStackHeaderBackButtonImage: (props: ImageProps) => React.JSX.Element;
export declare const ScreenStackHeaderRightView: (props: ScreenStackHeaderSubviewProps & ViewProps) => React.JSX.Element;
export declare const ScreenStackHeaderLeftView: (props: ScreenStackHeaderSubviewProps & ViewProps) => React.JSX.Element;
export declare const ScreenStackHeaderCenterView: (props: ViewProps) => React.JSX.Element;
export declare const ScreenStackHeaderSearchBarView: (props: ViewProps) => React.JSX.Element;
//# sourceMappingURL=ScreenStackHeaderConfig.d.ts.map