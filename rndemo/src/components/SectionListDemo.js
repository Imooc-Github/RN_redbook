import React, { useRef, useEffect, useSatte, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  RefreshControl,
  StatusBar
} from 'react-native';

import { SectionData } from '../constants/Data';

export default () => {

    const sectionListRef = useRef(null);

    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            // sectionListRef.current.scrollToLocation({
            //     sectionIndex: 1,
            //     itemIndex: 4,
            //     viewPosition: 0,
            //     animated: true,
            // });
        }, 2000);
    }, []);

    const renderItem = ({item, index, section}) => {
        return (
            <Text style={styles.txt}>{item}</Text>
        );
    };

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

    const renderSectionHeader = ({section}) => {
        return (
            <Text style={styles.sectionHeaderTxt}>{section.type}</Text>
        );
    }

    return (
        <View style={styles.root}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                animated={true}
                translucent={true}
                hidden={false}
            />
            <SectionList
                ref={sectionListRef}
                style={styles.sectionList}
                sections={SectionData}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item}-${index}`}
                contentContainerStyle={styles.containerStyle}
                showsVerticalScrollIndicator={false}
                onScroll={(event) => {
                    // console.log(event.nativeEvent.contentOffset.y);
                }}
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='handled'
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListFooter}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={() => 
                    <View style={styles.separator} />
                }
                stickySectionHeadersEnabled={true}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => {
                            console.log('onRefresh ...');
                            setRefreshing(true);
                            // do request new data
                            setTimeout(() => {
                                setRefreshing(false);
                            }, 1000);
                        }}
                    />
                }
                onEndReached={() => {
                    console.log('onEndReached ...');
                    // do request next page data
                }}
                onEndReachedThreshold={0.2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
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
        backgroundColor: '#0000ff80',
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
});
