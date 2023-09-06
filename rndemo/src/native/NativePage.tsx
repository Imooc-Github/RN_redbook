import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  NativeModules,
  Image,
  Text,
} from 'react-native';

import NativeInfoView from './NativeInfoView';
import NativeInfoViewGroup from './NativeInfoViewGroup';

import { avatarUri } from '../constants/Uri';

export default () => {

    return (
        <View style={styles.root}>
            <Button
                title='调用原生方法'
                onPress={() => {
                    const { App } = NativeModules;
                    // App?.openGallery();

                    // App?.getVersionName().then((data: string) => {
                    //     console.log(`versionName=${data}`);
                    // })

                    const { versionName, versionCode } = App;
                    console.log(`versionName=${versionName}, versionCode=${versionCode}`);
                }}
            />

            {/* <NativeInfoView /> */}
            <NativeInfoViewGroup>
                <View style={styles.content}>
                    <Image
                        style={styles.avatarImg}
                        source={{ uri: avatarUri }}
                    />
                    <View style={styles.nameLayout}>
                        <Text style={styles.nameTxt}>尼古拉斯·段坤</Text>
                        <Text style={styles.descTxt}>
                            各位产品经理大家好，我是个人开发者张三，我学习RN两年半了，我喜欢安卓、RN、Flutter，Thank you!。
                        </Text>
                    </View>
                </View>
            </NativeInfoViewGroup>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    content: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    avatarImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 50,
    },
    nameLayout: {
        flex:1,
        flexDirection: 'column',
        marginLeft: 16,
    },
    nameTxt: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
        marginTop: 4,
    },
    descTxt: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
});
