import { request } from '@/service/axios'

export function refreshToken(data: object) {
  return request({ method: 'post', url: '/refreshToken', data })
}
