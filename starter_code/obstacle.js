class Obstacle {
    constructor(ctx) {
        this.ctx = ctx

        this.x = this._randomNumber(46, 300)  //min 46  max 265
        this.y = -60 
        this.w = this._randomNumber(30, 300) //min 30 max 300 
        this.h = 40

        this.vy = 5

    }

    _draw() {
        this.ctx.fillRect(
          this.x,
          this.y,
          this.w,
          this.h
        );
      }

      _move() {
        this.y += this.vy
      }

      _randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min //Math.round(Math.random() * (max - min) + min) 
      }

}






// class Obstacle {
//   constructor(ctx) {
//       this.ctx = ctx

//       this.x = this._randomNumber(46, 300)  //min 46  max 265
//       this.y = -60 

//       this.vy = 5

//       this.img1 = new Image()
//       this.img1.src = "./images/arbusto.png"

//       this.img2 = new Image()
//       this.img2.src = "./images/roca.png"
      
//       this.img3 = new Image()
//       this.img3.src = "./images/charco.png"

//   }

//   _draw() {
//     this._pickObstacle()
    
//     }

//     _move() {
//       this.y += this.vy
//     }

//     _randomNumber(min, max) {
//       return Math.floor(Math.random() * (max - min)) + min
//     }

//     _pickObstacle() {

//       const arbusto = this.ctx.drawImage(
//         this.img1,
//         this.x,
//         this.y,
//         104.81,
//         100
//       )
//       const roca = this.ctx.drawImage(
//         this.img2,
//         this.x,
//         this.y,
//         129.38,
//         100.09
//       )
//       const charco = this.ctx.drawImage(
//         this.img3,
//         this.x,
//         this.y,
//         71.77,
//         53.39
//       )

//       const obstacleArr = [arbusto, roca, charco]
//       console.log(obstacleArr)
//       const randomObs = this._randomNumber(0,3)
//       return obstacleArr[randomObs]

//     }

// }


