import type { PerspectiveCamera, WebGLRenderer } from 'three'

function setSize(container: HTMLElement, camera: PerspectiveCamera, renderer: WebGLRenderer) {
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()

  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
}

export class Resizer {
  constructor(container: HTMLElement, camera: PerspectiveCamera, renderer: WebGLRenderer) {
    setSize(container, camera, renderer)

    window.addEventListener('resize', () => {
      setSize(container, camera, renderer)
    })
  }
}
