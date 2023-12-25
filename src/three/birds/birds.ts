import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export async function loadBirds() {
  const loader = new GLTFLoader()
  const { scene } = await loader.loadAsync('models/sea_keep_lonely_watcher/scene.gltf')

  return scene
}
