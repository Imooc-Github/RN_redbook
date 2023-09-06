import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum } from '@eggjs/tegg';
import { FavorateService } from '@/module/foo';

@HTTPController({
  path: '/mine',
})
export class FavorateController {
  @Inject()
  favorateService: FavorateService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'noteList',
  })
  async noteList() {
    return [];
  }

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'collectionList',
  })
  async collectionList() {
    return [];
  }

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'favorateList',
  })
  async favorateList() {
    return await this.favorateService.getFavorateList();
  }

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'accountInfo',
  })
  async accountInfo() {
    return await this.favorateService.getAccountInfo();
  }
}
