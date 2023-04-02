import * as THREE from 'three'
import Entity from "./Entity";
import rayFragment from '../../Shaders/raylight/fragment.glsl'
import rayVertex from '../../Shaders/raylight/vertex.glsl'
import data from "../../../data.json";

export default class Raylight extends Entity
{
    static INDEX = 0;
    index = 0;

    #mesh;

    constructor()
    {
        super();
        // Debug
        this.dataRaylight = data.raylights[Raylight.INDEX];
        this.index = Raylight.INDEX;

        if(this.debug.active)
        {
            // this.debugFolder = this.world.monolithsFolder.addFolder(this.dataMonolith.name)
            // this.debugFolder.close()
        }

        this.setMesh()
        Raylight.INDEX++;

        this.scene.add(this.#mesh);
    }

    setMesh(){
        const geometry = new THREE.PlaneGeometry(this.dataRaylight.width, this.dataRaylight.height);
        const material = new THREE.ShaderMaterial({
            transparent: true,
            alphaTest: 0.5,
            vertexShader: rayVertex,
            fragmentShader: rayFragment,
            uniforms: {
                uTime: {value: 0},
                uIndex: {value: this.index}
            }
        })
        this.#mesh = new THREE.Mesh(geometry,material)
        this.#mesh.position.set(this.dataRaylight.x,this.dataRaylight.y,this.dataRaylight.z)
        this.#mesh.rotation.z = -Math.PI/12
    }

    update()
    {
        this.#mesh.material.uniforms.uTime.value = this.time.elapsed

    }
}