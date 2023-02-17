import Experience from '../Experience.js'
import Environment from './Environment.js'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from '../../data.json'
import Monolith from "./GlobalScene/Monolith";
import * as THREE from "three";
import Lenis from "@studio-freight/lenis";

export default class World
{
    scrollY = 0;
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.camera = this.experience.camera.instance
        this.cameraControls = this.experience.camera.controls

        if(this.experience.debug.active)
        this.monolithsFolder = this.experience.debug.ui.addFolder("monoliths");
        this.monoliths = [];
        this.projects = [];


        const fog = new THREE.Fog('#803535', 1, 45)
        this.scene.fog = fog

        gsap.registerPlugin(ScrollTrigger);

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            data.monoliths.heroBanner.forEach(() => {
                this.monoliths.push(new Monolith("heroBanner"));
            })
            data.monoliths.projects.forEach((e,i) => {
                this.projects.push(new Monolith("projects",i));
            })

            this.environment = new Environment()
        })
        this.initScroll()
    }

    initScroll(){

        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // https://www.desmos.com/calculator/brs54l4xou
            infinite: false,
        })
        this.lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            this.scrollY = -scroll
            this.camera.position.y = 21.5 + this.scrollY/this.experience.sizes.height * 40
            this.cameraControls.target.y = 20 + this.scrollY/this.experience.sizes.height * 40
        })

        const projects = gsap.utils.toArray('.projectTitle');
        const sectionsTitle = gsap.utils.toArray('.sectionTitle');


        projects.forEach(project => {
            gsap.to(project,{
                scrollTrigger: {
                    trigger: project,
                    markers: true,
                    start: "bottom 90%", // when the top of the trigger hits the top of the viewport
                    end: "top 30%", // end after scrolling 500px beyond the start
                    onEnter: (self) => {
                        project.classList.toggle('active');
                    },
                    onLeave: (self) => {
                        project.classList.toggle('active');
                    },
                    onEnterBack: (self) => {
                        project.classList.toggle('active');
                    },
                    onLeaveBack: (self) => {
                        project.classList.toggle('active');
                    }
                }
            })
        });
        sectionsTitle.forEach(sectionTitle => {
            gsap.to(sectionTitle,{
                scrollTrigger: {
                    trigger: sectionTitle,
                    markers: true,
                    start: "bottom 90%", // when the top of the trigger hits the top of the viewport
                    end: "top 30%", // end after scrolling 500px beyond the start
                    onEnter: (self) => {
                        sectionTitle.classList.add('active');
                    },
                }
            })
        });





    }

    update()
    {
        if(this.lenis){
            this.lenis.raf(this.experience.time.current)
        }

    }
}