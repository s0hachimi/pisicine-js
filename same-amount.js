function sameAmount(str, reg1, reg2) {
    reg1 = new RegExp(reg1, "g")
    reg2 = new RegExp(reg2, "g")

    let res1 = str.match(reg1)
    let res2 = str.match(reg2)
    if (res1 === null && res2 === null){
        return true
    } else if (res2 === null || res1 === null ) {
        return false
    }


    return res1.length === res2.length
   
}
