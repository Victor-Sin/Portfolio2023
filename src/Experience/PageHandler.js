import Entity from "./World/GlobalScene/Entity";
import Lenis from "@studio-freight/lenis";
import Monolith from "./World/GlobalScene/Monolith";
import data from "../data.json";
import gsap,{Circ} from "gsap";
import * as THREE from "three";

export default class PageHandler extends Entity{
    static instance = null
    onProject = false;
    scrollY = 0;
    currentProject = -1;

    constructor() {
        super();
        this.camera = this.experience.camera.instance
        this.cameraControls = this.experience.camera.controls
        this.data = data.projects;

        if(PageHandler.instance){
            return PageHandler.instance;
        }
        PageHandler.instance = this;
        this.initScroll()
        this.initScrollProject()
        this.initProjectHandler()
        this.initEvents()
    }


    initScroll(){
        this.scene.fog.color = this.world.fogColor.lerpColors(this.world.fogColor,this.world.finalFogColor,(this.scrollY/this.experience.sizes.height * 40) / -180  )
        this.positionScrollGlobal = 0;

        if(Monolith.SCREEN_OBJ){
            Monolith.SCREEN_OBJ.forEach(elt => {
                elt.initMousePosition()
            })
        }

        this.mainLenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // https://www.desmos.com/calculator/brs54l4xou
            infinite: false,
        })
        this.mainLenis.on('scroll', ({ scroll}) => {
            this.scrollY = -scroll
            this.positionScrollGlobal = this.scrollY/this.experience.sizes.height * 40;
            this.camera.position.y = 21.5 +  this.positionScrollGlobal
            this.cameraControls.target.y = 20 +  this.positionScrollGlobal
            this.environment.mainLight.position.y = 20 +  this.positionScrollGlobal
            this.environment.secondary.position.y = 20 +  this.positionScrollGlobal
            this.environment.mainLight.intensity = Math.max(20 - (this.environment.mainLight.position.y / -180)*40,1)
            this.scene.fog.color = this.world.fogColor.lerpColors(this.world.fogColor,this.world.finalFogColor,(this.scrollY/this.experience.sizes.height * 40) / -180  )


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
                        duration:0.5,
                        delay: 0.1
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
                    onEnter: () => {
                        enterAnim(tl)
                    },
                    onLeave: () => {
                        leaveAnim(tl)
                    },
                    onEnterBack: () => {
                        enterAnim(tl)

                    },
                    onLeaveBack: () => {
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
                    onEnter: () => {
                        sectionTitle.classList.add('active');
                    },
                }
            })
        });

    }

    initScrollProject(){
        this.world.projectImages.position.y = this.scrollY/this.experience.sizes.height * 40 +  scroll/this.experience.sizes.height * 17.5 * (this.sizes.format === "mobile" ? 2 : 1);
        this.world.projectImages.position.y += this.sizes.format === "mobile" ? -5 : -2.5;
        this.projectLenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // https://www.desmos.com/calculator/brs54l4xou
            wrapper: document.querySelector(".projectWrapper"),
            content: document.querySelector(".projectPage")
        })
        this.projectLenis.on('scroll', ({ scroll}) => {
            this.world.projectImages.position.y = this.scrollY/this.experience.sizes.height * 40 +  scroll/this.experience.sizes.height * 17.5 * (this.sizes.format === "mobile" ? 2 : 1);
            this.world.projectImages.position.y += this.sizes.format === "mobile" ? -5 : -2.5;
        })

        this.projectLenis.scrollTo(0,{
            immediate: true
        })

        gsap.timeline({
            scrollTrigger:{
                scroller: '.projectWrapper',
                endTrigger: ".projectWrapper",
                end: "bottom center",  // l'animation se terminera lorsque le bas de #endElement atteindra le centre de la fenêtre de défilement
                // markers: true,
                scrub: true,
            }
        })
            .set('.informations',{
            maskImage: "linear-gradient(to bottom,transparent 0%, black 25%)",
            scrub: true,
        })   .to('.informations',{
            maskImage: "linear-gradient(to bottom,transparent 75%, black 100%)",
            scrub: true,
        })
    }

    initProjectHandler(){
        this.tlProj = gsap.timeline({paused:true});
        this.tlProj.to(".homepage",{
            opacity:0,
        })
            .to(this.environment.mainLight.position,{
                z: -15.300 - 130,
                duration:1,
                ease: Circ.easeInOut
            },"-.25")
            .to(this.environment.secondary.position,{
                z: 5.300 - 140,
                duration:1,
                ease: Circ.easeInOut
            },"<")
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
            .to(".close",{
                opacity:1,
                pointerEvents: "auto",
                duration:2,
                ease: Circ.easeInOut
            },"<")
            .to(".projectPage",{
                opacity:1,
                duration: this.tlProj.reversed() ? .5 : 1.5
            },this.tlProj.reversed() ? "<" : "<1.25" );
    }

    backToSection(target){
        this.mainLenis.scrollTo(target,{
            duration:2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // https://www.desmos.com/calculator/brs54l4xou
        })
    }

    initEvents(){


        document.querySelector('p.nav-title').addEventListener("click",() => {
            if(this.onProject){
                this.toggleProjectAnimation();
                setTimeout(() => {
                    this.backToSection(0);
                },500)
            }
            else{
                this.backToSection(0);
            }
        })

        document.querySelector('.about').addEventListener("click",() => {
            if(this.onProject){
                this.toggleProjectAnimation();
                setTimeout(() => {
                    this.backToSection(document.getElementById("about"));
                },500)
            }
            else{
                this.backToSection(document.getElementById("about"));
            }
        })

        document.querySelectorAll(".more").forEach((elt,i) => {
            elt.addEventListener("click",() => {
                this.currentProject = i;
                this.toggleProjectAnimation(i);
                this.setInfos(this.currentProject);
            })
        })

        document.querySelector(".close").addEventListener("click",() => {
            this.toggleProjectAnimation();
        })
    }

    toggleProjectAnimation(index = -1) {
        if (this.onProject) {
            this.tlProj.reverse();
            this.mainLenis.start()
            this.projectLenis.stop();

            document.querySelector('.projectWrapper').style.pointerEvents = "none";
            this.changeGroupOpacity(this.world.projectImages,0,2)

        } else {
            this.tlProj.play();
            this.mainLenis.stop()
            this.projectLenis.start();
            this.projectLenis.scrollTo(10,{
                immediate: true
            })
            document.querySelector('.projectWrapper').style.pointerEvents = "auto";
            this.changeGroupOpacity(this.world.projectImages,1,2)
            this.world.projectImages.position.y = this.positionScrollGlobal;
            this.world.projectImages.position.y += this.sizes.format === "mobile" ? -5 : -2.5;
            setTimeout(() => {
                this.world.monoliths.forEach(elt => {
                    elt.modifyColor();
                })
            },500)

        }
        this.onProject = !this.onProject;
    }

    setInfos(index){
        if(index >= 0){
            document.querySelector(".informations h1").innerHTML = this.data[index].title;
            document.querySelector(".infos").innerHTML = this.data[index].content;
            document.querySelector(".job p").innerHTML = this.data[index].job;
            document.querySelector(".stack p").innerHTML = this.data[index].stack;
            document.querySelector(".status p").innerHTML = this.data[index].status;
            document.querySelector(".credits p").innerHTML = this.data[index].credits;
            document.querySelector(".website").style.display =  this.data[index].website == "none" ? "none" : "inline-block";
            document.querySelector(".website").href =  this.data[index].website ;
            document.querySelector(".github").style.display =  this.data[index].github == "none" ? "none" : "inline-block";
            document.querySelector(".github").href =  this.data[index].github ;

            if(this.data[index].video != "none"){
                document.querySelector(".video").innerHTML =  this.data[index].video;
                document.querySelector(".projectPage").classList.add("videoPage")
                this.world.projectImages.visible = false;
            }
            else{
                document.querySelector(".video").innerHTML = "";
                document.querySelector(".projectPage").classList.remove("videoPage")
                this.world.projectImages.visible = true;
            }
            this.changeGroupImages(this.world.projectImages);

        }
    }

    changeGroupOpacity(group, targetOpacity, duration) {
        // Traverse all children of the group
        let index = 0;
        group.traverse((object) => {
            if (object.material && object.material.transparent ) {
                if(object.material.uniforms && object.material.uniforms.uOpacity){
                    const image = this.resources.items[this.data[this.currentProject].photos[index]];

                    gsap.to(object.material.uniforms.uOpacity, {
                        value: image != undefined ? targetOpacity : 0,
                        duration: duration,
                        ease: Circ.easeInOut,
                    });

                    index++;

                }
                else{
                    gsap.to(object.material, {
                        opacity: targetOpacity,
                        duration: duration + (1 - targetOpacity),
                        ease: Circ.easeInOut,
                    });
                }

            }
        });
    }

    changeGroupImages(group) {
        // Traverse all children of the group
        let index = 0;
        group.traverse((object) => {
            if (object.material) {

                if(object.material.uniforms && object.material.uniforms.uTexture){
                    const image = this.resources.items[this.data[this.currentProject].photos[index]];

                    if(object.material.uniforms.uOpacity){
                        if(image == undefined){
                            object.material.uniforms.uOpacity.value = 0;
                        }
                    }

                    object.material.uniforms.uTexture.value = image;
                    index++;
                }
            }
        });
    }



    update()
    {
        if(!this.onProject && this.mainLenis){
            this.mainLenis.raf(this.experience.time.current)
        }

        if(this.onProject && this.projectLenis){
            this.projectLenis.raf(this.experience.time.current)
        }
    }

}