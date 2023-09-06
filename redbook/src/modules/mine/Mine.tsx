import React, { useEffect, useState, useCallback, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    LayoutChangeEvent,
    Dimensions,
    RefreshControl,
} from 'react-native'
import UserStore from '../../stores/UserStore';
import MineStore from './MineStore';
import { useLocalStore } from 'mobx-react';
import { observer } from 'mobx-react';
import Empty from '../../components/Empty';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Heart from '../../components/Heart';
import SideMenu, { SideMenuRef } from './SideMenu';

import icon_mine_bg from '../../assets/icon_mine_bg.png';
import icon_menu from '../../assets/icon_menu.png';
import icon_shop_car from '../../assets/icon_shop_car.png';
import icon_share from '../../assets/icon_share.png';
import icon_location_info from '../../assets/icon_location_info.png';
import icon_qrcode from '../../assets/icon_qrcode.png';
import icon_add from '../../assets/icon_add.png';
import icon_male from '../../assets/icon_male.png';
import icon_female from '../../assets/icon_female.png';
import icon_setting from '../../assets/icon_setting.png';
import icon_no_note from '../../assets/icon_no_note.webp';
import icon_no_collection from '../../assets/icon_no_collection.webp';
import icon_no_favorate from '../../assets/icon_no_favorate.webp';

const EMPTY_CONFIG = [
    {icon: icon_no_note, tips: '快去发布今日的好心情吧～'},
    {icon: icon_no_collection, tips: '快去收藏你喜欢的作品吧～'},
    {icon: icon_no_favorate, tips: '喜欢点赞的人运气不会太差哦～'},
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default observer(() => {
    const sideMenuRef = useRef<SideMenuRef>(null);

    const { userInfo } = UserStore;

    const store = useLocalStore(() => new MineStore());

    const [tabIndex, setTabIndex] = useState<number>(0);

    const [bgImgHeight, setBgImgHeight] = useState<number>(400);

    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        store.requestAll();
    }, []);

    const renderTitle = () => {
        const styles = StyleSheet.create({
            titleLayout: {
                width: '100%',
                height: 48,
                flexDirection: 'row',
                alignItems: 'center',
            },
            menuButton: {
                height: '100%',
                paddingHorizontal: 16,
                justifyContent: 'center',
            },
            menuImg: {
                width: 28,
                height: 28,
                resizeMode: 'contain',
            },
            rightMenuImg: {
                marginHorizontal: 12,
                tintColor: 'white',
            },
        })
        return (
            <View style={styles.titleLayout}>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => {
                        sideMenuRef.current?.show();
                    }}
                >
                    <Image style={styles.menuImg} source={icon_menu} />
                </TouchableOpacity>
                <View style={{ flex: 1, }} />
                <Image style={[styles.menuImg, styles.rightMenuImg]} source={icon_shop_car} />
                <Image style={[styles.menuImg, styles.rightMenuImg]} source={icon_share} />
            </View>
        );
    }

    const renderInfo = () => {
        const { avatar, nickName, redBookId, desc, sex } = userInfo;
        const styles = StyleSheet.create({
            avatarLayout: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'flex-end',
                padding: 16,
            },
            avatarImg: {
                width: 96,
                height: 96,
                resizeMode: 'cover',
                borderRadius: 48,
            },
            addImg: {
                width: 28,
                height: 28,
                marginLeft: -28,
                marginBottom: 2,
            },
            nameLayout: {
                marginLeft: 20,
            },
            nameTxt: {
                fontSize: 22,
                color: 'white',
                fontWeight: 'bold',
            },
            idLayout: {
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16,
                marginBottom: 20,
            },
            idTxt: {
                fontSize: 12,
                color: '#bbb',
            },
            qrcodeImg: {
                width: 12,
                height: 12,
                marginLeft: 6,
                tintColor: '#bbb'
            },
            descTxt: {
                fontSize: 14,
                color: 'white',
                paddingHorizontal: 16,
            },
            sexLayout: {
                width: 32,
                height: 24,
                backgroundColor: '#ffffff50',
                borderRadius: 12,
                marginTop: 12,
                marginLeft: 16,
                justifyContent: 'center',
                alignItems: 'center',
            },
            sexImg: {
                width: 12,
                height: 12,
                resizeMode: 'contain',
            },
            infoLayout: {
                width: '100%',
                paddingRight: 16,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 28,
            },
            infoItem: {
                alignItems: 'center',
                paddingHorizontal: 16,
            },
            infoValue: {
                fontSize: 18,
                color: 'white',
            },
            infoLabel: {
                fontSize: 12,
                color: '#ddd',
                marginTop: 6,
            },
            infoButton: {
                height: 32,
                paddingHorizontal: 16,
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 16,
            },
            editTxt: {
                fontSize: 14,
                color: '#ffffff'
            },
            settingImg: {
                width: 20,
                height: 20,
                tintColor: '#ffffff'
            },
        });
        const { info } = store;
        return (
            <View onLayout={(e: LayoutChangeEvent) => {
                const { height } = e.nativeEvent.layout;
                setBgImgHeight(height);
            }}>
                <View style={styles.avatarLayout}>
                    <Image style={styles.avatarImg} source={{uri: avatar}} />
                    <Image style={styles.addImg} source={icon_add} />
                    <View style={styles.nameLayout}>
                        <Text style={styles.nameTxt}>{nickName}</Text>
                        <View style={styles.idLayout}>
                            <Text style={styles.idTxt}>小红书号：{redBookId}</Text>
                            <Image style={styles.qrcodeImg} source={icon_qrcode} />
                        </View>
                    </View>
                </View>
                <Text style={styles.descTxt}>{desc}</Text>
                <View style={styles.sexLayout}>
                    <Image style={styles.sexImg} source={sex === 'male' ? icon_male : icon_female} />
                </View>
                <View style={styles.infoLayout}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoValue}>{info.followCount}</Text>
                        <Text style={styles.infoLabel}>关注</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoValue}>{info.fans}</Text>
                        <Text style={styles.infoLabel}>粉丝</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoValue}>{info.favorateCount}</Text>
                        <Text style={styles.infoLabel}>获赞与收藏</Text>
                    </View>

                    <View style={{ flex: 1,}}/>

                    <TouchableOpacity
                        style={styles.infoButton}
                    >
                        <Text style={styles.editTxt}>编辑资料</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.infoButton}
                    >
                        <Image style={styles.settingImg} source={icon_setting} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const renderTabs = () => {
        const styles = StyleSheet.create({
            titleLayout: {
                width: '100%',
                height: 48,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                paddingHorizontal: 16,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
            },
            icon: {
                width: 28,
                height: 28,
            },
            line: {
                width: 28,
                height: 2,
                backgroundColor: '#ff2442',
                borderRadius: 1,
                position: 'absolute',
                bottom: 6,
            },
            tabButton: {
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 14,
            },
            tabTxt: {
                fontSize: 17,
                color: '#999',
            },
            tabTxtSelected: {
                fontSize: 17,
                color: '#333',
            },
        });
        return (
            <View style={styles.titleLayout}>
                <TouchableOpacity
                    style={styles.tabButton}
                    onPress={() => {
                        setTabIndex(0);
                    }}
                >
                    <Text style={tabIndex === 0 ? styles.tabTxtSelected : styles.tabTxt}>笔记</Text>
                    {tabIndex === 0 && <View style={styles.line} />}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabButton}
                    onPress={() => {
                        setTabIndex(1);
                    }}
                >
                    <Text style={tabIndex === 1 ? styles.tabTxtSelected : styles.tabTxt}>收藏</Text>
                    {tabIndex === 1 && <View style={styles.line} />}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabButton}
                    onPress={() => {
                        setTabIndex(2);
                    }}
                >
                    <Text style={tabIndex === 2 ? styles.tabTxtSelected : styles.tabTxt}>赞过</Text>
                    {tabIndex === 2 && <View style={styles.line} />}
                </TouchableOpacity>
            </View>
        );
    }

    const onArticlePress = useCallback((article: ArticleSimple) => () => {
        navigation.push('ArticleDetail', {id: article.id})
    }, []);

    const renderList = () => {
        const {
            noteList, collectionList, favorateList, 
        } = store;
        const currentList = [noteList, collectionList, favorateList][tabIndex];
        if (!currentList?.length) {
            const config = EMPTY_CONFIG[tabIndex];
            return <Empty icon={config.icon} tips={config.tips} />
        }
        const styles = StyleSheet.create({
            listContainer: {
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                backgroundColor: 'white',
            },
            item: {
                width: SCREEN_WIDTH - 18 >> 1,
                backgroundColor: 'white',
                marginLeft: 6,
                marginBottom: 6,
                borderRadius: 8,
                overflow: 'hidden',
                marginTop: 8,
            },
            titleTxt: {
                fontSize: 14,
                color: '#333',
                marginHorizontal: 10,
                marginVertical: 4,
            },
            nameLayout: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                marginBottom: 10,
            },
            avatarImg: {
                width: 20,
                height: 20,
                resizeMode: 'cover',
                borderRadius: 10,
            },
            nameTxt: {
                fontSize: 12,
                color: '#999',
                marginLeft: 6,
                flex: 1,
            },
            heart: {
                width: 20,
                height: 20,
                resizeMode: 'contain',
            },
            countTxt: {
                fontSize: 14,
                color: '#999',
                marginLeft: 4,
            },
            itemImg: {
                width: SCREEN_WIDTH - 18 >> 1,
                height: 240,
            },
        })
        return (
            <View style={styles.listContainer}>
                {currentList.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={`${item.id}-${index}`}
                            style={styles.item}
                            onPress={onArticlePress(item)}
                        >
                            <Image style={styles.itemImg} source={{uri: item.image }} />
                            <Text style={styles.titleTxt}>{item.title}</Text>
                            <View style={styles.nameLayout}>
                                <Image style={styles.avatarImg} source={{ uri: item.avatarUrl }} />
                                <Text style={styles.nameTxt}>{item.userName}</Text>
                                <Heart
                                    value={item.isFavorite}
                                    onValueChanged={(value: boolean) => {
                                        console.log(value);
                                    }}
                                />
                                <Text style={styles.countTxt}>{item.favoriteCount}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    return (
        <View style={styles.root}>
            <Image
                style={[styles.bgImg, { height: bgImgHeight + 64 }]}
                source={icon_mine_bg}
            />
            {renderTitle()}
            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={store.refreshing}
                        onRefresh={store.requestAll}
                    />
                }
            >
                {renderInfo()}
                {renderTabs()}
                {renderList()}
            </ScrollView>
            <SideMenu ref={sideMenuRef} />
        </View>
    );
})

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    bgImg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 400,
    },
    scrollView: {
        width: '100%',
        flex: 1,
    },
})