import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, HTTPQuery } from '@eggjs/tegg';
import { MessageService } from '@/module/foo';

@HTTPController({
  path: '/message',
})
export class MessageController {
  @Inject()
  messageService: MessageService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'messageList',
  })
  async messageList(
    @HTTPQuery({ name: 'page' }) page: string,
    @HTTPQuery({ name: 'size' }) size: string
  ) {
    return await this.messageService.getMessageList(parseInt(page), parseInt(size));
  }

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'unread',
  })
  async unread() {
    return await this.messageService.getUnRead();
  }
}
