import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'

function createMaterial() {
  const material = new MeshStandardMaterial({
    color: 'purple'
  })

  return material
}

export function createCube() {
  const geometry = new BoxGeometry(20, 20, 20)
  const material = createMaterial()

  const cube = new Mesh(geometry, material)

  return cube
}
