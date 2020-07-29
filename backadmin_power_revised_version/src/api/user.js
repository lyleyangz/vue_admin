import request2 from "@/utils/request";
import request from "@/utils/axios";

export function login(data) {
  return request2({
    url: "/user/login",
    method: "post",
    data
  });
}

export function getInfo(token) {
  return request2({
    url: "/user/info",
    method: "get",
    params: {token}
  });
}

export function logout() {
  return request2({
    url: "/user/logout",
    method: "post"
  });
}

// 获取用户列表关注管理列表
export function findSimpleUserInfo(params) {
  return request({
    url: "/userWeb/findSimpleUserInfo",
    method: "get",
    params
  });
}
//获取用户列表 **
export function findUserList(params) {
  return request2({
    url: "/user/findUserPage",
    method: "get",
    params
  });
}
//删除用户列表 **
export function deleteUserList(params) {
  return request2({
    url: "/user/removeUser",
    method: "delete",
    params
  });
}
//重置密码 **
export function resetPassword(params) {
  return request2({
    url: "/user/resetPassword",
    method: "post",
    params
  });
}
//修改密码 **
export function changePassword(data) {
  return request2({
    url: "/user/changePassword",
    method: "post",
    data
  });
}
//新增用户 **
export function addUser(data) {
  return request2({
    url: "/user/addUser",
    method: "post",
    data
  });
}
//修改用户信息 **
export function updateUser(data) {
  return request2({
    url: "/user/updateUser",
    method: "put",
    data
  });
}

// 获取用户详情资料
export function findUserDetail(params) {
  return request({
    url: "/userWeb/findUserDetail",
    method: "get",
    params
  });
}

// // 重置用户信息
// export function resetUserInfo(params) {
//   return request({
//     url: "/userWeb/resetUserInfo",
//     method: "get",
//     params
//   });
// }

// 获取用户列表关注管理列表
export function userFollow(data) {
  return request({
    url: "/userWeb/userFollow",
    method: "put",
    data
  });
}

// 用户配置
export function userConfig(data) {
  return request({
    url: "/userWeb/userConfig",
    method: "put",
    data
  });
}

// 获取配置认证列表
export function findAuthenticationInfo(params) {
  return request({
    url: "/userWeb/findAuthenticationInfo",
    method: "get",
    params
  });
}
// 获取重置认证列表
export function findUserAuthentications(params) {
  return request({
    url: "/userWeb/findUserAuthentications",
    method: "get",
    params
  });
}
// 重置用户
export function resetUserInfo(data) {
  return request({
    url: "/userWeb/resetUserInfo",
    method: "put",
    data
  });
}
// 用户推荐标签列表
export function recommendTag(params) {
  return request({
    url: "/userWeb/findUserRecommendTags",
    method: "get",
    params
  });
}
// 添加用户推荐标签
export function addRecommendTag(data) {
  return request({
    url: "/userWeb/addUserRecommendTags",
    method: "post",
    data
  });
}
// 删除用户推荐标签
export function deleteRecommendTag(data) {
  return request({
    url: "/userWeb/delUserRecommendTags",
    method: "post",
    data
  });
}
