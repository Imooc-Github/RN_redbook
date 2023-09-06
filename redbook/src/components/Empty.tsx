import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

type Props = {
    icon: number;
    tips: string;
}

export default ({icon, tips}: Props) => {

    return (
        <View style={styles.root}>
            <Image style={styles.icon} source={icon} />
            <Text style={styles.tipsTxt}>{tips}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingTop: 120,
    },
    icon: {
        width: 96,
        height: 96,
        resizeMode: 'contain',
    },
    tipsTxt: {
        fontSize: 14,
        color: '#bbb',
        marginTop: 16,
    },
})