import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  Platform,
  Linking,
  PixelRatio,
  BackHandler,
  PermissionsAndroid,
  Vibration,
  ToastAndroid,
  Keyboard,
  TextInput
} from 'react-native';

import { useBackHandler } from '@react-native-community/hooks';

export default () => {

    // const { width, height, scale, fontScale } = useWindowDimensions();
    // console.log(`width=${width}, height=${height}`); 
    // console.log(`scale=${scale}, fontScale=${fontScale}`);

    useBackHandler(() => {
        return true;
    });

    useEffect(() => {
        const subcription = Dimensions.addEventListener('change', (window, screen) => {
            console.log(window);
            console.log(screen);
        });

        // BackHandler.addEventListener('hardwareBackPress', backForAndroid)

        const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
        const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardHide);

        return () => {
            subcription.remove();
            showSubscription.remove();
            hideSubscription.remove();
            // BackHandler.removeEventListener('hardwareBackPress', backForAndroid);
        }
    }, []);

    const onKeyboardShow = () => {
        console.log('键盘出现');
    }

    const onKeyboardHide = () => {
        console.log('键盘隐藏');
    }

    // const backForAndroid = () => {
    //     return false;
    // }

    const onPress = () => {
        // alert('这是一条提示信息');
        // alert(123);
        // alert(false);

        // const buttons = [
        //     {text: '取消', onPress: () => console.log('取消')},
        //     {text: '确定', onPress: () => console.log('确定')},
        // ];
        // Alert.alert('这是标题', '这是一条提示信息', buttons);

        // console.log('这是普通的日志输出');
        // console.info('信息日志输出');
        // console.debug('调试日志输出');
        // console.warn('警告日志输出');
        // console.error('错误日志输出');

        // console.log('我是个人开发者%s，我学习RN%d年半了', '张三', 2);
        // const obj = {name: '张三', age: 12};
        // console.log('我是一个对象:%o', obj);

        // console.log('%c这行日志红色文字，字号大', 'color:red; font-size:x-large');
        // console.log('%c这行日志蓝色文字，字号中', 'color:blue; font-size:x-medium');
        // console.log('%c这行日志绿色文字，字号小', 'color:green; font-size:x-small');

        // const viewLayout = (
        //     <View style={{ flexDirection: 'column' }}>
        //         <Text style={{ fontSize: 20, color: 'red' }} >
        //             文字显示
        //         </Text>
        //     </View>
        // );
        // console.log(viewLayout);

        // const users = [
        //     {name: '张三', age: 12, hobby: '唱歌'},
        //     {name: '李四', age: 15, hobby: '跳舞'},
        //     {name: '王武', age: 18, hobby: '打篮球'},
        // ];
        // console.table(users);

        // console.group();
        // console.log('第1行日志');
        // console.log('第2行日志');
        // console.log('第3行日志');
        //     console.group();
        //     console.log('二级分组第1行日志');
        //     console.log('二级分组第2行日志');
        //     console.log('二级分组第3行日志');
        //     console.groupEnd();
        // console.groupEnd();

        // const { width, height, scale, fontScale } = Dimensions.get('window');
        // console.log(`width=${width}, height=${height}`);

        // console.log(Platform.OS);
        // console.log(Platform.Version);
        // console.log(Platform.constants);
        // console.log(Platform.isPad);
        // console.log(Platform.isTV);
        // const style = Platform.select({
        //     android: {
        //         marginTop: 20,
        //     },
        //     ios: {
        //         marginTop: 0,
        //     },
        //     default: {
        //         marginTop: 10,
        //     },
        // });
        // console.log(style);

        // const s1 = {
        //     fontSize: 18,
        // };
        // const s2 = {
        //     fontSize: 20,
        //     color: 'red',
        // };
        // const composeStyle = StyleSheet.compose(s1, s2);
        // console.log(composeStyle);

        // const flattenStyle = StyleSheet.flatten([s1, s2]);
        // console.log(flattenStyle);

        // console.log(StyleSheet.absoluteFill);

        // console.log(StyleSheet.hairlineWidth);
        // console.log(1 / Dimensions.get('screen').scale);

        // if (Linking.canOpenURL('https://www.baidu.com/')) {
        //     Linking.openURL('https://www.baidu.com/');
        // }
        // Linking.openURL('geo:37.2122, 12.222');
        // Linking.openURL('tel:10086');
        // Linking.openURL('smsto:10086');
        // Linking.openURL('mailto:10086@qq.com');
        // Linking.openURL('dagongjue://demo?name=李四');
        // Linking.openSettings();

        // if (Platform.OS === 'android') {
        //     Linking.sendIntent('com.dagongjue.demo.test', [{key: 'name', value: '王武'}]);
        // }
        // console.log(Linking.getInitialURL());

        // console.log(PixelRatio.get());
        // console.log(PixelRatio.getFontScale());
        // console.log(
        //     PixelRatio.getPixelSizeForLayoutSize(200)
        // );

        // BackHandler.exitApp();

        // const needPermission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
        // PermissionsAndroid.check(
        //     needPermission
        // ).then(result => {
        //     if (!result) {
        //         PermissionsAndroid.request(needPermission).then(status => {
        //             console.log(status);
        //             if (status === 'granted') {
        //                 //获得
        //             } else if (status === 'denied') {
        //                 //拒绝
        //             }
        //         });
        //     }
        // });

        // PermissionsAndroid.requestMultiple([
        //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        //     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        // ]);

        // Vibration.vibrate();
        // Vibration.vibrate(1000);//just android
        // Vibration.cancel();
        // android
        // Vibration.vibrate([100, 500, 200, 500]);
        // IOS
        // Vibration.vibrate([100, 200, 300, 400]);
        // Vibration.vibrate([100, 200, 300, 400], true);

        // ToastAndroid.show('这是一个提示', ToastAndroid.SHORT);
        // ToastAndroid.show('这是一个提示', ToastAndroid.LONG);
        // ToastAndroid.showWithGravity(
        //     '这是一个提示',
        //     ToastAndroid.LONG,
        //     ToastAndroid.TOP
        // );
        // ToastAndroid.showWithGravity(
        //     '这是一个提示',
        //     ToastAndroid.LONG,
        //     ToastAndroid.TOP,
        //     100, 200,
        // );

        Keyboard.dismiss();
    }

    return (
        <View style={styles.root}>
            <Button
                title='按钮'
                onPress={onPress}
            />

            {/* <View style={styles.view}>
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
            </View> */}

            <View
                style={[
                    {
                        width: 100,
                        height: 100,
                        backgroundColor: '#3050ff',
                        marginTop: 60,
                        marginLeft: 60,
                    },
                    {
                        transform: [
                            // {translateX: 200}
                            // {translateY: 150}
                            {scale: 1.5},
                            // {scaleX: 1.5},
                            // {scaleY: 1.5}
                            {rotateX: '45deg'},
                            // {rotateY: '45deg'},
                            {rotateZ: '45deg'}
                            // {rotate: '45deg'},
                        ],
                    }
                ]}
            />

            <TextInput style={{
                width: '100%',
                height: 56,
                backgroundColor: '#E0E0E0'
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        ...Platform.select({
            android: {
                paddingTop: 20,
            },
            ios: {
                paddingTop: 0,
            },
            default: {
                paddingTop: 10,
            },
        })
    },
    view: {
        width: '100%',
        backgroundColor: 'red',
    },
    subView: {
        width: '100%',
        backgroundColor: 'green',
        height: PixelRatio.roundToNearestPixel(32.1),
    },
});
