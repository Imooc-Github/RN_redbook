import React, { useState, forwardRef, useImperativeHandle, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
    ScrollView,
    Dimensions,
    LayoutAnimation,
} from 'react-native'
import { remove } from '../../utils/Storage';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import icon_setting from '../../assets/icon_setting.png';
import icon_service from '../../assets/icon_service.png';
import icon_scan from '../../assets/icon_scan.png';

import icon_fid_user from '../../assets/icon_find_user.png';
import icon_draft from '../../assets/icon_draft.png';
import icon_create_center from '../../assets/icon_create_center.png';
import icon_browse_histroy from '../../assets/icon_browse_history.png';
import icon_packet from '../../assets/icon_packet.png';
import icon_free_net from '../../assets/icon_free_net.png';
import icon_nice_goods from '../../assets/icon_nice_goods.png';
import icon_orders from '../../assets/icon_orders.png';
import icon_shop_car from '../../assets/icon_shop_car.png';
import icon_coupon from '../../assets/icon_coupon.png';
import icon_wish from '../../assets/icon_wish.png';
import icon_red_vip from '../../assets/icon_red_vip.png'
import icon_community from '../../assets/icon_community.png';
import icon_exit from '../../assets/icon_exit.png';

const MENUS = [
    [
        {icon: icon_fid_user, name: '发现好友'},
    ],
    [
        {icon: icon_draft, name: '我的草稿'},
        {icon: icon_create_center, name: '创作中心'},
        {icon: icon_browse_histroy, name: '浏览记录'},
        {icon: icon_packet, name: '钱包'},
        {icon: icon_free_net, name: '免流量'},
        {icon: icon_nice_goods, name: '好物体验'},
    ],
    [
        {icon: icon_orders, name: '订单'},
        {icon: icon_shop_car, name: '购物车'},
        {icon: icon_coupon, name: '卡券'},
        {icon: icon_wish, name: '心愿单'},
        {icon: icon_red_vip, name: '小红书会员'},
    ],
    [
        {icon: icon_community, name: '社区公约'},
        {icon: icon_exit, name: '退出登陆'}
    ],
];

const BOTTOM_MENUS = [
    {icon: icon_setting, txt: '设置'},
    {icon: icon_service, txt: '帮助与客服'},
    {icon: icon_scan, txt: '扫一扫'},
];

export interface SideMenuRef {
    show: () => void;
    hide: () => void;
}

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const ContentWidth = SCREEN_WIDTH * 0.75;

export default forwardRef((props: any, ref) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const navigation = useNavigation<StackNavigationProp<any>>();

    const show = () => {
        setVisible(true);
        setTimeout(() => {
            LayoutAnimation.easeInEaseOut();
            setOpen(true);
        }, 100);
    }

    const hide = () => {
        LayoutAnimation.easeInEaseOut();
        setOpen(false);
        setTimeout(() => {
            setVisible(false);
        }, 300);
    }

    useImperativeHandle(ref, () => {
        return {
            show, hide,
        }
    });

    const onMenuItemPress = useCallback((item: any) => async () => {
        if (item.name === '退出登陆') {
            hide();
            await remove('userInfo');
            navigation.reset({
                index: 0,
                routes: [{name: 'Login'}]
            });
        }
    }, []);

    const renderContent = () => {
        return (
            <View style={[styles.content, { marginLeft: open ? 0 : -ContentWidth }]}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    {MENUS.map((item, index) => {
                        return (
                            <View
                                key={`${index}`}
                            >
                                {item.map((subItem, subIndex) => {
                                    return (
                                        <TouchableOpacity
                                            key={`${index}-${subIndex}`}
                                            style={styles.menuItem}
                                            onPress={onMenuItemPress(subItem)}
                                        >
                                            <Image style={styles.menuItemIcon} source={subItem.icon} />
                                            <Text style={styles.menuItemTxt}>{subItem.name}</Text>
                                        </TouchableOpacity>
                                    );
                                })}

                                {index !== MENUS.length - 1 && <View style={styles.divideLine} />}
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={styles.bottomLayout}>
                    {BOTTOM_MENUS.map(item => {
                        return (
                            <TouchableOpacity
                                key={`${item.txt}`}
                                style={styles.bottomMenuItem}
                            >
                                <View style={styles.bottomMenuIconWrap}>
                                    <Image style={styles.bottomMenuIcon} source={item.icon} />
                                </View>
                                <Text style={styles.bottomMenuTxt}>{item.txt}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
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
            <TouchableOpacity
                style={styles.root}
                onPress={hide}
                activeOpacity={1}
            >
                {renderContent()}
            </TouchableOpacity>
        </Modal>
    );
})

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000C0',
        flexDirection: 'row',
    },
    content: {
        height: '100%',
        width: ContentWidth,
        backgroundColor: 'white',
    },
    scrollView: {
        width: '100%',
        flex: 1,
    },
    bottomLayout: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 20,
    },
    bottomMenuItem: {
        flex: 1,
        alignItems: 'center',
    },
    bottomMenuIconWrap: {
        width: 44,
        height: 44,
        backgroundColor: '#f0f0f0',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomMenuIcon: {
        width: 26,
        height: 26,
    },
    bottomMenuTxt: {
        fontSize: 13,
        color: '#666',
        marginTop: 8,
    },
    divideLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#eee',
    },
    menuItem: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemIcon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
    menuItemTxt: {
        fontSize: 16,
        color: '#333',
        marginLeft: 14,
    },
    container: {
        paddingTop: 72,
        paddingHorizontal: 28,
        paddingBottom: 12,
    },
});

