import request from "@/utils/request";
// 获取默认预告内容
export function findDefaultHerald(params) {
  return request({
    url: "/admin/base/findDefaultHerald",
    method: "get",
    params
  });
}
// 获取快速咨询词
export function findQuickAskList(params) {
  return request({
    url: "/admin/base/findQuickAskList",
    method: "get",
    params
  });
}

// 修改默认预告内容
export function modifyDefaultHerald(data) {
  return request({
    url: "/admin/base/modifyDefaultHerald",
    method: "post",
    data
  });
}

// 修改默认预告内容
export function modifyQuickAskList(data) {
  return request({
    url: "/admin/base/modifyQuickAskList",
    method: "post",
    data
  });
}

// 查找账号
export function findOfficialAccount(params) {
  return request({
    url: "/admin/base/findOfficialAccount",
    method: "get",
    params
  });
}

// 生成管理员/官方客服
export function addOfficialAccount(data) {
  return request({
    url: "/admin/base/addOfficialAccount",
    method: "post",
    data
  });
}

// 修改管理员/官方客服密码
export function modifyOfficialAccountPwd(data) {
  return request({
    url: "/admin/base/modifyOfficialAccountPwd",
    method: "put",
    data
  });
}

// 删除管理员/官方客服（批量）
export function removeOfficialAccount(params) {
  return request({
    url: "/admin/base/removeOfficialAccount",
    method: "delete",
    params
  });
}

// 获取oss临时凭证
export function getOssToken(params) {
  return request({
    url: "/admin/base/getOssToken",
    method: "get",
    params
  });
}

// 查找运营账号
export function findOperationAccount(params) {
  return request({
    url: "/admin/base/findOperationAccount",
    method: "get",
    params
  });
}

// 生成运营账号
export function addOperationAccount(data) {
  return request({
    url: "/admin/base/addOperationAccount",
    method: "post",
    data
  });
}

// 修改运营账号密码
export function updateOperationAccountPwd(data) {
  return request({
    url: "/admin/base/updateOperationAccountPwd",
    method: "put",
    data
  });
}

// 删除运营账号
export function removeOperationAccount(params) {
  return request({
    url: "/admin/base/removeOperationAccount",
    method: "delete",
    params
  });
}

// 导出运营账号
export function exportOperationAccount(params) {
  return request({
    url: "/admin/base/exportOperationAccount",
    method: "get",
    params
  });
}

// 导出管理员/官方客服
export function exportOfficialAccount(params) {
  return request({
    url: "/admin/base/exportOfficialAccount",
    method: "get",
    params
  });
}