import type { ImageResolvedAssetSource } from 'react-native';
import type { HeaderBarButtonItem } from '../../types';
export interface ResolvedImageAsset extends ImageResolvedAssetSource {
}
export declare const prepareHeaderBarButtonItems: (barButtonItems: HeaderBarButtonItem[], side: "left" | "right") => (import("../..").HeaderBarButtonItemSpacing | {
    buttonId: string;
    imageSource: ResolvedImageAsset | undefined;
    templateSource: ResolvedImageAsset | undefined;
    sfSymbolName: string | undefined;
    xcassetName: string | undefined;
    titleStyle: {
        color: import("react-native").ProcessedColorValue | null | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: string | undefined;
    } | undefined;
    tintColor: import("react-native").ProcessedColorValue | null | undefined;
    badge: {
        style: {
            color: import("react-native").ProcessedColorValue | null | undefined;
            backgroundColor: import("react-native").ProcessedColorValue | null | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: string | undefined;
        };
        value: string;
    } | undefined;
    type: "button";
    onPress: () => void;
    selected?: boolean | undefined;
    index?: number | undefined;
    title?: string | undefined;
    icon?: import("../..").PlatformIconIOS | undefined;
    variant?: "plain" | "done" | "prominent" | undefined;
    disabled?: boolean | undefined;
    width?: number | undefined;
    hidesSharedBackground?: boolean | undefined;
    sharesBackground?: boolean | undefined;
    identifier?: string | undefined;
    accessibilityLabel?: string | undefined;
    accessibilityHint?: string | undefined;
} | {
    buttonId: string;
    imageSource: ResolvedImageAsset | undefined;
    templateSource: ResolvedImageAsset | undefined;
    sfSymbolName: string | undefined;
    xcassetName: string | undefined;
    titleStyle: {
        color: import("react-native").ProcessedColorValue | null | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: string | undefined;
    } | undefined;
    tintColor: import("react-native").ProcessedColorValue | null | undefined;
    badge: {
        style: {
            color: import("react-native").ProcessedColorValue | null | undefined;
            backgroundColor: import("react-native").ProcessedColorValue | null | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: string | undefined;
        };
        value: string;
    } | undefined;
    type: "menu";
    menu: {
        title?: string | undefined;
        items: (import("../..").HeaderBarButtonItemMenuAction | import("../..").HeaderBarButtonItemSubmenu)[];
        singleSelection?: boolean | undefined;
        displayAsPalette?: boolean | undefined;
    };
    changesSelectionAsPrimaryAction?: boolean | undefined;
    index?: number | undefined;
    title?: string | undefined;
    icon?: import("../..").PlatformIconIOS | undefined;
    variant?: "plain" | "done" | "prominent" | undefined;
    disabled?: boolean | undefined;
    width?: number | undefined;
    hidesSharedBackground?: boolean | undefined;
    sharesBackground?: boolean | undefined;
    identifier?: string | undefined;
    accessibilityLabel?: string | undefined;
    accessibilityHint?: string | undefined;
} | {
    menu: {
        title?: string | undefined;
        items: (import("../..").HeaderBarButtonItemMenuAction | import("../..").HeaderBarButtonItemSubmenu)[];
        singleSelection?: boolean | undefined;
        displayAsPalette?: boolean | undefined;
    };
    imageSource: ResolvedImageAsset | undefined;
    templateSource: ResolvedImageAsset | undefined;
    sfSymbolName: string | undefined;
    xcassetName: string | undefined;
    titleStyle: {
        color: import("react-native").ProcessedColorValue | null | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: string | undefined;
    } | undefined;
    tintColor: import("react-native").ProcessedColorValue | null | undefined;
    badge: {
        style: {
            color: import("react-native").ProcessedColorValue | null | undefined;
            backgroundColor: import("react-native").ProcessedColorValue | null | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: string | undefined;
        };
        value: string;
    } | undefined;
    type: "button";
    onPress: () => void;
    selected?: boolean | undefined;
    index?: number | undefined;
    title?: string | undefined;
    icon?: import("../..").PlatformIconIOS | undefined;
    variant?: "plain" | "done" | "prominent" | undefined;
    disabled?: boolean | undefined;
    width?: number | undefined;
    hidesSharedBackground?: boolean | undefined;
    sharesBackground?: boolean | undefined;
    identifier?: string | undefined;
    accessibilityLabel?: string | undefined;
    accessibilityHint?: string | undefined;
} | {
    menu: {
        title?: string | undefined;
        items: (import("../..").HeaderBarButtonItemMenuAction | import("../..").HeaderBarButtonItemSubmenu)[];
        singleSelection?: boolean | undefined;
        displayAsPalette?: boolean | undefined;
    };
    imageSource: ResolvedImageAsset | undefined;
    templateSource: ResolvedImageAsset | undefined;
    sfSymbolName: string | undefined;
    xcassetName: string | undefined;
    titleStyle: {
        color: import("react-native").ProcessedColorValue | null | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: string | undefined;
    } | undefined;
    tintColor: import("react-native").ProcessedColorValue | null | undefined;
    badge: {
        style: {
            color: import("react-native").ProcessedColorValue | null | undefined;
            backgroundColor: import("react-native").ProcessedColorValue | null | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: string | undefined;
        };
        value: string;
    } | undefined;
    type: "menu";
    changesSelectionAsPrimaryAction?: boolean | undefined;
    index?: number | undefined;
    title?: string | undefined;
    icon?: import("../..").PlatformIconIOS | undefined;
    variant?: "plain" | "done" | "prominent" | undefined;
    disabled?: boolean | undefined;
    width?: number | undefined;
    hidesSharedBackground?: boolean | undefined;
    sharesBackground?: boolean | undefined;
    identifier?: string | undefined;
    accessibilityLabel?: string | undefined;
    accessibilityHint?: string | undefined;
} | null)[];
//# sourceMappingURL=prepareHeaderBarButtonItems.d.ts.map