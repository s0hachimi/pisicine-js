function longWords(arr) {  
    return arr.every(ele => ele.length >= 5)
}

function oneLongWord(arr) {
    return arr.some(ele => ele.length >= 10)
}

function noLongWords(arr) {
    return  arr.every(ele => ele.length < 7)
}

