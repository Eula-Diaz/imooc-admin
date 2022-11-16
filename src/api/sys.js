import request from '@/utils/request'

/**
 * 登录
 */

export const login = (data) => {
  request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
