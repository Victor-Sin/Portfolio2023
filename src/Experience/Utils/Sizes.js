import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.eventsResize = [];
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)
        this.setFormat()


        // Resize event
        this.initResizeEvent()
    }

    resizeWindowHandler(){
        this.setFormat()
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)
        this.eventsResize.forEach(eltFunct => {
            eltFunct();
        })

        this.trigger('resize')
    }

    initResizeEvent(){
        window.removeEventListener("mousemove", this.resizeWindowHandler.bind(this))
        window.addEventListener("mousemove", this.resizeWindowHandler.bind(this))
    }

    setFormat(){
        if(window.innerWidth <= 1140 && window.innerWidth > 580){
            this.format = "tablet";
        }
        else if(window.innerWidth < 580){
            this.format = "mobile";
        }
        else{
            this.format = "desktop";

        }
    }

    addNewEvent(event){
        // this.eventsResize.push(event);
        // this.initResizeEvent()
    }




}