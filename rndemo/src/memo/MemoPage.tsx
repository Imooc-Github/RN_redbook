
import React, { useState } from 'react';
import {
  View,
  Button
} from 'react-native';
import InfoView from './InfoView';
import InfoView2 from './InfoView2';
import ConsumeList from './ConsumeList';

import { avatarUri } from '../constants/Uri';

export default () => {

    const [info, setInfo] = useState<UserInfo>({
        avatar: '',
        name: '',
        desc: ''
    });

    return (
        <View style={{ width: '100%' }}>
            {/* <Button
                title='按钮'
                onPress={() => {
                    setInfo({
                        avatar: avatarUri,
                        name: '尼古拉斯·段坤',
                        desc: '各位产品经理大家好，我是个人开发者段坤，我学习RN两年半了，我喜欢安卓、RN、Flutter，Thank you!。'
                    });
                }}
            /> */}
            {/* <InfoView info={info} /> */}
            {/* <InfoView2 info={info} /> */}


            <ConsumeList/>
        </View>
    );
}