function split(str, exp) {
    let arr = [];
    let x = "";
    let l = exp.length-1
    for (let i = 0; i < str.length; i++) {
        console.log(str.slice(i, l));
        
        if (str.slice(i, l) !== exp) {
            x += str[i]
        }
        if (str.slice(i, l)  === exp || i === str.length-1)  {
            arr.push(x.slice(0,i))
            x = ""
        }
    }
    if (exp === "") {
        arr = [];
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }
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
// const elements = ['Fire', 'Air', 'Water'];

// console.log(join(elements, ","));


const str = 'ggg - ddd - b';

console.log(split(str, ' - '));  //   ['ggg', 'ddd', 'b']

// console.log(str.split(""));

