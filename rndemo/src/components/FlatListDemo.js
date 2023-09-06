import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';

const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
];

export default () => {

    const flatListRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            // flatListRef.current.scrollToIndex({
            //     index: 10,
            //     viewPosition: 0.5,
            //     animated: true,
            // });

            // flatListRef.current.scrollToItem({
            //     item: 5,
            //     viewPosition: 0,
            //     animated: true,
            // });

            // flatListRef.current.scrollToOffset({
            //     offset: 200,
            // });

            flatListRef.current.scrollToEnd({
                animated: true,
            });
        }, 2000);
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <Text style={styles.txt}>{`List item ${item}`}</Text>
        );
    }

    const renderItem2 = ({ item, index }) => {
        return (
            <Text style={styles.txt2}>{`List item ${item}`}</Text>
        );
    }

    const ListHeader = (
        <View style={styles.header}>
            <Text style={styles.extraTxt}>列表头部</Text>
        </View>
    );

    const ListFooter = (
        <View style={[styles.header, styles.footer]}>
            <Text style={styles.extraTxt}>列表尾部</Text>
        </View>
    );

    const ListEmpty = (
        <View style={styles.listEmpty}>
            <Text style={styles.extraTxt}>暂时无数据哦～</Text>
        </View>
    );

    return (
        <FlatList
            ref={flatListRef}
            style={styles.flatlist}
            data={data}
            renderItem={renderItem}
            keyExtractor={(_, index) => `item-${index}`}
            contentContainerStyle={styles.containerStyle}
            showsVerticalScrollIndicator={false}
            onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset.y);
            }}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='handled'
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
            ListEmptyComponent={ListEmpty}
            ItemSeparatorComponent={
                <View style={styles.separator} />
            }
            initialNumToRender={15}
            inverted={false}
            // numColumns={1}
            // onViewableItemsChanged={(info) => {
            //     const { viewableItems } = info;
            //     console.log(viewableItems);
            // }}
        />

        // <FlatList
        //     style={styles.flatlist}
        //     data={data}
        //     renderItem={renderItem2}
        //     keyExtractor={(_, index) => `item-${index}`}
        //     horizontal={true}
        //     showsHorizontalScrollIndicator={false}
        // />
    );
}

const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        height: '100%',
    },
    txt: {
        width: '100%',
        height: 56,
        fontSize: 24,
        color: 'black',
        textAlignVertical: 'center',
    },
    txt2: {
        width: 200,
        height: 200,
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    containerStyle: {
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: '#F5F5F5'
    },
    header: {
        width: '100%',
        height: 48,
        backgroundColor: '#00ff0030',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        backgroundColor: '#ff000030',
    },
    listEmpty: {
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    extraTxt: {
        fontSize: 20,
        color: '#666666',
        textAlignVertical: 'center',
    },
    separator: {
        width:'100%',
        height: 2,
        backgroundColor: '#D0D0D0',
    },
});
