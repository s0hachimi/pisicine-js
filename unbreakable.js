function split(str, exp) {                //  const str = 'ee,ff,g,';
    let arr = [];
    let x = "";
    let l = exp.length;
    let f = false;

    if (exp === "") {
        arr = [];
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }
        return arr
    }


    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i+l) !== exp) {
            x += str[i]
        }
        if (str.slice(i, i+l)  === exp || i === str.length-1)  {
            f = true
            arr.push(x)
            x = ""
            i += l-1
        }
    }

    if (exp === str.slice(str.length-l, str.length) || !f ) {
        arr.push(x)
    }

    
    return arr
}


function join(arr, exp) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length-1) {
            str += arr[i]
            break
        }
        str += arr[i] + exp
    }
    return str
}


// // console.log(split('ee,ff,g,', "," ));
// console.log(split('', 'Riad'));

// console.log(split('ee,ff,g,', ','));  // ['ee', 'ff', 'g', '']
// console.log(split('abc', ''));         // ['a', 'b', 'c']
// console.log(split('hello world', ' '));
// console.log(split('rrrr', "rr"));