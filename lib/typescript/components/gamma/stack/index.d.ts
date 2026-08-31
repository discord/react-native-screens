import { StackHost } from './host';
import { StackScreen } from './screen';
export type { StackHostProps } from './host';
export type { OnDismissEventPayload, EmptyEventPayload, // TODO: Remove this from public types (we need one shared type for this)
OnDismissEvent, StackScreenActivityMode, StackScreenEventHandler, StackScreenProps, } from './screen';
export type { StackHeaderConfigPropsBase, StackHeaderConfigProps, StackHeaderConfigRef, StackHeaderTypeAndroid, StackHeaderBackgroundSubviewCollapseModeAndroid, StackHeaderToolbarSubviewAndroid, StackHeaderBackgroundSubviewAndroid, StackHeaderConfigPropsAndroid, StackHeaderConfigCommandsAndroid, StackHeaderToolbarMenuAndroid, StackHeaderToolbarMenuBaseAndroid, StackHeaderToolbarMenuElementAndroid, StackHeaderToolbarMenuGroupAndroid, StackHeaderToolbarMenuItemAndroid, StackHeaderToolbarMenuItemBaseAndroid, StackHeaderToolbarMenuElementOptionsAndroid, StackHeaderToolbarMenuElementUpdateAndroid, StackHeaderToolbarMenuItemShowAsActionAndroid, StackHeaderToolbarMenuItemTypeAndroid, StackHeaderConfigPropsIOS, StackHeaderInlineItemIOS, StackHeaderInlineCustomItemIOS, StackHeaderTitleCustomItemIOS, StackHeaderSpacerItemIOS, StackHeaderConfigCommandsIOS, StackHeaderMenuIOS, StackHeaderMenuItemIOS, StackHeaderMenuElementIOS, StackHeaderMenuItemOptionsIOS, StackHeaderMenuOptionsIOS, } from './header';
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
export declare const Stack: {
    Host: typeof StackHost;
    Screen: typeof StackScreen;
    HeaderConfig: import("react").ForwardRefExoticComponent<import("./header").StackHeaderConfigProps & import("react").RefAttributes<import("./header").StackHeaderConfigRef>>;
};
//# sourceMappingURL=index.d.ts.map