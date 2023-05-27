import * as THREE from 'three'
import Entity from "./Entity";
import fogFragment from '../../Shaders/foglight/fragment.glsl'
import fogVertex from '../../Shaders/foglight/vertex.glsl'

export default class Foglight extends Entity
{

    #mesh;

    constructor(group)
    {
        super();
        // Debug

        this.setMesh()

        group.add(this.#mesh);
    }

    setMesh(){
        const geometry = new THREE.PlaneGeometry(30,10,16,16);
        const material = new THREE.ShaderMaterial({
            transparent: true,
            alphaTest: 0.5,
            vertexShader: fogVertex,
            fragmentShader: fogFragment,
            uniforms: {
                uTime: {value: 0},
            }
        })
        this.#mesh = new THREE.Mesh(geometry,material)
        this.#mesh.position.set(20,27.5,-8)
    }

    update()
    {
        this.#mesh.material.uniforms.uTime.value = this.time.elapsed
    }
}