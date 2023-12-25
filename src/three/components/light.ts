import { AmbientLight, DirectionalLight, HemisphereLight } from 'three'

export function createLight() {
  const ambient = new AmbientLight('white', 1)
  const hemisphere = new HemisphereLight('white', 'teal', 8)
  const directional = new DirectionalLight('white', 2)
  directional.position.set(30, 0, 20)

  return { ambient, hemisphere, directional }
}
