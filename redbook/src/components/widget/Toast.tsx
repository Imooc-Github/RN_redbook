import React from 'react';
import { View, Text, Image, Dimensions, StyleProp, ViewStyle, TextStyle } from 'react-native';
import TopView from './TopView';
const { width, height } = Dimensions.get('screen');

import icon_success from './icons/icon_success.png';
import icon_error from './icons/icon_error.png';

type OPTION = {
    icon: number | undefined | null;
    backgroundColor: string | undefined | null;
    style: StyleProp<ViewStyle> | undefined | null;
    textStyle: StyleProp<TextStyle> | undefined | null;
    duration: number | undefined | null;
}

const EMPTY_OPTION = {
    icon: undefined,
    backgroundColor: undefined,
    style: undefined,
    textStyle: undefined,
    duration: undefined,
};

let toastOption: OPTION = EMPTY_OPTION;

export default class Toast {

    static setOptions(option: any = {}) {
        if (option.icon) {
            toastOption.icon = option.icon;
        }
        if (option.backgroundColor) {
            toastOption.backgroundColor = option.backgroundColor;
        }
        if (option.style) {
            toastOption.style = option.style;
        }
        if (option.textStyle) {
            toastOption.textStyle = option.textStyle;
        }
        if (option.duration) {
            toastOption.duration = option.duration;
        }
    }

    static clearOptions() {
        toastOption = EMPTY_OPTION;
    }

    static success(textContent: string = '操作成功', duration: number = 2000) {
        Toast.clearOptions();
        Toast.setOptions({icon: icon_success});
        Toast.toast(textContent, duration);
    }

    static error(textContent: string = '操作成功', duration: number = 2000) {
        Toast.clearOptions();
        Toast.setOptions({icon: icon_error});
        Toast.toast(textContent, duration);
    }

    static show(textContent: string = '操作成功', duration: number = 2000) {
        Toast.clearOptions();
        Toast.setOptions({});
        Toast.toast(textContent, duration);
    }

    static toast(textContent: string = '未知信息', duration: number = 2000) {
        // toast蒙层默认透明
        const backgroundColor = toastOption.backgroundColor
            ? toastOption.backgroundColor
            : 'rgba(0,0,0,0)';
        // toast背景色默认值
        const toastViewBackgroundColor = toastOption.style 
            // @ts-ignore
            && toastOption.style.backgroundColor ? toastOption.style.backgroundColor : 'rgba(0,0,0,0.8)';
        const withIcon = !!toastOption.icon;
        const toastView = (
            <View
                pointerEvents={'box-none'}
                style={{
                    width,
                    height,
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: backgroundColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={[
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: toastViewBackgroundColor,
                            padding: 10,
                            borderRadius: 5,
                            margin: width * 0.1,
                        },
                        // @ts-ignore
                        { ...toastOption.style },
                    ]}>
                    {withIcon ? (
                        <Image
                            // @ts-ignore
                            source={toastOption.icon}
                            style={{ width: 40, height: 40, marginTop: 5 }}
                        />
                    ) : null}
                    <Text
                        style={[
                            {
                                color: '#fff',
                                margin: 10,
                                marginBottom: withIcon ? 0 : 10,
                                fontSize: 16,
                                lineHeight: 20,
                                textAlignVertical: 'center',
                            },
                            // @ts-ignore
                            { ...toastOption.textStyle },
                        ]}>
                        {textContent}
                    </Text>
                </View>
            </View>
        );
        const key: number = TopView.addToast(toastView);
        const showTime =
            typeof duration == 'number' && duration > 0
                ? duration
                : toastOption.duration && toastOption.duration > 0
                ? toastOption.duration
                : 2000;
        setTimeout(() => {
            TopView.removeToast(key);
        }, showTime);
    }

    static transformRoot(transform: any, animated: boolean, animatesOnly: boolean = false) {
        TopView.transform(transform, animated, animatesOnly);
    }

    static restoreRoot(animated: boolean, animatesOnly: boolean = false) {
        TopView.restore(animated, animatesOnly);
    }
}
