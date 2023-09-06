
import React from 'react';
import {
  View,
  Button
} from 'react-native';

export default () => {

    const add = (n1: number, n2: number): number => {
        return n1 + n2;
    }

    const onButtonPress: () => void = () => {
        // number类型
        // const num1: number = 12;
        // const num2: number = 12.34;
        // console.log(num1 + num2);
        // console.log(add(7, 8));
        // console.log(add(7, '8'));
        // let num3: number = 5;
        // num3 = 'Hello';
        // console.log(num3);
        // const num4: Number = new Number(13);
        // console.log(num4.valueOf());

        // string类型
        // const s1: string = 'Hello';
        // const s2: string = "Hello";
        // const name: string = '张三';
        // const s4: string = `你好，我叫${name}`;
        // console.log(s4);
        // console.log(2 + '3');
        // console.log('2' + 3);
        // const s5 = new String('String对象');
        // console.log(s5.valueOf());

        // boolean类型
        // const b1: boolean = true;
        // const b2: boolean = false;
        // const s: string = '';
        // const b3: boolean = !!s;
        // console.log(b3);
        // const b4: boolean = undefined;
        // const b5: boolean = 4 > 5;
        // console.log(b5);
        // const b6: Boolean = new Boolean(4 > 5);
        // console.log(b6.valueOf());

        // 数组类型
        // const a1: number[] = [1, 2, 3, 4, 5];
        // const a2: Array<number> = [1, 2, 3, 4, 5];
        // console.log(a2);
        // const a3: Array<number> = new Array(5);
        // a3[1] = 12;
        // a3[2] = 23;
        // a3.push(100);
        // console.log(a3);
        // const a4: Array<number | string> = new Array();
        // a4.push(3);
        // a4.push('张三');
        // a4.push(true);

        // 元组类型
        // const t1: [string, number, boolean] = ['张三', 12, true];
        // console.log(t1);
        // console.log(t1[3]);
        // t1[4] = 100;
        // t1.push(100);
        // console.log(t1);

        // 枚举类型
        // enum Job {
        //     Teacher = 100,
        //     Programmer = 200,
        //     Cook = 300,
        // }
        // console.log(Job.Programmer);
        // enum City {
        //     NanJing = '南京',
        //     WuXi = '无锡',
        //     HangZhou = '杭州',
        // }
        // console.log(City.NanJing);

        // 联合类型
        // let arg: number | string = '1';
        // arg = 12;
        // arg = false;
        // const name: string | undefined | null = null;
        // type user = {
        //     name?: string;
        //     age?: number;
        //     speak?: () => void;
        // }
        // const u: user | undefined = {};
        // u?.speak?.();

        // 字面量
        // let sex: 'male' | 'female' = 'male';
        // console.log(sex);

        // 函数类型
        // const f1: () => void = () => {
        //     console.log('f1 ...');
        // }
        // f1();
        // const f2: (s: string) => void = (s: string) => {
        //     console.log(s);
        // }
        // f2('Hellow world');
        // console.log(add(2, 3));
        // const f3: (name: string, age?: number) => void = (name: string, age?: number) => {
        //     console.log(`我的名字叫${name}, 我今年${age || -1}岁`);
        // }
        // f3('张三');
        // const f4 = (name: string, age: number = 100) => {
        //     console.log(`我的名字叫${name}, 我今年${age}岁`);
        // }
        // f4('王武');

        // 类型文件和命名空间
        // const student: Student = {
        //     name: '张三',
        //     age: 12,
        //     hobby: ['唱歌', '跳舞', '打篮球'],
        // } as Student;
        // console.log(student);

        const dog: Info.Dog = {
            name: '大黄',
            age: 12,
            weight: 20,
        } as Info.Dog;
        console.log(dog);
    }

    return (
        <View>
            <Button
                title='按钮'
                onPress={onButtonPress}
            />
        </View>
    );
}