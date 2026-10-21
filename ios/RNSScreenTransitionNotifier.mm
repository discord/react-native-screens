#import "RNSScreenTransitionNotifier.h"

#import <UIKit/UIKit.h>
#import "RNSScreen.h"

NSNotificationName const RNSScreenDidArriveNotification = @"RNSScreenDidArriveNotification";
NSString *const RNSScreenTransitionScreenIdKey = @"screenId";

void RNSNotifyScreenDidArrive(NSString *_Nullable screenId)
{
  [[NSNotificationCenter defaultCenter]
      postNotificationName:RNSScreenDidArriveNotification
                    object:nil
                  userInfo:screenId.length > 0 ? @{RNSScreenTransitionScreenIdKey : screenId} : nil];
}

BOOL RNSIsHostScreenTransitioning(UINavigationController *_Nullable navigationController)
{
  UIViewController *host = navigationController.parentViewController;
  return [host isKindOfClass:[RNSScreen class]] && host.transitionCoordinator != nil;
}
