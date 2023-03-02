import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.parameters = {
            colorDir: "#87558a",
            colorMain: "#ff8484",
            colorSecondary: "#569dd1"
        }
        
        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('environment')

        }

        this.setSunLight()
        this.setPointLight()
        this.setEnvironmentMap()
    }

    setSunLight()
    {
        this.sunLight = new THREE.DirectionalLight('#87558a', 4)
        this.sunLight.castShadow = true
        this.sunLight.intensity = .5
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(-1, 2,  10.25)
        this.scene.add(this.sunLight)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.sunLight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'x')
                .name('sunLightX')
                .min(- 5)
                .max(5)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'y')
                .name('sunLightY')
                .min(- 5)
                .max(5)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'z')
                .name('sunLightZ')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder.addColor(this.parameters,'colorDir')
                .onChange(() => {
                    this.sunLight.color.set(this.parameters.colorDir)
                })
        }
    }

    setPointLight(){
        this.mainLight = new THREE.PointLight( "#ff8484", 75.0, 50, 2 );
        this.mainLight.position.set( -7.5, 20, -15.300 );

        this.secondary = new THREE.PointLight( "#569dd1", 75.0, 50, 2 );
        this.secondary.position.set( 17.5, 20, 5.300 );
        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.mainLight, 'intensity')
                .name('mainLightIntensity')
                .min(0)
                .max(500)
                .step(0.001);
            this.debugFolder.addColor(this.parameters,'colorMain')
                .onChange(() => {
                    this.mainLight.color.set(this.parameters.colorMain)
                })
            this.debugFolder
                .add(this.secondary, 'intensity')
                .name('secondaryLightIntensity')
                .min(0)
                .max(500)
                .step(0.001);
            this.debugFolder.addColor(this.parameters,'colorSecondary')
                .onChange(() => {
                    this.secondary.color.set(this.parameters.colorSecondary)
                })
        }
        this.scene.add( this.mainLight );
        this.scene.add( this.secondary );
    }

    setEnvironmentMap()
    {
        this.environmentMap = {}
        this.environmentMap.intensity = 2
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.texture.encoding = THREE.sRGBEncoding
        
        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterials = () =>
        {
            this.scene.traverse((child) =>
            {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
                {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.environmentMap, 'intensity')
                .name('envMapIntensity')
                .min(0)
                .max(4)
                .step(0.001)
                .onChange(this.environmentMap.updateMaterials)
        }
    }
}