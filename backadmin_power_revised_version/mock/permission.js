var permissionKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export default [
  // 配置权限
  {
    url: "/permission/get",
    type: "get",
    response: (_) => {
      console.log(_);
      return {
        code: 20000,
        data: {
          roles: permissionKeys
        }
      };
    }
  },
  // 配置权限
  {
    url: "/permission/setting",
    type: "post",
    response: (_) => {
      const {permission} = _.body;
      if (permission) {
        permissionKeys = permission.split(",");
      }
      return {
        code: 20000,
        data: {
          roles: permissionKeys
        }
      };
    }
  }
];
