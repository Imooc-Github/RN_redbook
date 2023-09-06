
import React, { useState } from 'react';
import {
  View,
  Button
} from 'react-native';

import { ThemeContext } from './ThemeContext';

import PageView from './PageView';

export default () => {

    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={theme}>
            <Button title='切换主题' onPress={() => {
                setTheme(state => {
                    if (state === 'dark') {
                        return 'light';
                    } else {
                        return 'dark';
                    }
                })
            }} />
            <View style={{ width: '100%' }}>
                <PageView />
            </View>
        </ThemeContext.Provider>
    );
}

