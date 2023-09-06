import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  SectionList,
  Modal,
  StatusBar
} from 'react-native';

import icon_bg from '../assets/images/icon_bg.png';
import icon_menu from '../assets/images/icon_menu.png';
import icon_share from '../assets/images/icon_share.png';
import avatar from '../assets/images/default_avatar.png';
import icon_add from '../assets/images/icon_add.png';
import icon_code from '../assets/images/icon_code.png';
import icon_male from '../assets/images/icon_male.png';
import icon_setting from '../assets/images/icon_setting.png';

import icon_1 from '../assets/images/icon_1.png';
import icon_2 from '../assets/images/icon_2.png';
import icon_3 from '../assets/images/icon_3.png';
import icon_close_modal from '../assets/images/icon_close_modal.png';

import { SectionData } from '../constants/Data';

export default () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const getContent = () => {
        const contentStyles = StyleSheet.create({
            icon: {
                width: 96,
                height: 96,
                resizeMode: 'contain',
            },
            desc: {
                fontSize: 16,
                marginTop: 16,
            },
            button: {
                width: 76,
                height: 28,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: '#C0C0C0',
                textAlign: 'center',
                textAlignVertical: 'center',
                marginTop: 12,
                color: '#333333',
            },
        });
        const array = [];
        array[0] = (
            <>
                <Image style={contentStyles.icon} source={icon_1} />
                <Text style={contentStyles.desc}>用一句话，分享今天的快乐吧～</Text>
                <Text style={contentStyles.button}>去分享</Text>
            </>
        );
        array[1] = (
            <>
                <Image style={contentStyles.icon} source={icon_2} />
                <Text style={contentStyles.desc}>快去收藏你喜欢的作品吧～</Text>
                <Text style={contentStyles.button}>去收藏</Text>
            </>
        );
        array[2] = (
            <>
                <Image style={contentStyles.icon} source={icon_3} />
                <Text style={contentStyles.desc}>你还没有给作品点赞哦～</Text>
                <Text style={contentStyles.button}>去点赞</Text>
            </>
        );
        return array;
    }

    const renderModal = () => {
        const modalStyles = StyleSheet.create({
            root: {
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                flexDirection: 'column',
            },
            content: {
                width: '100%',
                height: '90%',
                backgroundColor: 'white',
            },
            nameTxt: {
                width: '100%',
                height: 46,
                textAlignVertical: 'center',
                paddingLeft: 16,
                fontSize: 16,
                color: '#333333',
            },
            typeTxt: {
                width: '100%',
                height: 36,
                backgroundColor: '#E0E0E0',
                textAlignVertical: 'center',
                paddingLeft: 16,
                fontSize: 16,
                color: '#666666',
            },
            listHeader: {
                width: '100%',
                flexDirection: 'column',
                paddingTop: 96,
            },
            titleLayout: {
                width: '100%',
                height: 46,
                backgroundColor: 'white',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
            },
            titleTxt: {
                fontSize: 18,
                color: '#333333',
                fontWeight: 'bold',
            },
            closeButton: {
                position: 'absolute',
                right: 16,
            },
            closeImg: {
                width: 24,
                height: 24,
            },
        });
        return (
            <Modal
                visible={visible}
                onRequestClose={() => setVisible(false)}
                transparent={true}
                animationType='slide'
                statusBarTranslucent={true}
            >
                <View style={modalStyles.root}>
                    <View style={modalStyles.listHeader}>
                        <View style={modalStyles.titleLayout}>
                            <Text style={modalStyles.titleTxt}>粉丝列表</Text>
                            <TouchableOpacity style={modalStyles.closeButton} onPress={() => setVisible(false)}>
                                <Image style={modalStyles.closeImg} source={icon_close_modal} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={modalStyles.content}>
                        <SectionList
                            sections={SectionData}
                            renderItem={({item}) => (
                                <Text style={modalStyles.nameTxt}>{item}</Text>
                            )}
                            keyExtractor={(item, index) => `${item}-${index}`}
                            renderSectionHeader={({section}) => (
                                <Text style={modalStyles.typeTxt}>{section.type}</Text>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        );
    }

    const renderDashboard = () => {
        return (
            <ImageBackground style={styles.imgBg} source={icon_bg} imageStyle={styles.bgImg}>
                <View style={styles.titleBar}>
                    <Image style={styles.iconMenu} source={icon_menu} />
                    <Image style={styles.iconShare} source={icon_share} />
                </View>
                <View style={styles.infoLayout}>
                    <View style={styles.avatarLayout}>
                        <Image style={styles.avatarImg} source={avatar} />
                        <Image style={styles.iconAdd} source={icon_add} />
                        <View style={styles.nameLayout}>
                            <Text style={styles.nameTxt}>大公爵</Text>
                            <View style={styles.idLayout}>
                                <Text style={styles.idTxt}>小红书号：118302851</Text>
                                <Image style={styles.iconCode} source={icon_code} />
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={styles.descTxt}>点击关注，填写简介</Text>

                <View style={styles.sexView}>
                    <Image style={styles.sexImg} source={icon_male} />
                </View>

                <View style={styles.countLayout}>
                    <TouchableOpacity style={styles.itemLayout} onPress={() => setVisible(true)}>
                        <Text style={styles.itemCount}>142</Text>
                        <Text style={styles.itemLabel}>关注</Text>
                    </TouchableOpacity>
                    <View style={styles.itemLayout}>
                        <Text style={styles.itemCount}>2098</Text>
                        <Text style={styles.itemLabel}>粉丝</Text>
                    </View>
                    <View style={styles.itemLayout}>
                        <Text style={styles.itemCount}>1042</Text>
                        <Text style={styles.itemLabel}>获赞与收藏</Text>
                    </View>

                    <View style={{ flex: 1 }} />

                    <TouchableOpacity style={styles.editButton} activeOpacity={0.5}>
                        <Text style={styles.editTxt}>编辑资料</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.settingButton} activeOpacity={0.5}>
                        <Image style={styles.iconSetting} source={icon_setting} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }

    const renderTabs = () => {
        return (
            <>
                <View style={styles.tabsLayout}>
                    <TouchableOpacity style={styles.tab} onPress={() => setTabIndex(0)}>
                        <Text style={tabIndex === 0 ? styles.tabTxtSelected : styles.tabTxt}>笔记</Text>
                        <View style={[styles.tabLine, tabIndex !== 0 && styles.hide]} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tab} onPress={() => setTabIndex(1)}>
                        <Text style={tabIndex === 1 ? styles.tabTxtSelected : styles.tabTxt}>收藏</Text>
                        <View style={[styles.tabLine, , tabIndex !== 1 && styles.hide]} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tab} onPress={() => setTabIndex(2)}>
                        <Text style={tabIndex === 2 ? styles.tabTxtSelected : styles.tabTxt}>赞过</Text>
                        <View style={[styles.tabLine, , tabIndex !== 2 && styles.hide]} />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentLayout}>
                    {getContent()[tabIndex]}
                </View>
            </>
        );
    }

    return (
        <View style={styles.root}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor='transparent'
            />
            {renderDashboard()}
            {renderTabs()}
            {renderModal()}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5',
    },
    imgBg: {
        width: '100%',
        paddingTop: 20,
    },
    bgImg: {
        resizeMode: 'stretch',
    },
    titleBar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 16,
    },
    iconMenu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginHorizontal: 16,
    },
    iconShare: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        position: 'absolute',
        right: 16,
    },
    infoLayout: {
        flexDirection: 'column',
        padding: 16,
    },
    avatarLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    avatarImg: {
        width: 86,
        height: 86,
        borderRadius: 48,
        backgroundColor: 'white',
    },
    iconAdd: {
        width: 24,
        height: 24,
        marginLeft: -20,
        marginBottom: 2,
    },
    nameLayout: {
        flexDirection: 'column',
        marginBottom: 16,
        marginLeft: 8,
    },
    nameTxt: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    idLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    idTxt: {
        fontSize: 14,
        color: 'white',
    },
    iconCode: {
        width: 12,
        height: 12,
        marginLeft: 4,
        tintColor: 'white',
    },
    descTxt: {
        fontSize: 16,
        color: 'white',
        marginLeft: 16,
        marginBottom: 8,
    },
    sexView: {
        marginTop: 6,
        width: 24,
        height: 18,
        backgroundColor: '#ffffff60',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginLeft: 16,
    },
    sexImg: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        tintColor: '#1876ff'
    },
    countLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 28,
    },
    itemLayout: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 16,
    },
    itemCount: {
        fontSize: 16,
        color: 'white',
    },
    itemLabel: {
        fontSize: 14,
        color: '#ffffffc0',
        marginTop: 3,
    },
    editButton: {
        width: 80,
        height: 32,
        borderRadius: 16,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editTxt: {
        fontSize: 14,
        color: '#ffffffE0'
    },
    settingButton: {
        width: 46,
        height: 32,
        borderRadius: 16,
        marginLeft: 12,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSetting: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    tabsLayout: {
        width: '100%',
        height: 46,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -12,
        paddingTop: 4,
    },
    tab: {
        flexDirection: 'column',
        width: 64,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#909090',
    },
    tabTxtSelected: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    tabLine: {
        width: 28,
        height: 2,
        backgroundColor: '#f05856',
        marginTop: 4,
    },
    hide: {
        backgroundColor: 'transparent'
    },
    contentLayout: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: '#FAFAFA',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 64,
    },
});
