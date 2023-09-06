import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, HTTPQuery } from '@eggjs/tegg';
import { ArticleService } from '@/module/foo';

@HTTPController({
  path: '/article',
})
export class ArticleController {
  @Inject()
  articleService: ArticleService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'articleDetail',
  })
  async articleDetail(
    @HTTPQuery({ name: 'id' }) id: string,
  ) {
    return await this.articleService.getArticleDetail(parseInt(id));
  }
}
