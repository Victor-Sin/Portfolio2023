import Experience from '../Experience.js'
import Environment from './Environment.js'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from '../../data.json'
import Monolith from "./GlobalScene/Monolith";
import * as THREE from "three";
import Lenis from "@studio-freight/lenis";
import Particules from "./GlobalScene/Particules";

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
            this.environment = new Environment()

            // Setup
            data.monoliths.heroBanner.forEach(() => {
                this.monoliths.push(new Monolith("heroBanner"));
            })
            data.monoliths.projects.forEach((e,i) => {
                this.projects.push(new Monolith("projects",i));
            })
            this.particules = new Particules();
            this.initScroll()

        })
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
            this.environment.mainLight.position.y = 20 + this.scrollY/this.experience.sizes.height * 40
            this.environment.secondary.position.y = 30 + this.scrollY/this.experience.sizes.height * 40

            // console.log(this.environment.mainLight.position)
            if(Monolith.SCREEN_OBJ){
                Monolith.SCREEN_OBJ.forEach(elt => {
                    elt.initMousePosition()
                })
            }
        })

        const projects = gsap.utils.toArray('.projectTitle');
        const sectionsTitle = gsap.utils.toArray('.sectionTitle');


        projects.forEach(project => {
            const tl = gsap.timeline();
            const elts = project.querySelectorAll('.partTitle')
            const sub = project.querySelector('.sub .partTitle');
            function enterAnim(tl){
                tl.set(elts,{
                    yPercent:120,
                })
                    .to(elts[0],{
                        yPercent:-120,
                        duration:0.5
                    })
                    .to(sub ? sub : elts[1],{
                        yPercent:-120,
                        duration:0.5
                    },"<0.125")
            }

            function leaveAnim(tl){
                tl
                    .to(elts[0],{
                        yPercent:-240,
                        duration:0.25
                    })
                    .to(sub ? sub : elts[1],{
                        yPercent:-240,
                        duration:0.25
                    },"<0.125")
            }


            gsap.to(project,{
                scrollTrigger: {
                    trigger: project,
                    markers: true,
                    start: "120% 90%", // when the top of the trigger hits the top of the viewport
                    end: "25% 30%", // end after scrolling 500px beyond the start
                    onEnter: (self) => {
                        enterAnim(tl)
                    },
                    onLeave: (self) => {
                       leaveAnim(tl)
                    },
                    onEnterBack: (self) => {
                        enterAnim(tl)

                    },
                    onLeaveBack: (self) => {
                        leaveAnim(tl)

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
        if(this.particules){
            this.particules.update()
        }
        if(Monolith.SCREEN_OBJ.length > 0){
            Monolith.SCREEN_OBJ.forEach(elt => {
                elt.update()
            })
        }
    }
}