package com.demo.newarchitecture.rn;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.demo.BuildConfig;
import com.demo.newarchitecture.utils.DeviceUtil;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class AppModule extends ReactContextBaseJavaModule {

    public AppModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "App";
    }

    @Override
    public Map<String, Object> getConstants() {
        Map map = new HashMap<String, Object>();
        map.put("versionName", BuildConfig.VERSION_NAME);
        map.put("versionCode", BuildConfig.VERSION_CODE);
        return map;
    }

    @ReactMethod
    public void openGallery() {
        if (getCurrentActivity() == null) {
            return;
        }
        DeviceUtil.openGallery(getCurrentActivity());
    }

    @ReactMethod
    public void getVersionName(Promise promise) {
        String versionName = BuildConfig.VERSION_NAME;
        if (versionName == null) {
            promise.reject(new Throwable("获取版本失败"));
        } else {
            promise.resolve(versionName);
        }
    }
}
