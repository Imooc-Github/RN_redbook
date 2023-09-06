import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';

export default () => {

    return (
        <View style={styles.root}>
            <Pressable style={state => {
                return [styles.button, state.pressed && styles.buttonPressed]
            }}>
                {state => <Text style={state.pressed ? styles.txtPressed : styles.txt}>按 钮</Text>}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#A0A0A0',
        padding: 32,
    },
    button: {
        width: 300,
        height: 65,
        backgroundColor: '#2030FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: 'white',
    },
    txt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    txtPressed: {
        fontSize: 20,
        color: '#2030FF',
        fontWeight: 'bold',
    },
});
