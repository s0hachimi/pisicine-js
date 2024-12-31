
function round(num) {
    if (num >= 0) {
        num += 0.5
    } else {
        num -= 0.5
    }
    return trunc(num)
}

function ceil(num) {
    let res = 0;
    let s = 1;
    if (num > 0 ) {
        for (let i = 0; i < num; i++) {
            res++
        }
    } else {
        num = -num
        s = -1
        for (let i = 1; i <= num; i++)  {
            res++
        }
    }
    return trunc(s * res)
 }

function floor(num) {
    let res = 0;
    let s = 1;
    if (num > 0 ) {
        for (let i = 1; i <= num; i++) {
            res++
        }
    } else {
        s = -1
        for (let i = num; i < 0; i++) {
            res++
        }
    }



    return trunc(s * res)
}

function trunc(num) {

    let n = false 
    if (num < 0) {
        num = -num
        n = true
    }
    let copyNum = num;
         while (num >= 1) {
              let c = 1
          while (c <= num) {
            c *= 10
         }
         num -=  c / 10     
    }

   copyNum -= num

    return n ? -copyNum  : copyNum

}

