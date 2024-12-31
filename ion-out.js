function ionOut(str) {
    let reg = /(\b\w*(?<=t)(ion)\b)/ig
    let res = [];

   let arr = str.match(reg)

   if (arr === null) {
    return []
   }

    for (let i of arr) {
        res.push(i.replace("ion", ""))
    }

   

    return res


}
