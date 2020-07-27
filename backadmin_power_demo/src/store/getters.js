const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  buttons: state => state.user.buttons,
  routers: state => state.permission.routers,
  permissionList: (state) => state.user.permissionList,
}
export default getters
