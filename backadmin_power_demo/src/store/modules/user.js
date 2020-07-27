import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    buttons: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_PERMISSIONLIST: (state, permissionList) => {
    state.permissionList = permissionList;
  },
  SET_BUTTONS: (state, buttons) => {
    state.buttons = buttons;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, pwd } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), pwd: pwd }).then(response => {
        let data = response;
        commit('SET_TOKEN', data.token);
        setToken(data.token);
        localStorage.setItem("token", data.token);
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        let data = response;

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { username, avatar, menuList, permissionList } = data
        commit('SET_NAME', username)
        commit('SET_AVATAR', avatar)
        let isAuthorized = menuList.some((item) => {
          return item.authorized;
        });
        if (isAuthorized) {
          //isAuthorized为true，则用户有权限，为false，则跳转登录页
          commit("SET_ROLES", menuList);
          commit("SET_BUTTONS", menuList);
          commit("SET_PERMISSIONLIST", permissionList);
        } else {
          this.$router.push({path: "/404"});
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

