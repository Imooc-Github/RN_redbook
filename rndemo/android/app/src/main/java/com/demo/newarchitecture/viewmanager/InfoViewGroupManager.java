package com.demo.newarchitecture.viewmanager;

import androidx.annotation.NonNull;

import com.demo.newarchitecture.view.InfoViewGroup;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

public class InfoViewGroupManager extends ViewGroupManager<InfoViewGroup> {
    @NonNull
    @Override
    public String getName() {
        return "NativeInfoViewGroup";
    }

    @NonNull
    @Override
    protected InfoViewGroup createViewInstance(@NonNull ThemedReactContext context) {
        return new InfoViewGroup(context);
    }
}
