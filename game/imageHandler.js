////////FUNGSI PENGIMPORT GAMBAR SELURUH SET FRAME ANIMASI
function getFrameSet(folder) {
    const frameset = []
    for (let i = 0; i < 26; i++) {
        frameset[i] = new Image()
        frameset[i].src = `${folder}/${i}.png`
    }
    return frameset
}
////////FUNGSI PENGIMPORT GAMBAR BACKGROUND
function getImage(source) {
    const image = new Image()
    image.src = source
    return image
}
