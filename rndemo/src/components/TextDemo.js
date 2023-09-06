import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default () => {

    return (
        <View style={styles.root}>
            <Text style={styles.txt}>
                本次期末考试
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    txt: {
        fontSize: 40,
        color: '#3025ff',
        textShadowColor: '#A0A0A0',
        textShadowOffset: { width: 2, height: 4, },
        textShadowRadius: 6,
    },
});
