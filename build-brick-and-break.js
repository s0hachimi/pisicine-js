function build(arg) {
    let i = 1;
    let cou = 2;
    const time = setInterval(() => {
        
        let div = document.createElement("div")
    
        if (cou === 3) {
           div.dataset.foundation = "true"
            // div.setAttribute("foundation", "true")// normal attrebutes class id style name taf value
            cou = 0
        }

        div.id = "brick-" + i
        div.textContent = i
        document.body.append(div)
        if (i === arg) {
            clearInterval(time)
        }
        i++
        cou++
    }, 100)

}


function repair(...ids) {
let result = []
    ids.forEach(id => {
      result.push(document.getElementById(id))
    })

    result.forEach(r => {
        if (r.hasAttribute("data-foundation")) {
                r.dataset.repaired = "in progress"
            }else {
                r.dataset.repaired = "true"
            }
    })


}

function destroy() {
    let arr = Array.from(document.getElementsByTagName("div"))
    if (arr.length > 0){
        arr[arr.length-1].remove();
    }

}

export { build, repair, destroy }