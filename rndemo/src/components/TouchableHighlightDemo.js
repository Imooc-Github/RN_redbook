import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default () => {

    return (
        <View style={styles.root}>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => {
                    console.log('onPress ...');
                }}
                underlayColor="#00bcd4"
            >
                <Text style={styles.txt}>按钮</Text>
            </TouchableHighlight>

            <TouchableWithoutFeedback>
                <View style={styles.button2}>
                    <Text style={styles.txt}>按钮</Text>
                </View>
            </TouchableWithoutFeedback>
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
    button2: {
        width: 300,
        height: 65,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});
