import { EggLogger } from 'egg';
import { SingletonProto, AccessLevel, Inject } from '@eggjs/tegg';
import articles from '../../../../config/articles';
import { sleep } from '@/module/utils/Sleep';

@SingletonProto({
  // 如果需要在上层使用，需要把 accessLevel 显示声明为 public
  accessLevel: AccessLevel.PUBLIC,
})
export class HomeService {

  @Inject()
  logger: EggLogger;

  @Inject()
  host: string;

  // 首页文章列表
  async getHomeList(page: number, size: number): Promise<ArticleSimple[]> {
    await sleep(2000);
    if (size !== 10) {
        size = 10;
    }
    if (page === 1) {
        const sub = articles.slice(0, 10);
        return sub.map(item => {
            return {
                id: item.id,
                title: item.title,
                userName: item.userName,
                avatarUrl: `http://${this.host}/public${item.avatarUrl}`,
                favoriteCount: item.favoriteCount,
                isFavorite: item.isFavorite,
                image: `http://${this.host}/public${item.images[0]}`,
            };
        })
    } else if (page === 2) {
        const sub = articles.slice(10, 20);
        return sub.map(item => {
            return {
                id: item.id,
                title: item.title,
                userName: item.userName,
                avatarUrl: `http://${this.host}/public${item.avatarUrl}`,
                favoriteCount: item.favoriteCount,
                isFavorite: item.isFavorite,
                image: `http://${this.host}/public${item.images[0]}`,
            };
        })
    } else {
        return [];
    }
  }
}
