import { WebGLRenderer } from 'three'

export function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)

  return renderer
}
