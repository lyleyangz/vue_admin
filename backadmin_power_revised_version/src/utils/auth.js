import {setStore, getStore, removeStore} from "@/utils/mUtils";

const TokenKey = "Admin-Token";

export function getToken() {
  // let token = getStore(TokenKey);
  // if (token) {
  //   return token;
  // } else {
  //   setStore(TokenKey, process.env.VUE_APP_TOKEN);
  //   return process.env.VUE_APP_TOKEN;
  // }
  return getStore(TokenKey);
}

export function setToken(token) {
  return setStore(TokenKey, token);
}

export function removeToken() {
  return removeStore(TokenKey);
}
