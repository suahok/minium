import { get } from '../axios'

export function getListOfAlbum() {
  return get('/users')
}
