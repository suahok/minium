import { request } from '../axios'

export function getListOfAlbum() {
  return request({ url: '/users' })
}
