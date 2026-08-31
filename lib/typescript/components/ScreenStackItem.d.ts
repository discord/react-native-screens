import * as React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { ScreenProps, ScreenStackHeaderConfigProps } from '../types';
import { type ScreenInstance } from './Screen';
type Props = Omit<ScreenProps, 'enabled' | 'isNativeStack' | 'hasLargeHeader'> & {
    screenId: string;
    headerConfig?: ScreenStackHeaderConfigProps | undefined;
    contentStyle?: StyleProp<ViewStyle> | undefined;
};
declare const _default: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<ScreenInstance>>;
export default _default;
//# sourceMappingURL=ScreenStackItem.d.ts.map