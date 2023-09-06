import React, { useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default () => {

    const inputRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            // inputRef.current.blur();
        }, 2000);
    }, []);

    return (
        <View style={styles.root}>
            <TextInput
                ref={inputRef}
                style={styles.input}
                // autoFocus={true}
                blurOnSubmit={true}
                caretHidden={false}
                // defaultValue="默认内容"
                editable={true}
                keyboardType='number-pad'
                returnKeyType='search'
                // maxLength={11}
                // multiline={true}
                // numberOfLines={2}
                onFocus={() => {
                    
                }}
                onBlur={() => {

                }}
                onChange={(event) => {
                    console.log(event.nativeEvent);
                }}
                onChangeText={(text) => {
                    console.log(text);
                }}
                // selection={{start: 0, end: 3}}
                selectionColor='red'
                selectTextOnFocus={true}
                secureTextEntry={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0',
    },
    input: {
        width: '100%',
        height: 56,
        backgroundColor: '#D0D0D0',
        fontSize: 24,
        color: '#333333',
        fontWeight: 'bold',
    },
});
