import React from 'react';
import {
  StyleSheet,
  requireNativeComponent,
  ViewProps,
} from 'react-native';

type NativeInfoViewGroupType = ViewProps | {
    // 这部分是自定义的属性
};

const NativeInfoViewGroup = requireNativeComponent<NativeInfoViewGroupType>('NativeInfoViewGroup');

export default (props: any) => {

    const { children } = props;

    return (
        <NativeInfoViewGroup
            style={styles.infoView}
        >
            {children}
        </NativeInfoViewGroup>
    );
}

const styles = StyleSheet.create({
    infoView: {
        width: '100%',
        flexDirection: 'row',
    },
})