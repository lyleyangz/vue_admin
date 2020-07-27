import dayjs from "dayjs";
import store from "../store";

/**
 * 秒转时分秒
 * */
export const formatSecond = (second) => {
  var days = parseInt(second / (1000 * 60 * 60 * 24));
  var hours = parseInt((second % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((second % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = (second % (1000 * 60)) / 1000;
  return `${days ? days + " 天 " : ""}${hours ? hours + " 小时 " : ""}  ${minutes ? minutes + " 分钟 " : ""}${
    seconds ? seconds + " 秒 " : ""
  }`;
};

/** 时间格式转换
 * @param {string}
 * @param {type}
 *   type == 1 ---> "{YYYY} MM-DDTHH:mm:ss SSS [Z] A"
 */
export const formatDate = (date, type = "YYYY-MM-DD HH:mm:ss") => {
  if (date) {
    return dayjs(date).format(type);
  }
  return dayjs().format(type);
};
/** 最近时间转换
 * val
 */
export const formatDateDay = (val) => {
  // 获取js 时间戳
  const currentTime = new Date().getTime();
  // 去掉 js 时间戳后三位，与php 时间戳保持一致
  const time = parseInt((currentTime - val) / 1000);
  // 存储转换值
  let s;
  if (time < 60) {
    // 十分钟内
    return "刚刚";
  } else if (time < 60 * 60 && time >= 60 * 10) {
    // 超过十分钟少于1小时
    s = Math.floor(time / 60);
    return s + "分钟前";
  } else if (time < 60 * 60 * 24 && time >= 60 * 60) {
    // 超过1小时少于24小时
    s = Math.floor(time / 60 / 60);
    return s + "小时前";
  } else if (time < 60 * 60 * 24 * 30 && time >= 60 * 60 * 24) {
    // 超过1天少于30天内
    s = Math.floor(time / 60 / 60 / 24);
    return s + "天前";
  } else {
    // 超过30天ddd
    const date = new Date(parseInt(date));
    return formatDate(val, "YYYY/MM/DD");
  }
};

export const formatTimeDay = (timestamp) => {
  function zeroize(num) {
    return (String(num).length === 1 ? "0" : "") + num;
  }

  var curTimestamp = parseInt(new Date().getTime() / 1000);

  var curDate = new Date(curTimestamp * 1000);
  var tmDate = new Date(timestamp);
  var Y = tmDate.getFullYear();
  var m = tmDate.getMonth() + 1;
  var d = tmDate.getDate();
  var H = tmDate.getHours();
  var i = tmDate.getMinutes();
  // var s = tmDate.getSeconds()
  if (curDate.getFullYear() === Y && curDate.getMonth() + 1 === m && curDate.getDate() === d) {
    return "今天" + zeroize(H) + ":" + zeroize(i);
  } else {
    var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
    if (newDate.getFullYear() === Y && newDate.getMonth() + 1 === m && newDate.getDate() === d) {
      return "昨天" + zeroize(H) + ":" + zeroize(i);
    } else {
      return Y + "-" + zeroize(m) + "-" + zeroize(d);
    }
  }
};
/**
 *  数字转千位K
 * @param str 数字
 * @returns {string}
 */
export const formatNumToThousand = (str) => {
  const num = Number(str);
  if (num < 1000) {
    return str;
  }
  return (num / 1000).toFixed(1) + "K";
};

/**
 * 判断空值
 */
export const isEmpty = (keys) => {
  if (typeof keys === "string") {
    keys = keys.replace(/"|&nbsp;|\\/g, "").replace(/(^\s*)|(\s*$)/g, "");
    if (keys === "" || keys == null || keys === "null" || keys === "undefined") {
      return true;
    } else {
      return false;
    }
  } else if (typeof keys === "undefined") {
    // 未定义
    return true;
  } else if (typeof keys === "number") {
    return false;
  } else if (typeof keys === "boolean") {
    return false;
  } else if (typeof keys === "object") {
    if (JSON.stringify(keys) === "{}") {
      return true;
    } else if (keys == null) {
      // null
      return true;
    } else {
      return false;
    }
  }

  if (keys instanceof Array && keys.length === 0) {
    // 数组
    return true;
  }
};

/**
 * 返回两位的小数的字符串
 */
export const toFixedNum = (num) => {
  const tonum = Number(num).toFixed(2);
  return tonum;
};

export const showMessage = () => {
  this.$message({
    showClose: true,
    message: "对不起，您暂无此操作权限~",
    type: "success"
  });
};

/**
 *
 */
export const trim = (val) => {
  return val.replace(/(^\s*)|(\s*$)/g, "");
};
/**
 * 动态插入css
 */
export const loadStyle = (url) => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
};

// 设置标签页title
export const setLabelTitle = (val) => {
  window.document.title = `${val}-汇课堂`;
};

// 是否全屏
export const checkFullScreen = () => {
  return (
    window.fullScreen ||
    document.fullscreen ||
    document.mozFullScreen ||
    document.webkitIsFullScreen ||
    document.webkitFullScreen ||
    document.msFullScreen
  );
};
// 是否为正整数
export const isInteger = (s) => {
  if (s === "") {
    return true;
  }
  const reg = /^[0-9]+$/;
  return reg.test(s);
};

export const setContentHeight = (that, ele, height) => {
  that.$nextTick(() => {
    ele.style.height = document.body.clientHeight - height + "px";
  });
};

// 函数防抖
let timeout;
export const debounce = (fn, wait = 0) => {
  if (timeout !== null) clearTimeout(timeout);
  timeout = setTimeout(fn, wait);
};

// 节流
export function throttle(fn, wait) {
  wait = wait || 0;
  let timerId;
  let lastTime = 0;

  function throttled() {
    const currentTime = new Date();
    if (currentTime >= lastTime + wait) {
      fn();
      lastTime = currentTime;
    } else {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      timerId = setTimeout(function () {
        fn();
      }, wait);
    }
  }

  return throttled;
}

// 转换json字符串
export const toJson = (str) => {
  if (Object.prototype.toString.call(str) === "[object String]") {
    if (str) {
      return eval("(" + str + ")");
    }
    return "";
  }
  return str;
};

// 计算用户等级进度
export const userLevelPercent = (val) => {
  if (val < 1500) {
    return (val / 1500) * 100;
  } else if (val < 5000) {
    return (val / 5000) * 100;
  }
  return 100;
};

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

export const getStore = (name) => {
  if (!name) return;
  let value = window.localStorage.getItem(name);
  if (value !== null) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  return "";
};

//导出
export const fileDownload = (data, fileName) => {
  const blob = new Blob([data], {
    type: "application/octet-stream"
  });
  const filename = fileName;
  if (typeof window.navigator.msSaveBlob !== "undefined") {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var blobURL = window.URL.createObjectURL(blob);
    var tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", filename);
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank");
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  }
};

// 加载微信sdk
export const loadWXJSSDK = () => {
  return new Promise((resolve, reject) => {
    let configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.src = "//res.wx.qq.com/open/js/jweixin-1.6.0.js";
    configScript.async = true;
    document.getElementsByTagName("head")[0].appendChild(configScript);
    configScript.onload = function () {
      resolve();
    };
    configScript.onerror = function () {
      reject("加载微信jssdk失败");
    };
  });
};


export const getAuthorizedBtn = (permissionList, page, btn) => {
  let flag = false;
  permissionList.forEach(item => {
    let authorizedPage = item.split(":")[0];
    let authorizedBtn = item.split(":")[1];
    if (authorizedPage === page && authorizedBtn === btn) {
      flag = true;
    }
  });
  return flag;
};
