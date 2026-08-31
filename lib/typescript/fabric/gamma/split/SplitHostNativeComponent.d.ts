import type { CodegenTypes as CT, ViewProps, HostComponent } from 'react-native';
type GenericEmptyEvent = Readonly<{}>;
type DisplayModeWillChangeEvent = {
    currentDisplayMode: string;
    nextDisplayMode: string;
};
type SplitViewDisplayModeButtonVisibility = 'always' | 'automatic' | 'never';
type SplitViewSplitBehavior = 'automatic' | 'displace' | 'overlay' | 'tile';
type SplitViewPrimaryEdge = 'leading' | 'trailing';
type SplitViewDisplayMode = 'automatic' | 'secondaryOnly' | 'oneBesideSecondary' | 'oneOverSecondary' | 'twoBesideSecondary' | 'twoOverSecondary' | 'twoDisplaceSecondary';
type SplitViewOrientation = 'inherit' | 'all' | 'allButUpsideDown' | 'portrait' | 'portraitUp' | 'portraitDown' | 'landscape' | 'landscapeLeft' | 'landscapeRight';
type SplitViewColorScheme = 'inherit' | 'light' | 'dark';
type SplitViewPrimaryBackgroundStyle = 'default' | 'none' | 'sidebar';
type SplitViewTopColumnForCollapsing = 'default' | 'primary' | 'supplementary' | 'secondary';
interface ColumnMetrics {
    minimumPrimaryColumnWidth?: CT.WithDefault<CT.Float, -1.0>;
    maximumPrimaryColumnWidth?: CT.WithDefault<CT.Float, -1.0>;
    preferredPrimaryColumnWidthOrFraction?: CT.WithDefault<CT.Float, -1.0>;
    minimumSupplementaryColumnWidth?: CT.WithDefault<CT.Float, -1.0>;
    maximumSupplementaryColumnWidth?: CT.WithDefault<CT.Float, -1.0>;
    preferredSupplementaryColumnWidthOrFraction?: CT.WithDefault<CT.Float, -1.0>;
    minimumSecondaryColumnWidth?: CT.WithDefault<CT.Float, -1.0>;
    preferredSecondaryColumnWidthOrFraction?: CT.WithDefault<CT.Float, -1.0>;
    minimumInspectorColumnWidth?: CT.WithDefault<CT.Float, -1.0>;
    maximumInspectorColumnWidth?: CT.WithDefault<CT.Float, -1.0>;
    preferredInspectorColumnWidthOrFraction?: CT.WithDefault<CT.Float, -1.0>;
}
interface NativeProps extends ViewProps {
    preferredDisplayMode?: CT.WithDefault<SplitViewDisplayMode, 'automatic'>;
    preferredSplitBehavior?: CT.WithDefault<SplitViewSplitBehavior, 'automatic'>;
    primaryEdge?: CT.WithDefault<SplitViewPrimaryEdge, 'leading'>;
    showSecondaryToggleButton?: CT.WithDefault<boolean, false>;
    displayModeButtonVisibility?: CT.WithDefault<SplitViewDisplayModeButtonVisibility, 'automatic'>;
    columnMetrics?: ColumnMetrics | undefined;
    orientation?: CT.WithDefault<SplitViewOrientation, 'inherit'>;
    colorScheme?: CT.WithDefault<SplitViewColorScheme, 'inherit'>;
    primaryBackgroundStyle?: CT.WithDefault<SplitViewPrimaryBackgroundStyle, 'default'>;
    topColumnForCollapsing?: CT.WithDefault<SplitViewTopColumnForCollapsing, 'default'>;
    presentsWithGesture?: CT.WithDefault<boolean, true>;
    showInspector?: CT.WithDefault<boolean, false>;
    onCollapse?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onDisplayModeWillChange?: CT.DirectEventHandler<DisplayModeWillChangeEvent> | undefined;
    onExpand?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
    onInspectorHide?: CT.DirectEventHandler<GenericEmptyEvent> | undefined;
}
type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
    showColumn: (viewRef: React.ComponentRef<ComponentType>, column: string) => void;
}
export declare const Commands: NativeCommands;
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=SplitHostNativeComponent.d.ts.map