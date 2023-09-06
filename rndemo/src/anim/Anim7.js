import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Animated
} from 'react-native';

export default () => {

    const vector = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    return (
        <View style={styles.root}>
            <Button title='按钮' onPress={() => {
                Animated.timing(vector, {
                    toValue: { x: 300, y: 400 },
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            }} />

            <Animated.View
                style={[
                    styles.view,
                    {marginLeft: vector.x, marginTop: vector.y}
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
