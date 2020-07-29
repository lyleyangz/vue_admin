import {weibo, qq, qqZone, douban, shareTitle} from "@/utils/env";
import * as mutils from "@/utils/mUtils";

function getParamsUrl(obj) {
  let paramsUrl = "";
  for (let key in obj) {
    paramsUrl += key + "=" + encodeURIComponent(obj[key]) + "&";
  }
  return paramsUrl;
}

export function shareConfig(type, obj) {
  let baseUrl = "";
  if (mutils.isEmpty(obj)) {
    obj = {};
  }
  switch (type) {
    case "weibo": {
      const weiboData = {
        url: obj.url, // 内容链接，默认当前页面location
        title: obj.shareTitle + "," + obj.summary + obj.url, // 可选参数, 默认当前页title
        pic: obj.pic, // 分享图片的路径(可选)，多张图片通过"||"分开。
        count: "y" /**是否显示分享数，y|n(可选)*/,
        searchPic: true // 是否要自动抓取页面上的图片。true|falsetrue:自动抓取,false:不自动抓取。
      };
      let opts = Object.assign(weiboData, obj);
      baseUrl = weibo.weiboUrl + "?appkey=" + weibo.weiboAppkey + getParamsUrl(opts);
      window.open(baseUrl, "_blank");
      break;
    }
    case "qq": {
      const qqData = {
        url: obj.url,
        title: obj.shareTitle,
        pics: obj.pic, //QZone接口暂不支持发送多张图片的能力，若传入多张图片，则会自动选入第一张图片作为预览图。
        source: obj.url, // 分享来源
        desc: obj.summary,
        summary: obj.summary //副标题
      };
      let opts = Object.assign(qqData, obj);
      baseUrl = qq.baseUrl + "?" + getParamsUrl(opts);
      window.open(baseUrl, "_blank");
      break;
    }

    case "qqZone": {
      const qqZoneData = {
        url: window.location.href,
        title: shareTitle,
        pics: qqZone.pic.split(","),
        sharesource: qqZone.sharesource, // 分享来源
        desc: qqZone.desc,
        summary: qqZone.summary
      };
      let opts = Object.assign(qqZoneData, obj);
      baseUrl = qqZone.baseUrl + "?" + getParamsUrl(opts);
      window.open(baseUrl, "_blank");
      break;
    }

    case "douban": {
      const doubanData = {
        href: window.location.href,
        name: shareTitle,
        image: douban.pic
      };
      let opts = Object.assign(doubanData, obj);
      baseUrl = douban.baseUrl + "?" + getParamsUrl(opts);
      window.open(baseUrl, "_blank");
      break;
    }
  }
}
