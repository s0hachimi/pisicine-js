function cutFirst(str) { 
    let s = "";
    for (let i = 2; i < str.length; i++) {
        s += str[i]
    }
    return s
}
function cutLast(str) {
    let s = "";
    for (let i = 0 ; i < str.length-2; i++) {
        s += str[i]
    }
    return s
}
function cutFirstLast(str) {
    let s = "";
    for (let i = 2 ; i < str.length-2; i++) {
        s += str[i]
    }
    return s
}
function keepFirst(str) {
    let s = "";
    for (let i = 0 ; i < str.length; i++) {
        s += str[i]
        if (i === 1) {
           break
        }
    }
    return s
}
function keepLast(str) {
    let s = "";
    let x = str.length-2;
    if (str.length-2 < 0) {
        x = 0
    }
    for (let i = x ; i < str.length; i++) {
        s += str[i]
    }
    return s
}
function keepFirstLast(str) {
    if (str.length < 4 ) {
        return str
    }
    return keepFirst(str) + keepLast(str)    
}
