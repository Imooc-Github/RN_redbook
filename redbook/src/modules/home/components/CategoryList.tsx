import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import CategoryModal, { CategoryModalRef } from '../components/CategoryModal';

type Props = {
    categoryList: Category[];
    allCategoryList: Category[];
    onCategoryChange: (category: Category) => void;
};

import icon_arrow from '../../../assets/icon_arrow.png';

export default ({categoryList, allCategoryList, onCategoryChange}: Props) => {
    const modalRef = useRef<CategoryModalRef>(null);

    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        setCategory(categoryList.find(i => i.name === '推荐'));
    }, []);

    const onCategoryPress = (category: Category) => {
        setCategory(category);
        onCategoryChange?.(category);
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {categoryList.map((item: Category, index: number) => {
                    const isSelected = item.name === category?.name;
                    return (
                        <TouchableOpacity
                            key={`${item.name}`}
                            style={styles.tabItem}
                            onPress={() => onCategoryPress(item)}
                        >
                            <Text style={isSelected ? styles.tabItemTxtSelected : styles.tabItemTxt}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                    modalRef.current?.show();
                }}
            >
                <Image style={styles.openImg} source={icon_arrow} />
            </TouchableOpacity>

            <CategoryModal
                ref={modalRef}
                categoryList={allCategoryList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 36,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 6,
    },
    scrollView: {
        flex: 1,
        height: '100%',
    },
    openButton: {
        width: 40,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    openImg: {
        width: 18,
        height: 18,
        transform: [{rotate: '-90deg'}]
    },
    tabItem: {
        width: 64,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItemTxt: {
        fontSize: 16,
        color: '#999',
    },
    tabItemTxtSelected: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
});