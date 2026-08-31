import React from 'react';
import { View } from 'react-native';
import { ScreenProps } from '../types';
export interface ScreenInstance extends React.ComponentRef<typeof View> {
}
export declare const InnerScreen: React.ForwardRefExoticComponent<Omit<ScreenProps, "ref"> & React.RefAttributes<ScreenInstance>>;
export declare const ScreenContext: React.Context<React.ForwardRefExoticComponent<Omit<ScreenProps, "ref"> & React.RefAttributes<ScreenInstance>>>;
declare const Screen: React.ForwardRefExoticComponent<Omit<ScreenProps, "ref"> & React.RefAttributes<ScreenInstance>>;
export default Screen;
//# sourceMappingURL=Screen.d.ts.map