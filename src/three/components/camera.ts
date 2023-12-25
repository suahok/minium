import { PerspectiveCamera } from 'three'

export function createCamera(container: HTMLElement) {
  const fov = 45
  const aspect = container.clientWidth / container.clientHeight
  const near = 0.1
  const far = 300

  const camera = new PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(40, 30, 50)

  return camera
}
