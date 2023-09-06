import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, HTTPQuery } from '@eggjs/tegg';
import { FollowService } from '@/module/foo';

@HTTPController({
  path: '/follow',
})
export class FollowController {
  @Inject()
  followService: FollowService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'articleList',
  })
  async articleList(
    @HTTPQuery({ name: 'page' }) page: string,
    @HTTPQuery({ name: 'size' }) size: string
  ) {
    return await this.followService.getArticleList(parseInt(page), parseInt(size));
  }
}
