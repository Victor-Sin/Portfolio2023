import * as THREE from 'three'
import Entity from "./Entity";
import data from "../../../data.json";

export default class Monolith extends Entity
{
    static INDEX = 0;
    monolith;
    #block;
    #screen;
    name;

    constructor(nameFolder,index = 0)
    {
        super();

        this.nameFolder = nameFolder
        if(nameFolder == "heroBanner"){
            this.dataMonolith = data.monoliths[nameFolder][Monolith.INDEX];
            Monolith.INDEX++;
        }
        else{
            this.dataMonolith = data.monoliths[nameFolder][index]
        }

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.world.monolithsFolder.addFolder(this.dataMonolith.name)
            this.debugFolder.close()
        }

        this.name = this.dataMonolith.name;

        this.monolith = new THREE.Group();
        this.monolith.receiveShadow = true;

        this.setModel();
        // this.setScreen()


        // const axesHelper = new THREE.AxesHelper( 5 );
        // this.monolith.add( axesHelper )

        this.scene.add(this.monolith);
    }


    setTextures()
    {
        this.textures = {}

        this.textures.gradientTexture = this.resources.items.gradientTexture
        this.textures.gradientTexture.minFilter = THREE.NearestFilter
        this.textures.gradientTexture.magFilter = THREE.NearestFilter
        this.textures.gradientTexture.generateMipmaps = false
    }

    setModel()
    {
        this.setTextures();

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshStandardMaterial( {color: "#4bb2b2"} );
        material.metalness = 0.45
        material.roughness = 0.75
        this.#block = new THREE.Mesh( geometry, material );

        if(this.nameFolder == "heroBanner"){
            this.#block.geometry.computeBoundingBox()
            const boundingBoxMax = this.#block.geometry.boundingBox.max
            this.#block.geometry.translate(
                0,
                boundingBoxMax.y,
                0
            )
        }

        this.setParams()

        // Debug
        if(this.debug.active)
        {
            const position = this.debugFolder.addFolder("Position");
            const rotation = this.debugFolder.addFolder("Rotation");
            const size = this.debugFolder.addFolder("Size");

            position
                .add(this.monolith.position, 'x')
                .name('posX')
                .min(-200)
                .max(100)
                .step(0.001);
            position
                .add(this.monolith.position, 'y')
                .name('posY')
                .min(-200)
                .max(100)
                .step(0.001);
            position
                .add(this.monolith.position, 'z')
                .name('posZ')
                .min(-200)
                .max(100)
                .step(0.001)
            rotation
                .add(this.monolith.rotation, 'y')
                .name('rotation')
                .min(0)
                .max(Math.PI*2)
                .step(0.001)
            size
                .add(this.monolith.scale, 'x')
                .name('width')
                .min(0)
                .max(30)
                .step(0.001);
            size
                .add(this.monolith.scale, 'y')
                .name('height')
                .min(0)
                .max(30)
                .step(0.001);
            size
                .add(this.monolith.scale, 'z')
                .name('depth')
                .min(0)
                .max(30)
                .step(0.001);

        }


        this.monolith.add(this.#block)

    }

    setScreen(){
        const geometry = new THREE.PlaneGeometry(1,1);
        const material = new THREE.MeshToonMaterial( {color: "#623a5a"} );
        this.#screen = new THREE.Mesh(geometry,material)

        if(this.nameFolder == "heroBanner") {
            this.#screen.geometry.computeBoundingBox()
            const boundingBoxMax = this.#screen.geometry.boundingBox.max
            this.#screen.geometry.translate(
                0,
                boundingBoxMax.y,
                0
            )
        }
        this.#screen.position.z = 0.5001;

        this.monolith.add(this.#screen)
    }

    setParams(){
        this.monolith.position.set(this.dataMonolith.position[0],this.dataMonolith.position[1],this.dataMonolith.position[2])
        this.monolith.scale.set(...this.dataMonolith.size)
        this.monolith.rotation.y = this.dataMonolith.rotation;

    }

    update()
    {
        // this.animation.mixer.update(this.time.delta * 0.001)
    }
}