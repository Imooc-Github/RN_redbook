import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, HTTPQuery } from '@eggjs/tegg';
import { HomeService } from '@/module/foo';

@HTTPController({
  path: '/home',
})
export class HomeController {
  @Inject()
  homeService: HomeService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'homeList',
  })
  async homeList(
    @HTTPQuery({ name: 'page' }) page: string,
    @HTTPQuery({ name: 'size' }) size: string
  ) {
    return await this.homeService.getHomeList(parseInt(page), parseInt(size));
  }
}
