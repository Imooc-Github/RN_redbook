import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';

import bg_card from '../assets/images/bg_card.png';
import icon_bank from '../assets/images/icon_bank.png';

export default () => {

    return (
        <View style={styles.root}>
            <ImageBackground
                style={styles.viewStyle}
                imageStyle={styles.imgStyle}
                source={bg_card}
            >
                <Image style={styles.icon_logo} source={icon_bank} />
                <Text style={styles.txtBank}>
                    {`招商银行\n`}
                    <Text style={styles.cardTypeTxt}>
                        {`储蓄卡\n\n`}
                    </Text>
                    <Text style={styles.cardNoTxt}>
                    ●●●●   ●●●●   ●●●●   3068
                    </Text>
                </Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%', 
        height: '100%',
        flexDirection: 'column'
    },
    viewStyle: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    imgStyle: {
        resizeMode: 'cover',
        borderRadius: 12,
    },
    icon_logo: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginLeft: 20,
        marginTop: 20,
    },
    txtBank: {
        fontSize: 24,
        color: 'white',
        marginLeft: 10,
        marginTop: 21,
        fontWeight: 'bold',
    },
    cardTypeTxt: {
        fontSize: 20,
        color: '#FFFFFFA0',
        fontWeight: 'normal',
    },
    cardNoTxt: {
        fontSize: 26,
        color: 'white',
    },
});
