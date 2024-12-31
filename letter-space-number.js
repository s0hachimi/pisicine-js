function letterSpaceNumber(str) {   
    let reg = /[a-z] [0-9](?![a-z0-9])/gi
    let regStr = str.match(reg)

    return Array.isArray(regStr) ? regStr : []
    
}

// console.log(letterSpaceNumber("g 5"))