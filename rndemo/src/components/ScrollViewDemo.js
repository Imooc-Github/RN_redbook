import React, { useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default () => {

    const scrollViewRef = useRef(null);

    const buildListView = () => {
        const array = [];
        for(let i = 0; i < 20; i++) {
            array.push(
                <Text key={`item-${i}`} style={styles.txt}>{`List item ${i + 1}`}</Text>
            );
        }
        return array;
    }

    return (
        <ScrollView
            ref={scrollViewRef}
            style={styles.root}
            contentContainerStyle={styles.containerStyle}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='handled'
            onMomentumScrollBegin={() => {
                // console.log('onMomentumScrollBegin ...')
            }}
            onMomentumScrollEnd={() => {
                // console.log('onMomentumScrollEnd ...')
            }}
            onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset.y);
            }}
            scrollEventThrottle={16}
            overScrollMode='never'
            scrollEnabled={true}
            contentOffset={{ y: 100 }}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[1]}
        >
            <TextInput style={styles.input} />
            <Button title='按钮' onPress={() => {
                // scrollViewRef.current.scrollTo({y: 500, animated: true});
                scrollViewRef.current.scrollToEnd({animated: true});
            }} />
            {buildListView()}
        </ScrollView>
        // <ScrollView style={{ width: '100%', height: 200 }} horizontal={true} pagingEnabled={true}>
        //     <View style={{ width, height: 200, backgroundColor: 'red' }} />
        //     <View style={{ width, height: 200, backgroundColor: 'blue' }} />
        //     <View style={{ width, height: 200, backgroundColor: 'green' }} />
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    txt: {
        width: '100%',
        height: 56,
        textAlignVertical: 'center',
        fontSize: 24,
        color: 'black'
    },
    containerStyle: {
        paddingHorizontal: 16,
        backgroundColor: '#E0E0E0',
        paddingTop: 20,
    },
    input: {
        width: '100%',
        height: 60,
        backgroundColor: '#ff000050',
    },
});
