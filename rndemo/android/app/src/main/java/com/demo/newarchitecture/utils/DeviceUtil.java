package com.demo.newarchitecture.utils;

import android.app.Activity;
import android.content.Intent;

public class DeviceUtil {

    public static void openGallery(Activity activity) {
        /* 开启Pictures画面Type设定为image */
        Intent intent = new Intent();
        intent.setType("image/*");
        /* 使用Intent.ACTION_GET_CONTENT这个Action */
        intent.setAction(Intent.ACTION_GET_CONTENT);
        /* 取得相片后返回本画面 */
        activity.startActivityForResult(intent, 1);
    }
}
