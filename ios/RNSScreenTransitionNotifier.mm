#import "RNSScreenTransitionNotifier.h"

NSNotificationName const RNSScreenDidArriveNotification = @"RNSScreenDidArriveNotification";
NSString *const RNSScreenTransitionScreenIdKey = @"screenId";

void RNSNotifyScreenDidArrive(NSString *_Nullable screenId)
{
  // An observer exception must not break navigation.
  @try {
    [[NSNotificationCenter defaultCenter]
        postNotificationName:RNSScreenDidArriveNotification
                      object:nil
                    userInfo:screenId.length > 0 ? @{RNSScreenTransitionScreenIdKey : screenId} : nil];
  } @catch (NSException *exception) {
    NSLog(@"[RNScreens] RNSScreenDidArriveNotification observer threw: %@", exception);
  }
}
