
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import icon_avatar from '../assets/images/default_avatar.png';
import withFloatButton from './withFloatButton';

export default withFloatButton(() => {

    const styles = darkStyles;
    return (
        <View style={styles.content}>
            <Image style={styles.img} source={icon_avatar} />
            <Text style={styles.txt}>个人信息介绍</Text>
            <View style={styles.infoLayout}>
                <Text style={styles.infoTxt}>
                    各位产品经理大家好，我是个人开发者张三，我学习RN两年半了，我喜欢安卓、RN、Flutter，Thank you!。
                </Text>
            </View>
        </View>
    );
}, 'InfoView');

const darkStyles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#353535',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 64,
    },
    img: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 4,
        borderColor: '#ffffffE0',
    },
    txt: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 32,
    },
    infoLayout: {
        width: '90%',
        padding: 16,
        backgroundColor: '#808080',
        borderRadius: 12,
        marginTop: 24,
    },
    infoTxt: {
        fontSize: 16,
        color: 'white',
    },
});
