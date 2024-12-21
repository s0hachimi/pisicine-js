
// function round(num) {
//     if (num >= 0) {
//         num += 0.5
//     } else {
//         num -= 0.5
//     }
//     return trunc(num)
// }

// function ceil(num) {
//     let res = 0;
//     let s = 1;
//     if (num > 0 ) {
//         for (let i = 0; i < num; i++) {
//             res++
//         }
//     } else {
//         num = -num
//         s = -1
//         for (let i = 1; i <= num; i++)  {
//             res++
//         }
//     }
//     return trunc(s * res)
//  }

// function floor(num) {
//     let res = 0;
//     let s = 1;
//     if (num > 0 ) {
//         for (let i = 1; i <= num; i++) {
//             res++
//         }
//     } else {
//         s = -1
//         for (let i = num; i < 0; i++) {
//             res++
//         }
//     }



//     return trunc(s * res)
// }

// function trunc(num) {
//     let res = 0;
//     let s = 1;
//     if (num < 0) {
//         num = -num
//         s = -1
//     }

//     for (let i = 1; i <= num; i++) {
//         res++
//     }

//     return s * res

// }




// const nums = [3.7, -3.7, 3.1, -3.1, 5]

// console.log(nums.map(round));
// console.log(nums.map(floor));
// console.log(nums.map(trunc));
// console.log(nums.map(ceil));



function round(num) {
    let integerPart = trunc(num); 
    if (num >= 0) {
        if (num - integerPart >= 0.5) {
            return integerPart + 1;
        }
    } else {
        if (integerPart - num >= 0.5) {
            return integerPart - 1
        }
    }
    return integerPart
}

function ceil(num) {
    let integerPart = trunc(num); 
    if (num > 0 && num !== integerPart) {
        return integerPart + 1
    }
    return integerPart
}

function floor(num) {
    let integerPart = trunc(num);
    if (num < 0 && num !== integerPart) {
        return integerPart - 1
    }
    return integerPart
}

function trunc(num) {
        let counter = 0;
        if (num > 0xfffffffff) {
            num -= 0xfffffffff;
            counter += 0xfffffffff;
        }
        let neg = false;
        if (num < 0) {
            neg = true;
            num = -num;
        }
        let numCopy = num;
        while (!(numCopy < 1 && numCopy > -1)) {
            numCopy -= 1;
            counter++;
        }
        return neg ? -counter : counter;
}
