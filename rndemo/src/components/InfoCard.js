import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default (props) => {

    const { name, age, sex, levelView } = props;

    return (
        <View style={styles.root}>
            <Text style={[styles.txt, styles.txtBold]}>
                {`姓名：${name}`}
            </Text>

            <Text style={styles.txt}>
                {`年龄：${age}`}
            </Text>

            <Text style={[styles.txt, styles.txtBlue]}>
                {`性别：${sex}`}
            </Text>

            {levelView}
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexDirection: 'column',
    },
    txt: {
        fontSize: 20,
        color: 'black',
        marginVertical: 10,
    },
    txtBold: {
        fontWeight: 'bold',
    },
    txtBlue: {
        color: 'blue',
    },
})