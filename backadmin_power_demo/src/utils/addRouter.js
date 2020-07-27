let componentObj = {
  layout: () => import("@/layout"),
}
function getRoutes(routerlist) {
  let routes = [];
  routerlist.forEach((item) => {
    // 有权限
    if (item.authorized) {
      let route = {}
        route.component = componentObj["layout"];
        if (item.routePath === "accountManger") {
          route.path = "/";
        } else {
          route.path = "/" + item.routePath;
        }
      route.meta = {
        title: item.menuName,
        icon: item.menuIcon
      }
      if (item.children) {
        route.children = [];
        getChildRoutes(route, item.children)
      }
      routes.push(route)
    }
  });
  return routes;
}
function getChildRoutes(fatherRoute, children) {
  children.forEach(item => {
    let route = {}
    route.path = "/" + item.routePath;
    route.meta = {
      title: item.menuName,
      icon: item.menuIcon
    }
    fatherRoute.children.push(route)
    if (item.children) {
      route.children = [];
      getChildRoutes(route, item.children)
    }
  });
}
export default getRoutes;
