import request from "@/utils/request";

export function findUserList(params) {
  return request({
    url: "/admin/user/findUserList",
    method: "get",
    params
  });
}
// 禁言用户
export function forbiddenUser(data) {
  return request({
    url: "/admin/user/forbiddenUser",
    method: "put",
    data
  });
}
// 解除用户禁言
export function removeForbidden(params) {
  return request({
    url: "/admin/user/removeForbidden",
    method: "delete",
    params
  });
}

// 重置用户昵称
export function resetUserNickname(data) {
  return request({
    url: "/admin/user/resetUserNickname",
    method: "post",
    data
  });
}
