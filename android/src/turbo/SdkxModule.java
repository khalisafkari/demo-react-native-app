package com.reactnativesdkx;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class SdkxModule extends NativeSdkxSpec {
  public static final String NAME = SdkxModuleImpl.NAME;

  SdkxModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @Override
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    SdkxModuleImpl.multiply(a, b, promise);
  }
}
