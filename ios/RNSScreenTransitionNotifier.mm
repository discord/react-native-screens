#import "RNSScreenTransitionNotifier.h"

NSNotificationName const RNSScreenDidArriveNotification = @"RNSScreenDidArriveNotification";
NSString *const RNSScreenTransitionScreenIdKey = @"screenId";

void RNSNotifyScreenDidArrive(NSString *_Nullable screenId)
{
  [[NSNotificationCenter defaultCenter]
      postNotificationName:RNSScreenDidArriveNotification
                    object:nil
                  userInfo:screenId.length > 0 ? @{RNSScreenTransitionScreenIdKey : screenId} : nil];
}
