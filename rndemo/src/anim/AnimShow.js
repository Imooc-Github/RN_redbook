import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';

import icon_gift from '../assets/images/icon_gift.png';
import icon_mine from '../assets/images/icon_mine.png';
import icon_home from '../assets/images/icon_home.png';
import icon_show from '../assets/images/icon_show.png';

export default () => {

    const width1 = useRef(new Animated.Value(200)).current;
    const width2 = useRef(new Animated.Value(64)).current;
    const width3 = useRef(new Animated.Value(64)).current;
    const width4 = useRef(new Animated.Value(64)).current;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        anim1(index === 0);
        anim2(index === 1);
        anim3(index === 2);
        anim4(index === 3);
    }, [index]);

    const anim1 = (isOpen) => {
        Animated.timing(width1, {
            toValue: isOpen ? 200 : 64,
            duration: isOpen ? 500 : 300,
            easing: isOpen ? Easing.elastic(3) : Easing.ease,
            useNativeDriver: false,
        }).start();
    }

    const anim2 = (isOpen) => {
        Animated.timing(width2, {
            toValue: isOpen ? 200 : 64,
            duration: isOpen ? 500 : 300,
            easing: isOpen ? Easing.elastic(3) : Easing.ease,
            useNativeDriver: false,
        }).start();
    }

    const anim3 = (isOpen) => {
        Animated.timing(width3, {
            toValue: isOpen ? 200 : 64,
            duration: isOpen ? 500 : 300,
            easing: isOpen ? Easing.elastic(3) : Easing.ease,
            useNativeDriver: false,
        }).start();
    }

    const anim4 = (isOpen) => {
        Animated.timing(width4, {
            toValue: isOpen ? 200 : 64,
            duration: isOpen ? 500 : 300,
            easing: isOpen ? Easing.elastic(3) : Easing.ease,
            useNativeDriver: false,
        }).start();
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    setIndex(0);
                }}
            >
                <Animated.View style={[
                    styles.view,
                    {width: width1, opacity: index === 0 ? 1 : 0.75}
                ]}>
                    <Image style={styles.img} source={icon_home} />
                    <Text style={styles.txt} numberOfLines={1} ellipsizeMode='clip'>首页推荐</Text>
                    <View style={styles.dot} />
                </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    setIndex(1);
                }}
            >
                <Animated.View style={[
                    styles.view,
                    {width: width2, opacity: index === 1 ? 1 : 0.75}
                ]}>
                    <Image style={styles.img} source={icon_show} />
                    <Text style={styles.txt} numberOfLines={1} ellipsizeMode='clip'>热门直播</Text>
                    <View style={styles.dot} />
                </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    setIndex(2);
                }}
            >
                <Animated.View style={[
                    styles.view,
                    {width: width3, opacity: index === 2 ? 1 : 0.75}
                ]}>
                    <Image style={styles.img} source={icon_gift} />
                    <Text style={styles.txt} numberOfLines={1} ellipsizeMode='clip'>我的礼物</Text>
                    <View style={styles.dot} />
                </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    setIndex(3);
                }}
            >
                <Animated.View style={[
                    styles.view,
                    {width: width4, opacity: index === 3 ? 1 : 0.75}
                ]}>
                    <Image style={styles.img} source={icon_mine} />
                    <Text style={styles.txt} numberOfLines={1} ellipsizeMode='clip'>个人信息</Text>
                    <View style={styles.dot} />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    view: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        borderTopRightRadius: 28,
        borderBottomRightRadius: 28,
        backgroundColor: '#2030ff',
        paddingLeft: 16,
        overflow: 'hidden'
    },
    img: {
        width: 32,
        height: 32,
        tintColor: 'white',
    },
    txt: {
        fontSize: 18,
        color: '#ffffffD0',
        marginLeft: 16,
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#20f020',
        marginLeft: 28,
        borderRadius: 5,
    },
});
