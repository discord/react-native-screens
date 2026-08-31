import React from 'react';
import { type NativeSyntheticEvent } from 'react-native';
import type { NativeProps as TabsHostAndroidNativeComponentProps } from '../../../fabric/tabs/TabsHostAndroidNativeComponent';
import type { NativeProps as TabsHostIOSNativeComponentProps } from '../../../fabric/tabs/TabsHostIOSNativeComponent';
import type { TabSelectedEvent } from './TabsHost.types';
type TabsHostPlatformNativeComponentProps = TabsHostAndroidNativeComponentProps | TabsHostIOSNativeComponentProps;
interface TabsHostConfig<T> {
    componentNodeRef: React.RefObject<React.Component<T> | null>;
    onTabSelected?: ((event: NativeSyntheticEvent<TabSelectedEvent>) => void) | undefined;
}
export declare function useTabsHost<T extends TabsHostPlatformNativeComponentProps>({ componentNodeRef, onTabSelected, }: TabsHostConfig<T>): {
    onTabSelected: (event: NativeSyntheticEvent<TabSelectedEvent>) => void;
};
export {};
//# sourceMappingURL=useTabsHost.d.ts.map