package com.demo.newarchitecture.rn;

import androidx.annotation.NonNull;

import com.demo.newarchitecture.viewmanager.InfoViewGroupManager;
import com.demo.newarchitecture.viewmanager.InfoViewManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

public class DemoPackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext context) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new AppModule(context));
        return modules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext context) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new InfoViewManager());
        viewManagers.add(new InfoViewGroupManager());
        return viewManagers;
    }
}
