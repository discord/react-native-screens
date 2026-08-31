import type { CodegenTypes as CT, HostComponent, ViewProps } from 'react-native';
type GenericEmptyEvent = Readonly<{}>;
type SplitScreenColumnType = 'column' | 'inspector';
interface NativeProps extends ViewProps {
    columnType?: CT.WithDefault<SplitScreenColumnType, 'column'>;
    onWillAppear?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onDidAppear?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onWillDisappear?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onDidDisappear?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=SplitScreenNativeComponent.d.ts.map