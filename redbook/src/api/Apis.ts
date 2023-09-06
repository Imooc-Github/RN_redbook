const apiConfig = {
    login: {
        url: '/user/login',
        method: 'get',
    },
    homeList: {
        url: '/home/homeList',
        method: 'get',
    },
    articleDetail: {
        url: '/article/articleDetail',
        method: 'get',
    },
    goodsList: {
        url: '/goods/goodsList',
        method: 'get',
    },
    top10Category: {
        url: '/goods/top10Category',
        method: 'get',
    },
    messageList: {
        url: '/message/messageList',
        method: 'get',
    },
    unread: {
        url: '/message/unread',
        method: 'get',
    },
    accountInfo: {
        url: '/mine/accountInfo',
        method: 'get',
    },
    noteList: {
        url: '/mine/noteList',
        method: 'get',
    },
    collectionList: {
        url: '/mine/collectionList',
        method: 'get',
    },
    favorateList: {
        url: '/mine/favorateList',
        method: 'get',
    },
}

export default apiConfig;