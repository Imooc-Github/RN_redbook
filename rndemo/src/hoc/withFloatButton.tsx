import React, { useEffect } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

type IReactComponent = 
    React.ClassicComponentClass
    | React.ComponentClass
    | React.FunctionComponent
    | React.ForwardRefExoticComponent<any>;

import icon_add from '../assets/images/icon_add.png';

export default <T extends IReactComponent>(OriginView: T, type: string): T => {

    const HOCView = (props: any) => {

        useEffect(() => {
            reportDeviceInfo();
        }, []);

        const reportDeviceInfo = () => {
            // 模拟上报
            const deviceInfo = {
                deviceId: 1,
                deviceName: '',
                modal: '',
                storage: 0,
                ip: '',
            };

            // reportDeviceInfo(deviceInfo);
        }

        return (
            <>
                <OriginView {...props} />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        console.log(`onPress ...`);
                    }}
                >
                    <Image style={styles.addImg} source={icon_add} />
                </TouchableOpacity>
            </>
        );
    }

    return HOCView as T;
}

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        bottom: 80,
        right: 28,
    },
    addImg: {
        width: 54,
        height: 54,
        resizeMode: 'contain',
    },
});
