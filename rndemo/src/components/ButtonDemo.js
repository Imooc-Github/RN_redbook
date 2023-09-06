import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';


export default () => {

    const onPress = () => {
        
    }

    return (
        <View style={styles.root}>
            <Button
                title='按 钮'
                color={"green"}
                onPress={onPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
});
