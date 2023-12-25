import axios from 'axios'
import { refreshToken } from '../api/login'

const { VITE_API_URL } = import.meta.env
const service = axios.create({
  baseURL: VITE_API_URL,
  timeout: 3000
})

service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

let inRefreshing = false // 当前是否正在请求刷新token
let wating: any[] = [] // 报401的接口 加入等待列表 刷新接口成功后统一请求

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  reason => {
    const { config } = reason.response

    // 刷新token正在请求，把其他的接口加入等待数组
    if (inRefreshing) {
      return new Promise(resolve => {
        wating.push({ config, resolve })
      })
    }

    if (reason?.response?.status === 401) {
      inRefreshing = true

      refreshToken({ refreshToken: localStorage.getItem('refreshToken') }).then((refreshResponse: any) => {
        const { success, response } = refreshResponse
        if (success) {
          inRefreshing = false

          const { token, refreshToken } = response
          localStorage.setItem('token', token)
          localStorage.setItem('refreshToken', refreshToken)

          // 刷新token请求成功，等待数据的失败接口重新发起请求
          wating.forEach(({ config, resolve }) => void resolve(service(config)))
          wating = [] // 请求完之后清空等待请求的数组

          return service(config) // 当前接口重新发起请求
        } else {
          // 刷新token失败 重新登录
        }
      })
    }

    return Promise.reject(reason)
  }
)

export const get = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    service
      .get(url, { params })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export const post = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    service
      .post(url, data)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
