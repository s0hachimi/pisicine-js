export function generateLetters() {

    let alpha = "ABCDEFGHKLMNOPQRIJSTUWYZVX"
    let size = 11

    for (let i = 0; i < 120; i++) {
        let div = document.createElement("div")
        let alphaRand = Math.trunc(Math.random() * 26)
        div.textContent = alpha[alphaRand]
        div.style.fontSize = size + "px"
        if (i < 40) {
            div.style.fontWeight = 300
        } else if (i < 80) {
            div.style.fontWeight = 400
        } else {
            div.style.fontWeight = 600
        }
        document.body.append(div)
        size++
    }

}

