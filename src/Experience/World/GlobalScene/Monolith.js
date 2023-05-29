import * as THREE from 'three'
import Entity from "./Entity";
import data from "../../../data.json";
import screenFragment from '../../Shaders/screen/fragment.glsl'
import screenVertex from '../../Shaders/screen/vertex.glsl'

export default class Monolith extends Entity
{
    static SCREEN_OBJ = [];
    static INDEX = 0;
    monolith;
    #block;
    #screen;
    name;

    constructor(nameFolder,index = 0,group = null)
    {
        super();

        this.nameFolder = nameFolder
        if(nameFolder === "heroBanner"){
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

        if(this.dataMonolith.format){
            this.dataMonolithInfos = this.dataMonolith.format[this.sizes.format];
        }
        else{
            this.dataMonolithInfos = this.dataMonolith;
        }


        this.monolith = new THREE.Group();


        this.setModel();
        if(this.dataMonolith.source !== "none"){
            this.setScreen()
            Monolith.SCREEN_OBJ.push(this);
        }

        // const axesHelper = new THREE.AxesHelper( 5 );
        // this.monolith.add( axesHelper )
        if(group){
            group.add(this.monolith);
        }
        else{
            this.scene.add(this.monolith);
        }
        this.sizes.addNewEvent(this.onResize.bind(this))

    }


    setModel()
    {
        // this.setTextures();

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshStandardMaterial({
                color: "#437a88",
                transparent:true,
                alphaTest: 0.5,

            } );
        material.metalness = 0.45
        material.roughness = 0.75
        this.#block = new THREE.Mesh( geometry, material );

        if(this.nameFolder === "heroBanner"){
            // this.#block.visible = false;

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
        const geometry = new THREE.PlaneGeometry(1,1,16,16);
        // const material = new THREE.MeshToonMaterial( {color: "#623a5a"} )
        const material = new THREE.ShaderMaterial({
            transparent: true,
            alphaTest: 0.5,
            vertexShader: screenVertex,
            fragmentShader: screenFragment,
            uniforms: {
                uTexture: {value: this.resources.items.test},
                uCursor : {value: new THREE.Vector2()},
                uTime: {value: 0},
                uMLightColor: {value: new THREE.Color(this.environment.sunLight.color)},
                uLightColor: {value: new THREE.Color(this.environment.secondary.color)},
                uLightPos: {value: this.environment.secondary.position},
                uCubeColor: {value:  this.#block.material.color},
                uProgMouse: {value: 20},
                uDepth: {value:  this.dataMonolithInfos.position[1]/-180},
                uOpacity : {value:  1}
            }
        })
        this.#screen = new THREE.Mesh(geometry,material)

        if(this.nameFolder === "heroBanner") {
            this.#screen.geometry.computeBoundingBox()
            const boundingBoxMax = this.#screen.geometry.boundingBox.max
            this.#screen.geometry.translate(
                0,
                boundingBoxMax.y,
                0
            )
        }
        this.#screen.position.z = 0.5005;

        this.monolith.add(this.#screen)
        this.mouse.addObjectsList(this.#screen);
        this.mouse.addNewEvent(this.initMousePosition.bind(this))

    }

    modifyColor(){
        let depth = new THREE.Vector3();
        this.#block.getWorldPosition(depth);
        const depthColor = new THREE.Color("#437a88").lerp(new THREE.Color("#263450"), Math.max(0,depth.y/-180))
        this.#block.material.color = depthColor
        if(this.#screen){
            this.#screen.material.uniforms.uDepth.value = depth.y/-180;
            this.#screen.material.uniforms.uCubeColor.value = depthColor;

        }
    }

    initMousePosition(){
        if(this.mouse.intersection && this.mouse.intersection.object === this.#screen){
            this.#screen.material.uniforms.uCursor.value = new THREE.Vector2(this.mouse.intersection.uv.x,this.mouse.intersection.uv.y);

        }
        else{
            this.#screen.material.uniforms.uCursor.value = new THREE.Vector2(-1,-1);

        }
    }

    setParams(){
        this.monolith.position.set(this.dataMonolithInfos.position[0],this.dataMonolithInfos.position[1],this.dataMonolithInfos.position[2])
        this.#block.material.color = this.#block.material.color.lerp(new THREE.Color("#0F1724"), Math.max(0,this.dataMonolithInfos.position[1]/-180))
        this.monolith.scale.set(...this.dataMonolith.size)
        this.monolith.rotation.y = this.dataMonolithInfos.rotation;


    }

    onResize(){
        if(this.dataMonolith.format){
            this.dataMonolithInfos = this.dataMonolith.format[this.sizes.format];
        }
        else{
            this.dataMonolithInfos = this.dataMonolith;
        }
        this.monolith.rotation.y = this.dataMonolithInfos.rotation;
        this.monolith.position.set(this.dataMonolithInfos.position[0],this.dataMonolithInfos.position[1],this.dataMonolithInfos.position[2])

    }

    update()
    {
        // this.animation.mixer.update(this.time.delta * 0.001)
        if(this.experience.camera.isObjectInView(this.#block) && this.#screen){
            this.#screen.material.uniforms.uTime.value = this.time.elapsed
            this.#screen.material.uniforms.uLightPos.value = this.environment.secondary.position
            if(this.mouse.intersection && this.mouse.intersection.object === this.#screen){
                if(this.#screen.material.uniforms.uProgMouse.value > 1 ){
                    let tmp = this.#screen.material.uniforms.uProgMouse.value - 0.1;
                    this.#screen.material.uniforms.uProgMouse.value = Math.max(1,tmp)
                }
                else{
                    if(this.#screen.material.uniforms.uProgMouse.value < 20){
                        const tmp = this.#screen.material.uniforms.uProgMouse.value + ((this.time.delta*2)/60);
                        this.#screen.material.uniforms.uProgMouse.value = Math.min(20,tmp)
                    }
                }
            }

        }
    }
}