import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput
} from 'react-native';

// import CustomInput, { CustomInputRef } from './CustomInput';
import CustomInput2 from './CustomInput2';

export default () => {

    const inputRef = useRef<CustomInput2>(null);

    return (
        <View style={styles.root}>
            <Button title='聚焦' onPress={() => {
                inputRef.current?.customFocus();
            }} />
            <Button title='失焦' onPress={() => {
                inputRef.current?.customBlur();
                inputRef.current?.customXXX();
            }} />
            {/* <CustomInput ref={inputRef} /> */}

            <CustomInput2 ref={inputRef} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 64,
    },
});
