import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import mocks from '../mock'

export function setupProdMockServer() {
  createProdMockServer([...mocks])
}
