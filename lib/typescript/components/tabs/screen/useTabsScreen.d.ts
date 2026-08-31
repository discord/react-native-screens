import React from 'react';
import { type NativeSyntheticEvent } from 'react-native';
import type { NativeProps as TabsScreenAndroidNativeComponentProps } from '../../../fabric/tabs/TabsScreenAndroidNativeComponent';
import type { NativeProps as TabsScreenIOSNativeComponentProps } from '../../../fabric/tabs/TabsScreenIOSNativeComponent';
import type { EmptyObject, TabsScreenEventHandler } from './TabsScreen.types';
type TabsScreenPlatformNativeComponentProps = TabsScreenAndroidNativeComponentProps | TabsScreenIOSNativeComponentProps;
interface TabsScreenConfig<T> {
    componentNodeRef: React.RefObject<React.Component<T> | null>;
    onDidAppear?: TabsScreenEventHandler<EmptyObject> | undefined;
    onDidDisappear?: TabsScreenEventHandler<EmptyObject> | undefined;
    onWillAppear?: TabsScreenEventHandler<EmptyObject> | undefined;
    onWillDisappear?: TabsScreenEventHandler<EmptyObject> | undefined;
    screenKey: string;
}
export declare function useTabsScreen<T extends TabsScreenPlatformNativeComponentProps>({ componentNodeRef, onDidAppear, onDidDisappear, onWillAppear, onWillDisappear, screenKey, }: TabsScreenConfig<T>): {
    componentNodeRef: React.RefObject<React.Component<T, {}, any> | null>;
    lifecycleCallbacks: {
        onWillAppear: (event: NativeSyntheticEvent<EmptyObject>) => void;
        onDidAppear: (event: NativeSyntheticEvent<EmptyObject>) => void;
        onWillDisappear: (event: NativeSyntheticEvent<EmptyObject>) => void;
        onDidDisappear: (event: NativeSyntheticEvent<EmptyObject>) => void;
    };
};
export {};
//# sourceMappingURL=useTabsScreen.d.ts.map