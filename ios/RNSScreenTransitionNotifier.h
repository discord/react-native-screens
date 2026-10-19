#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

// Posted synchronously on main when the transition that brought a screen on top ends. DCDJankStats observes
// it by name. Several posts for one navigation are expected.
FOUNDATION_EXPORT NSNotificationName const RNSScreenDidArriveNotification;
FOUNDATION_EXPORT NSString *const RNSScreenTransitionScreenIdKey;

FOUNDATION_EXPORT void RNSNotifyScreenDidArrive(NSString *_Nullable screenId);

NS_ASSUME_NONNULL_END
