import { action, observable, flow } from "mobx";
import { request } from "../../utils/request"
import Loading from "../../components/widget/Loading";

export default class MineStore {

    @observable noteList: ArticleSimple[] = [];
    @observable collectionList: ArticleSimple[] = [];
    @observable favorateList: ArticleSimple[] = [];
    @observable refreshing: boolean = false;

    @observable info: any  = {};

    requestAll = async () => {
        Loading.show();
        this.refreshing = true;
        Promise.all([
            this.requestNoteList(),
            this.requestCollectionList(),
            this.requestFavorateList(),
            this.requestInfo(),
        ]).then(() => {
            Loading.hide();
            this.refreshing = false;
        });
    }

    requestNoteList = async () => {
        try {
            const { data } = await request('noteList', {});
            this.noteList = data || [];
        } catch (error) {
            console.log(error);
        }
    }

    requestCollectionList = async () => {
        try {
            const { data } = await request('collectionList', {});
            this.collectionList = data || [];
        } catch (error) {
            console.log(error);
        }
    }

    requestFavorateList = async () => {
        try {
            const { data } = await request('favorateList', {});
            this.favorateList = data || [];
        } catch (error) {
            console.log(error);
        }
    }

    requestInfo = async () => {
        try {
            const { data } = await request('accountInfo', {});
            this.info = data || {};
        } catch (error) {
            console.log(error);
        }
    }
}
