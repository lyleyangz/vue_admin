import * as types from "../types";
import {getStore, setStore} from "@/utils/mUtils";
const permission = {
  state: {
    rightMenu: {
      visible: true
    },
    router: {
      prev: ""
    },
    search: {
      text: "",
      articleList: [],
      videoList: [],
      articleCount: 0,
      videoCount: 0,
      total: 0
    },
    article: {
      chapterList: []
    },
    recentLearn: {
      article: [],
      video: []
    },
    clientType: 1,
    contentId: 0,
    contentType: 1,
    language: "zh_CN",
    loginDialogVisible: false,
    favorite: {
      article: getStore("articleFavoriteList") || [],
      video: getStore("videoFavoriteList") || []
    },
    areaList: [],
    langList: [],
    region: getStore("currentRegion") || "CN"
  },
  getters: {
    rightMenuVisible: state => state.rightMenu.visible, // 右侧菜单是否显示
    prevRouter: state => state.router.prev, // 获取上一页路由
    searchText: state => state.search.text, //顶部搜索框值
    searchArticleList: state => state.search.articleList, //搜索的文章top4
    searchVideoList: state => state.search.videoList, //搜索的视频top3
    searchArticleCount: state => state.search.articleCount, //总的文章数
    searchVideoCount: state => state.search.videoCount, //总的视频数
    searchCountTotal: state => state.search.total, //视频文章加起来的总数
    getChapterList: state => state.article.chapterList, //文章列表
    topMenuRecentLearn: state => state.recentLearn, //最近学习
    currentLanguage: state => state.language, //当前语言
    loginDialogVisible: state => state.loginDialogVisible, //登录弹窗状态
    currentFavoriteList: state => state.favorite,
    getClienType: state => state.clientType, //获取手机类型
    getContentId: state => state.contentId, //获取内容id
    getContentType: state => state.contentType, //获取内容类型
    currentRegion: state => state.region, //当前条件地区
    getTranslateLangList: state => {
      // 获取用于翻译的语言列表
      let list = state.langList.map(item => {
        item.locale.indexOf("zh") === -1 && (item.locale = item.locale.slice(0, 2));
        return item;
      });
      return list;
    }
  },
  actions: {},
  mutations: {
    [types.SET_RIGHT_MENU_VISIBLE]: (state, visible) => {
      state.rightMenu.visible = visible; // 设置右侧菜单是否显示
    },
    [types.SET_ROUTER_PREV]: (state, value) => {
      state.router.prev = value; //记录上一页路由
    },
    [types.SET_SEARCH_ALL_LIST]: (state, data) => {
      state.search.articleList = data.articleList;
      state.search.videoList = data.videoList;
      state.search.articleCount = data.articleCount;
      state.search.videoCount = data.videoCount;
      state.search.total = data.total;
    },
    [types.SET_ARTICLE_CHAPTERLIST]: (state, data) => {
      state.article.chapterList = data; //设置章节列表
    },
    [types.SET_RECENT_LEARN]: (state, data) => {
      //设置导航最近学习文章视频
      state.recentLearn.article = data.article || [];
      state.recentLearn.video = data.video || [];
    },
    [types.SET_LOGIN_DIALOG_VISIBLE]: (state, visible) => {
      //设置设置弹出登录框
      state.loginDialogVisible = visible;
    },
    [types.SET_FAVORITE_LIST]: (state, params) => {
      //设置更新后的收藏
      state.favorite[params.type] = params.value;
    },
    [types.SET_CURRENT_LANGUAGE]: (state, val) => {
      setStore("currentLanguage", val);
      state.language = val; //设置當前語言
    },
    [types.SET_CURRENT_REGION]: (state, val) => {
      setStore("currentRegion", val);
      state.region = val; //设置當前語言
    },
    [types.SET_CLIENTTYPE]: (state, val) => {
      state.clientType = val; //设置手机类型
    },
    [types.SET_CONTENTID]: (state, val) => {
      state.contentId = val; //设置手机类型
    },
    [types.SET_CONTENTTYPE]: (state, val) => {
      state.contentType = val; //设置手机类型
    },
    [types.SET_AREALIST]: (state, val) => {
      state.areaList = val; //获取地区
    },
    [types.SET_LANGLIST]: (state, val) => {
      state.langList = val; //设置语言列表
    }
  }
};

export default permission;
