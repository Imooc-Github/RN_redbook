import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
} from 'react-native'

import icon_group from '../../assets/icon_group.png';
import icon_create_group from '../../assets/icon_create_group.png';

export interface FloatMenuRef {
    show: (pageY: number) => void;
    hide: () => void;
}

export default forwardRef((props: any, ref) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [y, setY] = useState<number>(100);

    const show = (pageY: number) => {
        setY(pageY);
        setVisible(true);
    }

    const hide = () => {
        setVisible(false);
    }

    useImperativeHandle(ref, () => {
        return {
            show, hide,
        }
    });

    const renderMenus = () => {
        return (
            <View style={[styles.content, { top: y }]}>
                <TouchableOpacity
                    style={styles.menuItem}
                >
                    <Image style={styles.menuIcon} source={icon_group} />
                    <Text style={styles.menuTxt}>群聊广场</Text>
                </TouchableOpacity>

                <View style={styles.line} />

                <TouchableOpacity
                    style={styles.menuItem}
                >
                    <Image style={styles.menuIcon} source={icon_create_group} />
                    <Text style={styles.menuTxt}>创建群聊</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <Modal
            transparent={true}
            visible={visible}
            statusBarTranslucent={true}
            animationType='fade'
            onRequestClose={hide}
        >
            <TouchableOpacity style={styles.root} onPress={hide}>
                {renderMenus()}
            </TouchableOpacity>
        </Modal>
    );
})

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00000040',
    },
    content: {
        width: 170,
        backgroundColor: 'white',
        borderRadius: 16,
        position: 'absolute',
        right: 10,
    },
    menuItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        paddingLeft: 20,
    },
    menuIcon: {
        width: 28,
        height: 28,
    },
    menuTxt: {
        fontSize: 18,
        color: '#333',
        marginLeft: 10,
    },
    line: {
        marginLeft: 20,
        marginRight: 16,
        height: 1,
        backgroundColor: '#eee',
    },
});

