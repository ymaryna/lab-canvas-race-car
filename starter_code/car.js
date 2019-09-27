const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 370
        this.y = 650
        this.w = 100
        this.h = 200

        this.vy = 0
        this.vx = 0

        this.img = new Image()
        this.img.src = "./images/car.png"

        this._setListeners()

    }

    _draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    _move() {
        this.x += this.vx
    }

    _setListeners() {
        document.onkeydown = (e) => {
            if(e.keyCode === RIGHT_KEY) {
                this.vx = 3
            } else if(e.keyCode === LEFT_KEY) {
                this.vx = -3
            }
        }

        document.onkeyup = (e) => {
            if(e.keyCode === RIGHT_KEY) {
                this.vx = 0
            } else if(e.keyCode === LEFT_KEY) {
                this.vx = 0
            }
        }
    }
}