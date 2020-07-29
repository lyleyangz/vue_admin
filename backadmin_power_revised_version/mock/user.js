const tokens = {
  admin: {
    token: "admin-token"
  },
  editor: {
    token: "editor-token"
  }
};

const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Super Admin"
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Normal Editor"
  }
};

export default [
  // get user info
  {
    url: "/user/info.*",
    type: "get",
    response: config => {
      const {token} = "admin-token";
      const info = users[token];
      console.log(info);
      // mock error
      if (!info) {
        return {
          code: 20000,
          data: {
            roles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            introduction: "I am a super administrator",
            avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            name: "Super Admin"
          }
        };
      }

      return {
        code: 20000,
        data: info
      };
    }
  },

  // user logout
  {
    url: "/user/logout",
    type: "post",
    response: _ => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },
  // 设置用户权限
  {
    url: "/user/settingPermission",
    type: "post",
    response: _ => {
      console.log(_);
      return {
        code: 20000,
        data: "success"
      };
    }
  }
];
