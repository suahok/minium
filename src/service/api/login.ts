import { post } from '../axios'

export function refreshToken(data: object) {
  return post('/refreshToken', data)
}
