
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

type Props = {
    info: UserInfo;
}

export default React.memo((props: Props) => {

    const { info } = props;

    console.log('render ...');
    return (
        <View style={darkStyles.content}>
            <Image style={darkStyles.img} source={{ uri: info.avatar }} />
            <Text style={darkStyles.txt}>{info.name}</Text>
            <View style={darkStyles.infoLayout}>
                <Text style={darkStyles.infoTxt}>{info.desc}</Text>
            </View>
        </View>
    );
}, (preProps: Props, nextProps: Props) => 
    JSON.stringify(preProps.info) === JSON.stringify(nextProps.info));

const darkStyles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#353535',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 64,
    },
    img: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 4,
        borderColor: '#ffffffE0',
    },
    txt: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 32,
    },
    infoLayout: {
        width: '90%',
        padding: 16,
        backgroundColor: '#808080',
        borderRadius: 12,
        marginTop: 24,
    },
    infoTxt: {
        fontSize: 16,
        color: 'white',
    },
});
