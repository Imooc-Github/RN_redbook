import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Animated
} from 'react-native';

export default () => {

    // const marginLeft = useRef(new Animated.Value(0)).current;
    // const rotate = useRef(new Animated.Value(0)).current;
    // const scale = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    // const rotateValue = rotate.interpolate({
    //     inputRange: [0, 45],
    //     outputRange: ['0deg', '45deg'],
    // })
    return (
        <View style={styles.root}>
            <Button title='按钮' onPress={() => {
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
                }).start();
            }} />

            <Animated.View
                style={[
                    styles.view,
                    // {marginLeft: marginLeft}
                    {transform: [
                        // { rotate: rotateValue },
                        // { scale: scale }
                    ]},
                    {opacity: opacity}
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
        marginTop: 60,
        marginLeft: 60,
    },
});
