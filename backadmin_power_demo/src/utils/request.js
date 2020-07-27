import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth';
import md5 from "blueimp-md5";
import {toJson} from "@/utils/index";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    const locale = store.getters.currentLanguage;
    let uid = 0;
    let random = `${Math.random()}`.substring(2, 10);
    let timestamp = new Date().valueOf();
    let token = store.getters.token || getToken(); //若用户已登录，token用户的token，若无登录，为鉴权token
    let password = "brokersshow";
    let md5Code = md5(`${uid}-${token}-${timestamp}-${password}-${random}`);
    const apiPower = {
      // api接口验证
      locale,
      uid: uid,
      roleType: 1, //普通用户1 参展商客服2
      timestamp: timestamp, // 请求时间戳（毫秒级）
      password: password,
      random: random, //8位随机数
      md5: md5Code,
      token: token
    };
    config.headers = Object.assign(config.headers, apiPower);
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // if the custom code is not 20000, it is judged as an error.
    if (response.headers.connection) {
      // /mock的返回没有headers,真实后台才有
      const res = response.data;
      const subCode = res.subCode;
      if (res.code === 0) {
        if (subCode.substring(subCode.length - 1, subCode.length) !== "0") {
          // 最后一位是0表示成功查询
          return Promise.reject(res);
        }
        const bodyMessage = toJson(res.bodyMessage);
        return bodyMessage;
      } else {
        if (subCode === "00010" || subCode === "00009") {
          // 判断是否登录失效
          store.commit(types.SET_LOGIN_CLEAR);
          store.commit(types.SET_LOGIN_DIALOG_VISIBLE, true);
          window.location.href = "/login";
          // window.location.reload(); //刷新重新加载未登录数据
        }
        return Promise.reject(res);
      }
    } else {
      // mocks
      return response.data;
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
