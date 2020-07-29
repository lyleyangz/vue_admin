import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * constantRoutes 常量路由
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/view/redirect/index")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/view/login/index"),
    hidden: true
  },
  {
    path: "/auth-redirect",
    component: () => import("@/view/login/auth-redirect"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/view/error-page/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/view/error-page/401"),
    hidden: true
  }
];
// 可权限配置的路由
export const configurableRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/datacenter",
    children: [
      {
        path: "datacenter",
        component: () => import("@/view/datacenter/index"),
        name: "datacenter",
        meta: {title: "数据中心", icon: "eye", affix: true, roles: [1]}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/permission",
    children: [
      {
        path: "permission",
        component: () => import("@/view/permission/index"),
        name: "permission",
        meta: {title: "权限管理", icon: "tree-table", affix: true, roles: [11]}
      }
    ]
  }
];
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  {path: "*", redirect: "/404", hidden: true}
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes.concat(configurableRoutes)
  });
const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
