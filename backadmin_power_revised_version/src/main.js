import Vue from "vue";

import Cookies from "js-cookie";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import Element from "element-ui";

import App from "./App";
import store from "./store";
import router from "./router";

import "./icons"; // icon
import "./permission"; // permission control
import "./utils/error-log"; // error log
import "@/style/index.less";
import * as filters from "./filters"; // global filters
import container from "@/layout/container";
import {MessageBox} from "element-ui";
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
const {mockXHR} = require("../mock");
mockXHR();
Vue.use(Element, {
  size: Cookies.get("size") || "medium" // set element-ui default size
});
//全局注册container
Vue.component("container", container);

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;
//全局messageBox
Vue.prototype.$messageBox = MessageBox;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  //添加到这里,这里的render-event和vue.config.js里面的renderAfterDocumentEvent配置名称一致
  mounted() {
    if (process.env.NODE_ENV === "production") {
      document.dispatchEvent(new Event("render-event"));
    }
  }
});
