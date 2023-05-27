import * as THREE from 'three'
import Entity from "./Entity";
import waterFragment from '../../Shaders/waterSurface/fragment.glsl'
import waterVertex from '../../Shaders/waterSurface/vertex.glsl'

export default class WaterSurface extends Entity
{

    mesh;

    constructor(group)
    {
        super();
        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('watersurface')
            this.debugFolder.close()
        }
        this.parameters = {
            topColor: "#354f5d",
            bottomColor: "#5f8ca5",
        }


        this.setMesh()

        group.add(this.mesh);
    }

    setMesh(){
        const geometry = new THREE.PlaneGeometry(200,100,128,128);
        const material = new THREE.ShaderMaterial({
            transparent: true,
            alphaTest: 0.5,
            vertexShader: waterVertex,
            fragmentShader: waterFragment,
            uniforms: {
                uTime: {value: 0},
                uTopColor: {value: new THREE.Color(this.parameters.topColor)},
                uBottomColor: {value: new THREE.Color(this.parameters.bottomColor)},
                uAmplitude : {value: .25},
                uFrequency : {value: .075},
                uSpeed: {value: 0.4},
                uDepthFactor: {value: 1.65}
            }
        })
        this.mesh = new THREE.Mesh(geometry,material)
        this.mesh.position.set(0,40,-10)
        this.mesh.rotation.x = Math.PI/2

        if(this.debug.active){
            this.debugFolder
                .add(this.mesh.material.uniforms.uAmplitude, 'value')
                .name('uAmplitude')
                .min(0)
                .max(10)
                .step(0.001);
            this.debugFolder
                .add(this.mesh.material.uniforms.uFrequency, 'value')
                .name('uFrequency')
                .min(0)
                .max(10)
                .step(0.001)
            this.debugFolder
                .add(this.mesh.material.uniforms.uSpeed, 'value')
                .name('uSpeed')
                .min(0)
                .max(10)
                .step(0.001)
            this.debugFolder
                .add(this.mesh.material.uniforms.uDepthFactor, 'value')
                .name('uDepthFactor')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder.addColor(this.parameters,'topColor')
                .onChange(() => {
                    this.mesh.material.uniforms.uTopColor.value.set(this.parameters.topColor)
                })

            this.debugFolder.addColor(this.parameters,'bottomColor')
                .onChange(() => {
                    this.mesh.material.uniforms.uBottomColor.value.set(this.parameters.bottomColor)
                })
        }

    }

    update()
    {
        if(this.experience.camera.isObjectInView(this.mesh)) {

            this.mesh.material.uniforms.uTime.value = this.time.elapsed * 0.001
        }

    }
}