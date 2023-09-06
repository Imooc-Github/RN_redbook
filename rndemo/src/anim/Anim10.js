import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  LayoutAnimation,
  Image,
  Text
} from 'react-native';
import icon_avatar from '../assets/images/default_avatar.png';

export default () => {

    const [showView, setShowView] = useState(false);

    const [showRight, setShowRight] = useState(false);

    return (
        <View style={styles.root}>
            <Button title='按钮' onPress={() => {
                // LayoutAnimation.configureNext(
                //     // LayoutAnimation.Presets.linear
                //     // LayoutAnimation.Presets.spring
                //     LayoutAnimation.Presets.easeInEaseOut,
                //     () => {
                //         console.log('动画结束');
                //     },
                //     () => {
                //         console.log('动画异常');
                //     }
                // );
                // setShowView(true);

                // LayoutAnimation.configureNext(
                //     LayoutAnimation.Presets.spring
                // );
                // setShowRight(true);

                // LayoutAnimation.linear();
                LayoutAnimation.spring();
                // LayoutAnimation.easeInEaseOut();
                setShowRight(true);
            }} />

            {/* {showView && <View style={styles.view} />} */}

            <View style={[
                styles.view,
                {flexDirection: showRight ? 'row-reverse' : 'row'}
            ]}>
                <Image style={styles.img} source={icon_avatar} />
                <Text style={styles.txt}>这是一行自我介绍的文本</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        width: '100%',
        height: 100,
        backgroundColor: '#F0F0F0',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    txt: {
        fontSize: 20,
        color: '#303030',
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
});
