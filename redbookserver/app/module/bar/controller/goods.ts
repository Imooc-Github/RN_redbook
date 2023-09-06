import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, HTTPQuery } from '@eggjs/tegg';
import { GoodsService } from '@/module/foo';

@HTTPController({
  path: '/goods',
})
export class GoodsController {
  @Inject()
  goodsService: GoodsService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'goodsList',
  })
  async goodsList(
    @HTTPQuery({ name: 'page' }) page: string,
    @HTTPQuery({ name: 'size' }) size: string
  ) {
    return await this.goodsService.getGoodsList(parseInt(page), parseInt(size));
  }

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'top10Category',
  })
  async top10Category() {
    return await this.goodsService.getTop10Category();
  }
}
