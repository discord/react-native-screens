import React from 'react';
import { HostInstance } from 'react-native';
export type NativeComponentGenericRef = React.Component & HostInstance;
export declare function useRenderDebugInfo<RefType extends React.Component>(componentName: string): React.RefObject<RefType | null>;
//# sourceMappingURL=useRenderDebugInfo.d.ts.map