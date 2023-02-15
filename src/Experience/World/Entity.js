import Experience from "../../Experience";
import {Clock} from "three";
import EventEmitter from "../Utils/EventEmitter";

export default class Entity extends EventEmitter{
    _mesh;
    _material;
    _geometry;

    constructor() {
        super()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.renderer = this.experience.renderer.instance
        this.time = this.experience.time
        this.world = this.experience.world
        this.debug = this.experience.debug
        this.clock = new Clock();
        this.camera = this.experience.camera.instance
    }

    getMesh(){
        return this._mesh;
    }

    setMesh(mesh){
        this._mesh = mesh;
    }

    getGeometry(){
        return this._geometry;
    }

    setGeometry(geometry){
        this._geometry = geometry;
    }

    getMaterial(){
        return this._material;
    }

    setMaterial(material){
        this._material = material;
    }

}
