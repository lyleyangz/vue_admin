import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/sysuser/login',
    method: 'post',
    data
  })
}

//获取管理员信息
export function getInfo(token) {
  return request({
    url: '/admin/sysuser/getSysUser',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/sysuser/logout',
    method: 'post'
  })
}


