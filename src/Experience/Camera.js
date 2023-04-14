import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(60, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(0, 21.5, 15)
        this.oldX = 0;
        this.oldY = 21.5;
        this.scene.add(this.instance)

    }

    setControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)

        this.controls.target.y = 20


    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }


    update()
    {
        this.controls.update()
    }
}