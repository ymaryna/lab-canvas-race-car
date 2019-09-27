class Game {
    constructor(ctx) {
        this.ctx = ctx

        this.bg = new Background(ctx)
        this.car = new Car(ctx)
        this.intervalId = null;

        this.obs = [new Obstacle(ctx)]

        this.tick = 0
    }

    run() {
        this.intervalId = setInterval(() => {
          this._clear()
          this._draw()
          this._move()
        }, 1000 / 60)
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    _draw() {
        this.bg._draw()
        this.car._draw()
        this.obs.forEach(o => o._draw())

        this.tick++

        if (this.tick > Math.random() * 300 + 200) {
            this.tick = 0
            this._addObstacle()
        }
    }

    _addObstacle() {
        this.obs.push(new Obstacle(this.ctx))
    }

    _move() {
        this.bg._move()
        this.car._move()
        this.obs.forEach(o => o._move())
    }

   
}