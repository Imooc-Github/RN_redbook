import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import avatar from '../assets/images/avatar.png';
import { imageUri } from '../constants/Uri';

import icon_setting from '../assets/images/icon_setting.png'

export default () => {

    const imgRef = useRef(null);

    useEffect(() => {
        Image.getSize('xxx.xx.jpg', (width, height) => {
            console.log(`width=${width}, height=${height}`);
        }, (error) => {
            console.log(error);
        });

        Image.prefetch(imageUri).then(data => {
            console.log(data);
        }).catch(e => {
            console.log(e);
        })
    }, []);

    return (
        <View style={styles.root}>
            <Image
                ref={imgRef}
                style={styles.img}
                source={icon_setting}
                defaultSource={avatar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5'
    },
    img: {
        width: 240,
        height: 240,
        tintColor: 'blue',
    },
});
