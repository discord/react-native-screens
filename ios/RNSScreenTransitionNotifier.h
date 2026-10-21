#import <Foundation/Foundation.h>

@class UINavigationController;

NS_ASSUME_NONNULL_BEGIN

// Posted synchronously on main when the transition that brought a screen on top ends. DCDJankStats observes
// it by name. Several posts for one navigation are expected.
FOUNDATION_EXPORT NSNotificationName const RNSScreenDidArriveNotification;
FOUNDATION_EXPORT NSString *const RNSScreenTransitionScreenIdKey;

FOUNDATION_EXPORT void RNSNotifyScreenDidArrive(NSString *_Nullable screenId);

// A nested stack shows its first screen while the screen hosting it is still being presented or pushed, and that
// screen can get viewDidAppear before the host lands too. Neither is an arrival: the host's own viewDidAppear and the
// outer stack's finish follow once it does. Only the host's coordinator tells them apart. The stack's own one is also
// set when one of its own pushes ends.
FOUNDATION_EXPORT BOOL RNSIsHostScreenTransitioning(UINavigationController *_Nullable navigationController);

NS_ASSUME_NONNULL_END
