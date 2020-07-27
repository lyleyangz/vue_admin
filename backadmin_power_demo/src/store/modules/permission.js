import { asyncRoutes, constantRoutes } from "@/router";
// import router from "@/router";

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
  // if (route.meta && route.path) {
  //   // return roles.some(role => route.meta.roles.includes(role));
  //   return roles.some(role => role.path === route.path);
  // } else {
  //   return true;
  // 
// }

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(newRoutes, routes, roles) {
  routes.forEach(route => {
    let tmp = {...route};
    roles.forEach(item => {
      if (item.path === tmp.path) {
        if (route.children) {
          tmp.children = []
          filterAsyncRoutes(tmp.children, route.children, item.children);
        }
        tmp.meta.icon = item.meta.icon;
        newRoutes.push(tmp);
        return false;
      }
    })
  });
}

const state = {
  routers: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTERS: (state, routes) => {
    // state.addRoutes = routes;
    // state.routers = constantRoutes.concat(routes);
    state.routers = routes;
  }
};

const actions = {
  generateRoutes({commit}, roles) {
    return new Promise(resolve => {
      let accessedRoutes = [];
      filterAsyncRoutes(accessedRoutes, asyncRoutes, roles);
      commit("SET_ROUTERS", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
