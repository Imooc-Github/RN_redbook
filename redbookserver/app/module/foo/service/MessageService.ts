import { EggLogger } from 'egg';
import { SingletonProto, AccessLevel, Inject } from '@eggjs/tegg';
import messages from '../../../../config/messages';
import { sleep } from '@/module/utils/Sleep';

@SingletonProto({
  // 如果需要在上层使用，需要把 accessLevel 显示声明为 public
  accessLevel: AccessLevel.PUBLIC,
})
export class MessageService {

  @Inject()
  logger: EggLogger;

  @Inject()
  host: string;

  // 商品列表
  async getMessageList(page: number, size: number): Promise<MessageListItem[]> {
    await sleep(1000);
    if (size !== 10) {
        size = 10;
    }
    if (page === 1) {
        const sub = messages.slice(0, 10);
        return sub.map((item: MessageListItem) => {
            return {
                ...item,
                avatarUrl: `http://${this.host}/public${item.avatarUrl}`,
            };
        })
    } else if (page === 2) {
        const sub = messages.slice(10, 20);
        return sub.map((item: MessageListItem) => {
            return {
                ...item,
                avatarUrl: `http://${this.host}/public${item.avatarUrl}`,
            };
        })
    } else {
        return [];
    }
  }

  // 未读数量
  async getUnRead(): Promise<{unreadFavorate: number, newFollow: number, comment: number}> {
    await sleep(500);
    return {unreadFavorate: 118, newFollow: 12, comment: 64};
  }
}
