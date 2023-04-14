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
        this.format = window.innerWidth > 500 ? "desktop" : "mobile"

        // Resize event
        this.initResizeEvent()
    }

    resizeWindowHandler(){
        this.format = window.innerWidth > 500 ? "desktop" : "mobile"
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

    addNewEvent(event){
        // this.eventsResize.push(event);
        // this.initResizeEvent()
    }




}