function RNA(str) {

    let x = ""
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            x += "U"
        } else if (str[i] === "T") {
             x += "A"
        } else if (str[i] === "C") {
            x += "G"
        } else if (str[i] === "G") {
            x += "C"
        } 
    }

    return x
}

function DNA(str) {

    let x = ""
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "U") {
            x += "A"
        } else if (str[i] === "A") {
             x += "T"
        } else if (str[i] === "G") {
            x += "C"
        } else if (str[i] === "C") {
            x += "G"
        } 
    }

    return x

}