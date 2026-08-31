import { ViewProps } from 'react-native';
export type ScreenStackNativeProps = ViewProps;
declare const StackHost: (props: Omit<ViewProps, keyof {
    ref?: React.Ref<import("react-native").ViewInstance> | undefined;
}> & {
    ref?: React.Ref<import("react-native").ViewInstance> | undefined;
}) => React.ReactNode;
export default StackHost;
//# sourceMappingURL=StackHost.web.d.ts.map