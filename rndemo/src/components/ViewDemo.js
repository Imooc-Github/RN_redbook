import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from 'react-native';

export default () => {

    const viewRef = useRef(null);

    useEffect(() => {

    }, []);

    return (
        <View style={styles.root}>
            <View
                ref={viewRef}
                style={styles.subView}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#C0C0C0',
    },
    subView: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
    },
});
