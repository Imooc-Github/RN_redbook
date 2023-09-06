import { action, observable, flow } from "mobx";
import { request } from "../../utils/request"
import Loading from "../../components/widget/Loading";

const SIZE = 10;
export default class MessageStore {

    page: number = 1;

    @observable messageList: MessageListItem[] = [];

    @observable refreshing: boolean = false;

    @observable unread: UnRead  = {} as UnRead;

    @action
    resetPage = () => {
        this.page = 1;
    }

    requestMessageList = async () => {
        if (this.refreshing) {
            return;
        }
        Loading.show();
        try {
            this.refreshing = true;
            const params = {
                page: this.page,
                size: SIZE,
            };
            const { data } = await request('messageList', params);
            if (data?.length) {
                if (this.page === 1) {
                    this.messageList = data;
                } else {
                    this.messageList = [...this.messageList, ...data];
                }
                this.page = this.page + 1;
            } else {
                if (this.page === 1) {
                    this.messageList = [];
                } else {
                    // 已经加载完了，没有更多数据
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            this.refreshing = false;
            Loading.hide();
        }
    }

    @action
    requestUnRead =flow(function* (this: MessageStore) {
        try {
            const { data } = yield request('unread', {});
            this.unread = data || {};
        } catch (error) {
            console.log(error);
        }
    })
}
