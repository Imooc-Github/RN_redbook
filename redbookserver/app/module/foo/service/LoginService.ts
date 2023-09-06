import { EggLogger } from 'egg';
import { SingletonProto, AccessLevel, Inject } from '@eggjs/tegg';
import { sleep } from '@/module/utils/Sleep';

@SingletonProto({
  // 如果需要在上层使用，需要把 accessLevel 显示声明为 public
  accessLevel: AccessLevel.PUBLIC,
})
export class LoginService {

  @Inject()
  logger: EggLogger;

  @Inject()
  host: string;

  // 登陆接口
  async getLoginUserInfo(name: string, pwd: string): Promise<any> {
    await sleep(1000);
    const find = WHITE_LIST.find((i: any) => i.name === name && i.pwd === pwd);
    this.logger.info(JSON.stringify(find));
    if (find) {
        return {
            name: find.name,
            avatar: `http://${this.host}/public${find.avatar}`,
            desc: find.desc,
            sex: find.sex,
            redBookId: find.redBookId,
            location: find.location,
            nickName: find.nickName,
        };
    } else {
        return null;
    }
  }
}

const WHITE_LIST = [
    {
        name: '18751609896',
        nickName: '大公爵',
        pwd: '123456',
        sex: 'male',
        redBookId: 118302851,
        avatar: `/avatar/avatar_39.png`,
        location: '江苏',
        desc: '大家好，我是大公爵，很高兴大家来参加我的课程，希望能帮助大家快速精通RN开发，挑战大厂高薪。',
    },
    {
        name: 'dagongjue',
        nickName: '大公爵',
        pwd: '123456',
        sex: 'male',
        redBookId: 118302851,
        avatar: `/avatar/avatar_35.png`,
        location: '上海',
        desc: '大家好，我是大公爵，很高兴大家来参加我的课程，希望能帮助大家快速精通RN开发，挑战大厂高薪。',
    },
    {
        name: '18818818188',
        nickName: '尼古拉斯·张三',
        pwd: '888888',
        sex: 'male',
        redBookId: 118098706,
        avatar: `/avatar/avatar_02.png`,
        location: '北京',
        desc: '大家好，我是张三，我学习RN两年半了。',
    },
    {
        name: '18626668866',
        nickName: '赫尔墨斯·李四',
        pwd: '666666',
        sex: 'female',
        redBookId: 116903456,
        avatar: `/avatar/avatar_03.png`,
        location: '云南',
        desc: '大家好，我是李四，我喜欢唱歌、跳舞、打篮球。',
    },
];