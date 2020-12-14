////////OBJECT PLAYER - YANG BISA DIKENDALIKAN DENGAN KEYBOARD
function Player() {
    this.width = 49.44
    this.height = 82
    this.velocity = {X: 0, Y: 0}
    this.frame = 0
    this.image = getFrameSet('assets/frameset/player')

    this.Position = {
        X: 0,
        Y: 0
    }
    
    this.Move = () => {
        this.Position.X += this.velocity.X
        this.Position.Y += this.velocity.Y
    }
    
    this.Framer = () => {
            this.frame++
            console.log(this.frame)
            if(this.frame >= 8) this.frame = 0
    }

    this.Draw = () => {
        //Method ini digunakan untuk merender di canvas
        this.Move()
        this.Framer()
        //Merender ke canvas menggunakan ctx 2D
        console.log(this.height)
        console.log(this.width)
        ctx.drawImage(this.image[this.frame], this.Position.X, this.Position.Y, this.width, this.height)
    }
}
