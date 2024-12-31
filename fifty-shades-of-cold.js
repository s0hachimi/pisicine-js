import { colors } from "./fifty-shades-of-cold.data.js"

function generateClasses() {
    const style = document.createElement('style')
    colors.forEach((color) => {
        style.textContent += `
        .${color} {
         background: ${color};
         }
        `
    })
    document.head.appendChild(style)
}


function generateColdShades() {

    let color = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]
   
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < color.length; j++) {
            if (colors[i].indexOf(color[j]) !== -1) {
                // console.log(colors[i]);
                let div = document.createElement("div")
                div.className = colors[i]
                div.textContent = colors[i]
                document.body.appendChild(div)
                break
            }
        }
    }
}
function choseShade(click) {

    let divs = [...document.querySelectorAll("div")]

    divs.forEach(div => {
        if (!div.classList.contains(click)) {
            div.className = click
        }
    })
    


}
export { generateClasses, generateColdShades, choseShade }