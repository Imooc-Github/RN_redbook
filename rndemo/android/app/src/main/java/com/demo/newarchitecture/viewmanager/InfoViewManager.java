package com.demo.newarchitecture.viewmanager;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.demo.newarchitecture.view.InfoView;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class InfoViewManager extends SimpleViewManager<InfoView> {
    @NonNull
    @Override
    public String getName() {
        return "NativeInfoView";
    }

    @NonNull
    @Override
    protected InfoView createViewInstance(@NonNull ThemedReactContext context) {
        return new InfoView(context);
    }

    @ReactProp(name = "avatar")
    public void setAvatar(InfoView view, String url) {
        view.setAvatar(url);
    }

    @ReactProp(name = "name")
    public void setName(InfoView view, String name) {
        view.setName(name);
    }

    @ReactProp(name = "desc")
    public void setDesc(InfoView view, String desc) {
        view.setDesc(desc);
    }

    @Nullable
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put("onShapeChange",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onShapeChange")
                        )
                ).build();
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of("setShape", SET_SHAPE_CODE);
    }

    @Override
    public void receiveCommand(
            @NonNull InfoView view,
            String commandId,
            @Nullable ReadableArray args) {
        int command = Integer.parseInt(commandId);
        if (command == SET_SHAPE_CODE) {
            if (args != null && args.size() > 0) {
                String shape = args.getString(0);
                view.setShape(shape);
            }
        } else {
            // TODO
            super.receiveCommand(view, commandId, args);
        }
    }

    public static final int SET_SHAPE_CODE = 100;
}
