import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Animated
} from 'react-native';

export default () => {

    const marginLeft = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.root}>
            <Button title='按钮' onPress={() => {
                Animated.spring(marginLeft, {
                    toValue: 200,
                    useNativeDriver: false,

                    // 第一组配置
                    bounciness: 25,
                    speed: 10,

                    // 第二组配置
                    // tension: 40,
                    // friction: 7,

                    // 第三组配置
                    // stiffness: 100,
                    // damping: 10,
                    // mass: 1,
                }).start();
            }} />

            <Animated.View
                style={[
                    styles.view,
                    {marginLeft: marginLeft}
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    view: {
        width: 100,
        height: 100,
        backgroundColor: '#3050ff',
        marginTop: 20,
    },
});
