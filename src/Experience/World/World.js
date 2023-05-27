import Experience from '../Experience.js'
import Environment from './Environment.js'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from '../../data.json'
import Monolith from "./GlobalScene/Monolith";
import * as THREE from "three";
import Particules from "./GlobalScene/Particules";
import Raylight from "./GlobalScene/Raylight";
import WaterSurface from "./GlobalScene/WaterSurface";
import Foglight from "./GlobalScene/Foglight";
import PageHandler from "../PageHandler";

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.camera = this.experience.camera.instance

        if(this.experience.debug.active){
            this.monolithsFolder = this.experience.debug.ui.addFolder("monoliths");
            this.monolithsFolder.close();
            this.raylightsFolder = this.experience.debug.ui.addFolder("raylights");
            this.raylightsFolder.close();
        }

        this.monoliths = [];
        this.raylights = [];
        this.projects = [];
        this.projectImages = new THREE.Group();

        this.fogColor = new THREE.Color('#42566c');
        this.finalFogColor = new THREE.Color('#1c2633');


        const fog = new THREE.Fog(this.fogColor, 0, 100)
        // const fog = new THREE.FogExp2 ('#203642', 0.5)
        this.scene.fog = fog
        this.surfaceElts = new THREE.Group();

        gsap.registerPlugin(ScrollTrigger);

        // Wait for resources
        this.resources.on('ready', () =>
        {
            this.environment = new Environment()
            this.fogLight = new Foglight(this.surfaceElts);
            this.water = new WaterSurface(this.surfaceElts)
            // Setup
            data.raylights.forEach(() => {
                this.raylights.push(new Raylight(this.surfaceElts))
            })
            data.monoliths.heroBanner.forEach(() => {
                this.monoliths.push(new Monolith("heroBanner",0,this.projectImages));
            })
            data.monoliths.projects.forEach((e,i) => {
                this.projects.push(new Monolith("projects",i));
            })
            this.particules = new Particules();
            this.pageHandler = new PageHandler();
            this.scene.add(this.surfaceElts)
            this.scene.add(this.projectImages)
            this.projectImages.position.z = -135;
            this.projectImages.position.y = this.experience.sizes.format == "mobile" ? -5 : 0;
        })
    }


    update()
    {
        if(this.pageHandler){
            this.pageHandler.update();
        }
        if(this.particules){
            this.particules.update()
        }
        if(Monolith.SCREEN_OBJ.length > 0){
            Monolith.SCREEN_OBJ.forEach(elt => {
                elt.update()
            })
        }
        if(this.raylights.length > 0){
            this.raylights.forEach(elt => {
                elt.update()
            })
        }
        if(this.water){
            this.water.update();
        }
    }
}