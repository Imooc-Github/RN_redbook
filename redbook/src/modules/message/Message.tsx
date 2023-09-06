import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    GestureResponderEvent
} from 'react-native'
import { useLocalStore } from 'mobx-react';
import MessageStore from "./MessageStore";
import { observer } from 'mobx-react';
import FloatMenu, { FloatMenuRef } from './FloatMenu';
import Empty from '../../components/Empty';

import icon_star from '../../assets/icon_star.png';
import icon_new_follow from '../../assets/icon_new_follow.png';
import icon_comments from '../../assets/icon_comments.png';
import icon_group from '../../assets/icon_group.png';
import icon_to_top from '../../assets/icon_to_top.png';
import icon_no_collection from '../../assets/icon_no_collection.webp';

export default observer(() => {

    const store = useLocalStore(() => new MessageStore());

    const ref = useRef<FloatMenuRef>(null);

    useEffect(() => {
        store.requestMessageList();
        store.requestUnRead();
    }, []);

    const renderTitle = () => {
        return (
            <View style={styles.titleLayout}>
                <Text style={styles.titleTxt}>消息</Text>
                <TouchableOpacity
                    style={styles.groupButton}
                    onPress={(event: GestureResponderEvent) => {
                        const { pageY } = event.nativeEvent;
                        ref.current?.show(pageY + 48);
                    }}
                >
                    <Image style={styles.iconGroup} source={icon_group} />
                    <Text style={styles.groupTxt}>群聊</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderItem = ({item, index}: {item: MessageListItem, index: number}) => {
        const styles = StyleSheet.create({
            item: {
                width: '100%',
                height: 80,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
            },
            avatarImg: {
                width: 48,
                height: 48,
                borderRadius: 24,
                resizeMode: 'cover',
            },
            contentLayout: {
                flex: 1,
                marginHorizontal: 12,
            },
            nameTxt: {
                fontSize: 18,
                color: '#333',
                fontWeight: 'bold',
            },
            lastMessageTxt: {
                fontSize: 15,
                color: '#999',
                marginTop: 4,
            },
            rightLayout: {
                alignItems: 'flex-end',
            },
            timeTxt: {
                fontSize: 12,
                color: '#999',
            },
            iconTop: {
                width: 8,
                height: 16,
                marginTop: 6,
                resizeMode: 'contain',
            },
        });
        return (
            <View style={styles.item}>
                <Image style={styles.avatarImg} source={{ uri: item.avatarUrl }} />
                <View style={styles.contentLayout}>
                    <Text style={styles.nameTxt}>{item.name}</Text>
                    <Text style={styles.lastMessageTxt}>{item.lastMessage}</Text>
                </View>
                <View style={styles.rightLayout}>
                    <Text style={styles.timeTxt}>{item.lastMessageTime}</Text>
                    <Image style={styles.iconTop} source={icon_to_top} />
                </View>
            </View>
        );
    }

    const UnRead = ({count}: {count: number}) => {
        const styles = StyleSheet.create({
            txt: {
                position: 'absolute',
                top: -6,
                right: -10,
                backgroundColor: '#ff2442',
                paddingHorizontal: 8,
                height: 24,
                borderRadius: 12,
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 12,
                color: 'white',
            },
        });
        return (
            <Text style={styles.txt}>{count > 99 ? '99+' : count}</Text>
        );
    }

    const Header = () => {
        const {unread} = store;
        const styles = StyleSheet.create({
            headerLayout: {
                paddingHorizontal: 16,
                flexDirection: 'row',
                paddingVertical: 20,
            },
            headerItem: {
                flex: 1,
                alignItems: 'center',
            },
            itemImg: {
                width: 60,
                height: 60,
                resizeMode: 'contain',
            },
            itemTxt: {
                fontSize: 16,
                color: '#333',
                marginTop: 8,
            },
        });
        return (
            <View style={styles.headerLayout}>
                <View style={styles.headerItem}>
                    <View>
                        <Image style={styles.itemImg} source={icon_star} />
                        {!!unread?.unreadFavorate && <UnRead count={unread?.unreadFavorate} />}
                    </View>
                    <Text style={styles.itemTxt}>赞和收藏</Text>
                </View>
                <View style={styles.headerItem}>
                    <View>
                        <Image style={styles.itemImg} source={icon_new_follow} />
                        {!!unread?.newFollow && <UnRead count={unread?.newFollow} />}
                    </View>
                    <Text style={styles.itemTxt}>新增关注</Text>
                </View>
                <View style={styles.headerItem}>
                    <View>
                        <Image style={styles.itemImg} source={icon_comments} />
                        {!!unread?.comment && <UnRead count={unread?.comment} />}
                    </View>
                    <Text style={styles.itemTxt}>评论和@</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.root}>
            {renderTitle()}
            <FlatList
                style={{ flex: 1, }}
                data={store.messageList}
                extraData={[store.unread]}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                ListHeaderComponent={<Header />}
                ListEmptyComponent={<Empty icon={icon_no_collection} tips="暂无消息" />}
            />
            <FloatMenu ref={ref} />
        </View>
    );
})

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    titleLayout: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleTxt: {
        fontSize: 18,
        color: '#333',
    },
    groupButton: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 16,
    },
    iconGroup: {
        width: 16,
        height: 16,
    },
    groupTxt: {
        fontSize: 14,
        color: '#333',
        marginLeft: 6,
    },
})