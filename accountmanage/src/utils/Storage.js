import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (key, value) => {
    try {
        return await AsyncStorage.setItem(key, value);
    } catch(e) {
        console.log(e);
    }
}

export const load = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch(e) {
        console.log(e);
    }
}

export const remove = async (key) => {
    try {
        return await AsyncStorage.removeItem(key);
    } catch(e) {
        console.log(e);
    }
}