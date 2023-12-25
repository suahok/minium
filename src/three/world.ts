import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLight } from './components/light'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/resizer'
import { Loop } from './systems/loop'

import { loadBirds } from './birds/birds'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export class World {
  public scene
  public camera
  public renderer
  private loop

  constructor(container: HTMLElement) {
    this.renderer = createRenderer()
    this.scene = createScene()
    this.camera = createCamera(container)
    this.loop = new Loop(this.scene, this.camera, this.renderer)

    this.renderer.setSize(container.clientWidth, container.clientHeight)
    container.append(this.renderer.domElement)

    const cube = createCube()
    const { hemisphere, directional } = createLight()

    this.scene.add(cube, hemisphere, directional)

    new Resizer(container, this.camera, this.renderer)

    const controls = new OrbitControls(this.camera, container)

    this.loop.tick = () => {
      controls.update()
    }
  }

  async loader() {
    const object = await loadBirds()
    this.scene.add(object)
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  start() {
    this.loop.start()
  }

  stop() {
    this.loop.stop()
  }
}
