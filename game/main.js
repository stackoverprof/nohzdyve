////////GET THE CANVAS ELEMENT
const Canvas = document.getElementById('canvas')
const ctx = Canvas.getContext('2d')

Canvas.width = 326
Canvas.height = 484

const player = new Player()


//SCREEN UPDATER
const Updater = () => {
    ctx.clearRect(0, 0, 326, 484)

    player.Draw()
}
setInterval(Updater, 20)

