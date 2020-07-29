import request from "@/utils/request";
// 新增角色信息
export function addRole(data) {
  return request({
    url: "/rolePermission/addRole",
    method: "post",
    data
  });
}
// 查询某个角色的权限信息
export function findPermission(query) {
  return request({
    url: "/rolePermission/findPermission",
    method: "get",
    params: query
  });
}
// 查询角色信息列表
export function findRoleList(query) {
  return request({
    url: "/rolePermission/findRoleList",
    method: "get",
    params: query
  });
}
// 删除角色信息
export function removeRole(query) {
  return request({
    url: "/rolePermission/removeRole",
    method: "delete",
    params: query
  });
}
// 修改某个角色的权限信息
export function updatePermission(data) {
  return request({
    url: "/rolePermission/updatePermission",
    method: "put",
    data
  });
}
// 修改角色信息
export function updateRole(data) {
  return request({
    url: "/rolePermission/updateRole",
    method: "put",
    data
  });
}

// mock
// 修改角色信息
export function settingpermission(data) {
  return request({
    url: "/permission/setting",
    method: "post",
    data
  });
}
