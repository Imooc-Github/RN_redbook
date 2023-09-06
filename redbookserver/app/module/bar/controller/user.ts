import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, HTTPQuery } from '@eggjs/tegg';
import { LoginService } from '@/module/foo';

@HTTPController({
  path: '/user',
})
export class UserController {
  @Inject()
  loginService: LoginService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'login',
  })
  async login(
    @HTTPQuery({ name: 'name' }) name: string,
    @HTTPQuery({ name: 'pwd' }) pwd: string
  ) {
    return await this.loginService.getLoginUserInfo(name, pwd)
  }
}
