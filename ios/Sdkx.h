#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSdkxSpec.h"

@interface Sdkx : NSObject <NativeSdkxSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Sdkx : NSObject <RCTBridgeModule>
#endif

@end
