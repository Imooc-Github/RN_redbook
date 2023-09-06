import React from "react";
import { View, Text } from 'react-native';

class ClassView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            address: "江苏省南京市",
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                address: "浙江省杭州市",
            });
        }, 2000);
    }

    render() {
        const { name, age, level, sex } = this.props;
        const { address } = this.state;

        return (
            <View style={{ width: '100%', height: 200, backgroundColor: '#00bcd4' }}>
                <Text style={{ fontSize: 20, color: 'white' }}>
                    {`name=${name}, age=${age}, level=${level}, sex=${sex}`}
                </Text>
                <Text style={{ fontSize: 20, color: 'black' }}>{address}</Text>
            </View>
        );
    }
}

export default ClassView;