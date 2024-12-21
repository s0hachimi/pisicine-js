function words(str) {
    return str.split(" ")
}

function sentence(arr) {
    return arr.join(" ")
}

function yell(str) {
    return str.toUpperCase()
}

function whisper(str) {
    return "*" + str.toLowerCase() + "*"
}

function capitalize(str) {
    
    let s = ""; 
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
          s +=  String(str[i]).toLocaleUpperCase()
        } else {
          s +=  String(str[i]).toLowerCase()
        }
    }
    return s    
}

// console.log(words("hello jj hh gg"));
// console.log(sentence([ 'hello', 'jj', 'hh', 'gg' ]));
// console.log(yell("hello heh zx"));
// console.log(whisper("HHDF DJDD"));
console.log(capitalize("str"));


