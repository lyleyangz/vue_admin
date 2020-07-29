import request from "@/utils/axios";

//获取语言列表
export function getLanguageList() {
  return request({
    url: "/common/getLanguageList",
    method: "get"
  });
}
//获取地区
export function getAreaList(params) {
  return request({
    url: "/userWeb/getAreaList",
    method: "get",
    params
  });
}
//获取语言列表
export function getLangList() {
  return request({
    url: "/tagWeb/getLocaleList",
    method: "get",
    baseURL: "/content"
  });
}

//翻译-谷歌翻译
export function googleTranslate(data) {
  return request({
    url: "/userWeb/googleTranslate",
    method: "post",
    data
  });
}
