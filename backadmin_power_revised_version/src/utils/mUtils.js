import {setToken} from "@/utils/auth";
import dayjs from "dayjs";

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

/**
 * 获取localStorage
 */
export const getStore = name => {
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

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
/** 金额转换
 */
export const formatMoney = (num, decimals = 2, thousandsSep = "") => {
  if (isNaN(num) || num == 0) {
    num = "0.00";
  }
  let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals); // 保留的位数一定是有限位数的正整数
  let s = num.toString().replace(/,/g, ""); // 字符串，将，变成'';
  let p = parseFloat(s); // 解析一个字符串，并返回一个浮点数
  let n = isNaN(p) ? 1 : p;
  let formatNum = n
    .toFixed(prec)
    .toString()
    .replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
      return $1 + ",";
    });
  return num ? `${formatNum}${thousandsSep}` : "";
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
  // return dayjs().format(type);
  return "";
};
/** 最近时间转换
 * val
 */
export const formatDateDay = val => {
  //获取js 时间戳
  let currentTime = new Date().getTime();
  //去掉 js 时间戳后三位，与php 时间戳保持一致
  let time = parseInt((currentTime - val) / 1000);
  //存储转换值
  let s;
  if (time < 60) {
    //十分钟内
    return "刚刚";
  } else if (time < 60 * 60 && time >= 60 * 10) {
    //超过十分钟少于1小时
    s = Math.floor(time / 60);
    return s + "分钟前";
  } else if (time < 60 * 60 * 24 && time >= 60 * 60) {
    //超过1小时少于24小时
    s = Math.floor(time / 60 / 60);
    return s + "小时前";
  } else if (time < 60 * 60 * 24 * 30 && time >= 60 * 60 * 24) {
    //超过1天少于30天内
    s = Math.floor(time / 60 / 60 / 24);
    return s + "天前";
  } else {
    //超过30天ddd
    let date = new Date(parseInt(date));
    return formatDate(val, "YYYY/MM/DD");
  }
};
export const checkTitle = function(rule, value, callback) {
  if (value.match(/^[ ]*$/)) {
    return callback(new Error("标题内容不能为空格"));
  }
  const reg = /^.{0,50}$/;
  if (reg.test(value)) {
    callback();
  } else {
    return callback(new Error("分析方法名称不能超过50位"));
  }
};
export const checktecTag = function(rule, value, callback) {
  if (value.length > 4) {
    return callback(new Error("技术分析标签最多为4个"));
  }
};
export const formatTimeDay = timestamp => {
  function zeroize(num) {
    return (String(num).length == 1 ? "0" : "") + num;
  }

  var curTimestamp = parseInt(new Date().getTime() / 1000);

  var curDate = new Date(curTimestamp * 1000);
  var tmDate = new Date(timestamp);
  var Y = tmDate.getFullYear(),
    m = tmDate.getMonth() + 1,
    d = tmDate.getDate();
  var H = tmDate.getHours(),
    i = tmDate.getMinutes(),
    s = tmDate.getSeconds();
  if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
    return "今天" + zeroize(H) + ":" + zeroize(i);
  } else {
    var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
    if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
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
export const formatNumToThousand = str => {
  let num = Number(str);
  if (num < 1000) {
    return str;
  }
  return (num / 1000).toFixed(1) + "K";
};

/**
 * 判断空值
 */
export const isEmpty = keys => {
  if (typeof keys === "string") {
    keys = keys.replace(/"|&nbsp;|\\/g, "").replace(/(^\s*)|(\s*$)/g, "");
    if (keys == "" || keys == null || keys == "null" || keys === "undefined") {
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
  } else if (typeof keys == "object") {
    if (JSON.stringify(keys) == "{}") {
      return true;
    } else if (keys == null) {
      // null
      return true;
    } else {
      return false;
    }
  }

  if (keys instanceof Array && keys.length == 0) {
    // 数组
    return true;
  }
};

/**
 * 返回两位的小数的字符串
 */
export const toFixedNum = num => {
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
 * 读取base64
 */
export const readFile = file => {
  //var file = this.files[0];
  //判断是否是图片类型
  if (!/image\/\w+/.test(file.raw.type)) {
    alert("只能选择图片");
    return false;
  }
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e) {
    var filedata = {
      filename: file.name,
      filebase64: e.target.result
    };
    alert(e.target.result);
  };
};
/**
 *
 */
export const trim = val => {
  return val.replace(/(^\s*)|(\s*$)/g, "");
};
/**
 * 动态插入css
 */
export const loadStyle = url => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
};

//设置标签页title
export const setLabelTitle = val => {
  window.document.title = `${val}-汇课堂`;
};

//是否全屏
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
//是否为正整数
export const isInteger = s => {
  if (s === "") {
    return true;
  }
  let reg = /^[0-9]+$/;
  return reg.test(s);
};

export const setContentHeight = (that, ele, height) => {
  that.$nextTick(() => {
    ele.style.height = document.body.clientHeight - height + "px";
  });
};

export const changeLocale = type => {
  setToken("lang", type);
  this.$i18n.locale = type;
};

//函数防抖
let timeout;
export const debounce = (fn, wait = 0) => {
  if (timeout !== null) clearTimeout(timeout);
  timeout = setTimeout(fn, wait);
};

//节流
export function throttle(fn, wait) {
  wait = wait || 0;
  let timerId,
    lastTime = 0;

  function throttled() {
    let currentTime = new Date();
    if (currentTime >= lastTime + wait) {
      fn();
      lastTime = currentTime;
    } else {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      timerId = setTimeout(function() {
        fn();
      }, wait);
    }
  }

  return throttled;
}

//转换json字符串
export const toJson = str => {
  if (Object.prototype.toString.call(str) === "[object String]") {
    if (str) {
      return eval("(" + str + ")");
    }
    return "";
  }
  return str;
};

//计算用户等级进度
export const userLevelPercent = val => {
  if (val < 1500) {
    return (val / 1500) * 100;
  } else if (val < 5000) {
    return (val / 5000) * 100;
  }
  return 100;
};

/**
 * 限制输入框输入字符长度
 * @param {*} val
 * @param {*} limitLen
 */
export const limitInputCodeLen = (val = "", limitLen = 100) => {
  let codeLen = val.replace(/[\u4e00-\u9fa5]/g, "aa").length;
  return {
    bol: codeLen > limitLen,
    len: limitLen
  };
};
