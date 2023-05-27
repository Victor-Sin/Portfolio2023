import * as THREE from "three";
import Entity from "./World/GlobalScene/Entity";
import Lenis from "@studio-freight/lenis";
import Monolith from "./World/GlobalScene/Monolith";
import gsap,{Circ} from "gsap";

export default class PageHandler extends Entity{
    static instance = null
    onProject = false;

    constructor() {
        super();
        this.camera = this.experience.camera.instance
        this.cameraControls = this.experience.camera.controls

        if(PageHandler.instance){
            return PageHandler.instance;
        }
        PageHandler.instance = this;
        this.initScroll()
        this.initScrollProject()
        this.initProjectHandler()
    }


    initScroll(){

        this.mainLenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // https://www.desmos.com/calculator/brs54l4xou
            infinite: false,
        })
        this.mainLenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            this.scrollY = -scroll
            this.camera.position.y = 21.5 + this.scrollY/this.experience.sizes.height * 40
            this.cameraControls.target.y = 20 + this.scrollY/this.experience.sizes.height * 40
            this.environment.mainLight.position.y = 20 + this.scrollY/this.experience.sizes.height * 40
            this.environment.secondary.position.y = 20 + this.scrollY/this.experience.sizes.height * 30
            this.environment.mainLight.intensity = 20 - (this.environment.mainLight.position.y / -180)*20
            this.world.projectImages.position.y = this.scrollY/this.experience.sizes.height * 40;
            this.world.projectImages.position.y += this.sizes.format == "mobile" ? -5 : 0;
            this.scene.fog.color = this.world.fogColor.lerpColors(this.world.fogColor,this.world.finalFogColor,(this.scrollY/this.experience.sizes.height * 40) / -180  )


            if(Monolith.SCREEN_OBJ){
                Monolith.SCREEN_OBJ.forEach(elt => {
                    elt.initMousePosition()
                })
            }
        })

        const projects = gsap.utils.toArray('.project');
        const sectionsTitle = gsap.utils.toArray('.sectionTitle');


        projects.forEach(project => {
            const tl = gsap.timeline();
            const projTitle = project.querySelector(".projectTitle")
            const elts = project.querySelectorAll('.partTitle')
            const type = project.querySelector('.typeProject')
            const date = project.querySelectorAll('.date')
            const sub = project.querySelector('.sub .partTitle');
            const button = project.querySelector('.more');
            function enterAnim(tl){
                tl.set(elts,{
                    yPercent:120,
                }).set(type,{
                    yPercent:120,
                }).set(date,{
                    yPercent:120,
                })
                    .to(elts[0],{
                        yPercent:-120,
                        duration:0.5
                    }) .to(type,{
                    yPercent:-115,
                    duration:0.5
                },"<")
                    .to(sub ? sub : elts[1],{
                        yPercent:-120,
                        duration:0.5
                    },"<")
                    .to(date,{
                        yPercent:-115,
                        duration:0.5
                    },"<")
                    .to(button,{
                        opacity: 1,
                        duration: 0.25
                    },"<")
            }

            function leaveAnim(tl){
                tl
                    .to(elts[0],{
                        yPercent:-240,
                        duration:0.25
                    })
                    .to(type,{
                        yPercent:-240,
                        duration:0.25
                    },"<")
                    .to(sub ? sub : elts[1],{
                        yPercent:-240,
                        duration:0.25
                    },"<0.125")
                    .to(date,{
                        yPercent:-240,
                        duration:0.25
                    },"<")
                    .to(button,{
                        opacity: 0,
                        duration: 0.1
                    },"<")
            }


            gsap.to(project,{
                scrollTrigger: {
                    trigger: projTitle,
                    // markers: true,
                    start: "120% 90%", // when the top of the trigger hits the top of the viewport
                    end: "15% 30%", // end after scrolling 500px beyond the start
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
                    // markers: true,
                    start: "bottom 90%", // when the top of the trigger hits the top of the viewport
                    end: "top 30%", // end after scrolling 500px beyond the start
                    onEnter: (self) => {
                        sectionTitle.classList.add('active');
                    },
                }
            })
        });

    }

    initScrollProject(){
        this.projectLenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // https://www.desmos.com/calculator/brs54l4xou
            infinite: false,
            wrapper: document.querySelector(".projectWrapper"),
            content: document.querySelector(".projectPage")
        })
        this.projectLenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            // console.log(this.world.water.mesh.position)
            this.world.projectImages.position.y = this.scrollY/this.experience.sizes.height * 40 +  scroll/this.experience.sizes.height * 17.5 * (this.sizes.format == "mobile" ? 2 : 1);
            this.world.projectImages.position.y += this.sizes.format == "mobile" ? -5 : 0;
        })

        this.projectLenis.scrollTo(0,{
            immediate: true
        })
    }

    initProjectHandler(){
        this.tlProj = gsap.timeline({paused:true});
        this.tlProj.to(".homepage",{
            opacity:0,
        })
            .to(this.camera.position,{
                z: -120,
                duration:2,
                ease: Circ.easeInOut
            },"-.15")
            .to(this.cameraControls.target,{
                z: -135,
                duration:2,
                ease: Circ.easeInOut
            },"<")
            .to(this.world.surfaceElts.position,{
                z:-135,
                duration:2,
                ease: Circ.easeInOut
            },"<")
            .to(".projectPage",{
                opacity:1,
                duration:1.5
            },"<1.25");

        document.querySelector(".homepage").addEventListener("click",() => {

            this.toggleProjectAnimation();

        })
    }

    toggleProjectAnimation() {
        if (this.onProject) {
            this.tlProj.reverse();
            this.mainLenis.start()
            this.projectLenis.stop();
            this.projectLenis.scrollTo("start",{
                immediate: true
            })
            document.querySelector('.projectWrapper').style.pointerEvents = "none";
            this.changeGroupOpacity(this.world.projectImages,0,.5)

        } else {
            this.tlProj.play();
            this.mainLenis.stop()
            this.projectLenis.start();
            document.querySelector('.projectWrapper').style.pointerEvents = "auto";
            this.changeGroupOpacity(this.world.projectImages,1,2)
            this.world.monoliths.forEach(elt => {
                elt.modifyColor();
            })
        }
        this.onProject = !this.onProject;
    }

    changeGroupOpacity(group, targetOpacity, duration) {
        // Traverse all children of the group
        group.traverse((object) => {
            if (object.material) {
                // If the object has a material and it supports transparency
                if (object.material.transparent && object.material.uniforms.uOpacity) {
                    // Use GSAP library to animate the opacity change
                    gsap.to(object.material.uniforms.uOpacity, {
                        value: targetOpacity,
                        duration: duration,
                        ease: Circ.easeInOut,
                        delay: 1.25
                    });
                }
            }
        });
    }

    update()
    {
        if(this.mainLenis){
            this.mainLenis.raf(this.experience.time.current)
        }

        if(this.projectLenis){
            this.projectLenis.raf(this.experience.time.current)
        }
    }

}