package com.demo.newarchitecture.view;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.CircleCrop;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.demo.R;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class InfoView extends LinearLayout implements View.OnClickListener {

    ImageView avatarImg;

    TextView nameTxt;

    TextView descTxt;

    TextView changeButton;

    private String url = "";
    private String shape = "circle";// circle、round

    public InfoView(Context context) {
        super(context);
        initView();
    }

    private void initView() {
        LayoutInflater inflater = LayoutInflater.from(getContext());
        View view = inflater.inflate(R.layout.layout_info_view, null);

        avatarImg = view.findViewById(R.id.img_avatar);
        nameTxt = view.findViewById(R.id.txt_name);
        descTxt = view.findViewById(R.id.txt_desc);
        changeButton = view.findViewById(R.id.changeButton);
        changeButton.setOnClickListener(this);

        LayoutParams lp = new LayoutParams(
                LayoutParams.MATCH_PARENT,
                LayoutParams.MATCH_PARENT
        );
        this.addView(view, lp);
    }

    @Override
    public void onClick(View v) {
        if (this.shape == "circle") {
            this.shape = "round";
        } else {
            this.shape = "circle";
        }
        Glide.with(this)
                .load(this.url)
                .placeholder(R.drawable.icon_avatar)
                .transform(this.shape == "circle"
                        ? new CircleCrop()
                        : new RoundedCorners(40)
                )
                .into(avatarImg);

        WritableMap params = Arguments.createMap();
        params.putString("shape", this.shape);
        ReactContext context = (ReactContext)getContext();
        context.getJSModule(RCTEventEmitter.class)
                .receiveEvent(getId(), "onShapeChange", params);
    }

    public void setAvatar(String url) {
        this.url = url;
        Glide.with(this)
                .load(url)
                .placeholder(R.drawable.icon_avatar)
                .transform(new CircleCrop())
                .into(avatarImg);
    }

    public void setName(String name) {
        nameTxt.setText(name);
    }

    public void setDesc(String desc) {
        descTxt.setText(desc);
    }

    public void setShape(String shape) {
        this.shape = shape;
        Glide.with(this)
                .load(this.url)
                .placeholder(R.drawable.icon_avatar)
                .transform(shape == "circle"
                        ? new CircleCrop()
                        : new RoundedCorners(40)
                )
                .into(avatarImg);
    }
}
