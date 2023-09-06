import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Button,
  SectionList,
  TouchableOpacity,
  Image
} from 'react-native';
import icon_close_modal from '../assets/images/icon_close_modal.png';

import { SectionData } from '../constants/Data';

export default () => {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    }

    const hideModal = () => {
        setVisible(false);
    }

    const renderItem = ({item, index, section}) => {
        return (
            <Text style={styles.txt}>{item}</Text>
        );
    };

    const ListHeader = (
        <View style={styles.header}>
            <Text style={styles.extraTxt}>列表头部</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => hideModal()} >
                <Image style={styles.closeImg} source={icon_close_modal} />
            </TouchableOpacity>
        </View>
    );

    const ListFooter = (
        <View style={[styles.header, styles.footer]}>
            <Text style={styles.extraTxt}>列表尾部</Text>
        </View>
    );

    const renderSectionHeader = ({section}) => {
        return (
            <Text style={styles.sectionHeaderTxt}>{section.type}</Text>
        );
    }

    return (
        <View style={styles.root}>
            <Button title='按钮' onPress={() => showModal()} />
            
            <Modal
                visible={visible}
                onRequestClose={() => hideModal()}
                transparent={true}
                statusBarTranslucent={true}
                animationType='slide'
                onShow={() => console.log('onShow ...')}
                onDismiss={() => console.log('onDismiss ...')}
            >
                <View style={styles.blank} />
                <View style={styles.content}>
                    <SectionList
                        style={styles.sectionList}
                        sections={SectionData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${item}-${index}`}
                        contentContainerStyle={styles.containerStyle}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={ListHeader}
                        ListFooterComponent={ListFooter}
                        renderSectionHeader={renderSectionHeader}
                        ItemSeparatorComponent={() => 
                            <View style={styles.separator} />
                        }
                        stickySectionHeadersEnabled={true}
                    />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
    },
    blank: {
        width: '100%',
        height: '10%',
        backgroundColor: '#00000050',
    },
    content: {
        width: '100%',
        height: '90%',
        backgroundColor: '#ff000030',
    },
    sectionList: {
        width: '100%',
        height: '100%',
    },
    txt: {
        width: '100%',
        height: 56,
        fontSize: 20,
        color: '#333333',
        textAlignVertical: 'center',
        paddingLeft: 16,
    },
    containerStyle: {
        // paddingHorizontal: 16,
        // paddingTop: 20,
        backgroundColor: '#F5F5F5'
    },
    header: {
        width: '100%',
        height: 48,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        backgroundColor: '#ff000030',
    },
    extraTxt: {
        fontSize: 20,
        color: '#666666',
        textAlignVertical: 'center',
    },
    sectionHeaderTxt: {
        width: '100%',
        height: 36,
        backgroundColor: '#DDDDDD',
        textAlignVertical: 'center',
        paddingLeft: 16,
        fontSize: 20,
        color: '#333333',
        fontWeight: 'bold',
    },
    separator: {
        width:'100%',
        height: 2,
        backgroundColor: '#D0D0D0',
    },
    closeButton: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 16,
    },
    closeImg: {
        width: 24,
        height: 24,
    },
});
