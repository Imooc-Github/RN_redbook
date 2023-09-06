import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native';
import InfoCard from "./InfoCard";

export default () => {

    const [levelUp, setLevelUp] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLevelUp(true);
        }, 2000);
    }, []);

    const getLevelView = () => (
        levelUp &&
        <Text style={{ fontSize: 24, color: 'green', marginVertical: 10 }}>
            {`等级：高级`}
        </Text>
    )

    const getListView = () => {
        const viewList = [];
        for(let i = 0; i < 5; i++) {
            viewList.push(<Text style={{ fontSize: 20, }}>{`List item ${i + 1}`}</Text>);
        }
        return viewList;
    }

    const array = ['AAA', 'BBB', 'CCC', 'DDD'];
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#F5F5F5' }}>
            <InfoCard
                name="张三"
                age={24}
                sex="男"
                levelView={getLevelView()}
            >
                <Text style={{ fontSize: 20, color: 'red', marginVertical: 10 }}>
                    {`爱好：唱、跳、RAP、篮球`}
                </Text>
            </InfoCard>

            <ScrollView>
                {getListView()}
            </ScrollView>
        </View>
    );
}