import * as THREE from 'three'
import Entity from "./Entity";
import vertex from "../../Shaders/particules/vertex.glsl"
import fragment from "../../Shaders/particules/fragment.glsl"

export default class Particules extends Entity
{
    #particulesCount = 1000
    #positions
    #colors
    #scales
    #geometry
    #material

    constructor()
    {
        super();
        this.initGeometry()
        this.initMaterial()
        this.points = new THREE.Points(this.#geometry,this.#material)
        this.points.position.y = -240

        this.scene.add(this.points)
    }

    initGeometry(){
        this.#positions = new Float32Array(this.#particulesCount*3)
        this.#colors = new Float32Array(this.#particulesCount*3)
        this.#scales = new Float32Array(this.#particulesCount*1)

        for(let i = 0;i < this.#particulesCount; i ++){
            const i3 = i*3;
            this.#positions[i3+0] = Math.random()*200-100;
            this.#positions[i3+1] = Math.pow(Math.random()*15,2);
            this.#positions[i3+2] = -Math.pow(Math.random()*5,2);

            this.#colors[i3+0] = Math.random()*255;
            this.#colors[i3+1] = Math.random()*255;
            this.#colors[i3+2] = Math.random()*255;

            this.#scales[i] = Math.random();
        }

        this.#geometry = new THREE.BufferGeometry();
        this.#geometry.setAttribute('position', new THREE.BufferAttribute(this.#positions,3))
        this.#geometry.setAttribute('color', new THREE.BufferAttribute(this.#colors,3))
        this.#geometry.setAttribute('aScale', new THREE.BufferAttribute(this.#scales,1))

    }

    initMaterial(){
        this.#material = new THREE.ShaderMaterial({
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
            vertexShader: vertex,
            fragmentShader: fragment,
            uniforms:{
                uSize: {value: 200},
                uTime: {value: this.time.elapsed}
            }
        })
    }


    update()
    {
        // this.animation.mixer.update(this.time.delta * 0.001)
        this.#material.uniforms.uTime.value = this.time.elapsed
    }
}