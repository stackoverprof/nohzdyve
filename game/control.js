/////////CONTROLLER - KEYBOARD EVENT HANDLER
let isRightPressed = false
let isLeftPressed = false

//ketika ditekan (press down) jalankan ini
const controlling = (e) => {
    if (e.which == 65 || e.which == 37){
        //GO LEFT 
        isLeftPressed = true
        player.velocity.X = -5
    } else if (e.which == 68 || e.which == 39){
        //GO RIGHT
        isRightPressed = true
        player.velocity.X = 5
    }
}
    
//ketika jari diangkat jalankan ini
const uncontrolling = (e) => {
    if (e.which == 65 || e.which == 37){
        //UN-GO LEFT 
        isLeftPressed = false
        if (isRightPressed) player.velocity.X = 5
        else player.velocity.X = 0

    } else if (e.which == 68 || e.which == 39){
        //UN-GO RIGHT
        isRightPressed = false
        if (isLeftPressed) player.velocity.X = -5
        else player.velocity.X = 0     

    }
}
//menambah event listener pada ketikan keyboard
document.addEventListener('keydown', controlling)
document.addEventListener('keyup', uncontrolling)
