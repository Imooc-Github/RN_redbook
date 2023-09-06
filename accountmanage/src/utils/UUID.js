import 'react-native-get-random-values'
import { v4 } from 'uuid';

export const getUUID = () => {
    return v4();
}