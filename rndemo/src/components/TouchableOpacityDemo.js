import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default () => {

    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}// x ~ 1不透明度变化范围
                onPress={() => {
                    console.log('onPress ...');
                }}
                onLongPress={() => {
                    console.log('onLongPress ...');
                }}
                delayLongPress={1000}
                onPressIn={() => {
                    console.log('onPressIn ...');
                }}
                onPressOut={() => {
                    console.log('onPressOut ...');
                }}
            >
                <Text style={styles.txt}>按钮</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0',
    },
    button: {
        width: 300,
        height: 65,
        backgroundColor: '#2030FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});
