import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  requireNativeComponent,
  ViewProps,
  findNodeHandle,
  UIManager
} from 'react-native';

import { avatarUri } from '../constants/Uri';

type NativeInfoViewType = ViewProps | {
    // 这部分是自定义的属性
    avatar: string;
    name: string;
    desc: string;
    onShapeChange: (e: any) => void;
};

const NativeInfoView = requireNativeComponent<NativeInfoViewType>('NativeInfoView');

export default () => {

    const ref  = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            sendCommand('setShape', ['round']);
        }, 3000);
    }, []);

    const sendCommand = (command: string, params: any[]) => {
        const viewId = findNodeHandle(ref.current);
        // @ts-ignore
        const commands = UIManager.NativeInfoView.Commands[command].toString();
        UIManager.dispatchViewManagerCommand(viewId, commands, params);
    }

    return (
        <NativeInfoView
            ref={ref}
            style={styles.infoView}
            avatar={avatarUri}
            name="尼古拉斯·段坤"
            desc="各位产品经理大家好，我是个人开发者张三，我学习RN两年半了，我喜欢安卓、RN、Flutter，Thank you!。"
            onShapeChange={(e: any) => {
                console.log(e.nativeEvent.shape);
            }}
        />
    );
}

const styles = StyleSheet.create({
    infoView: {
        width: '100%',
        height: '100%',
    },
})