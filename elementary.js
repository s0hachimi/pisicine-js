function multiply(a, b) {
    let res = 0;
    let f = false;
    if (b < 0) {
        f = true
        b =-b
    }

   for (let i = 0 ; i < b; i++) {
        res += a
   }

   if (f) {
    b =-b
   }
 
   if (a < 0 && b < 0) {
        res = -res
   } else if (a > 0 && b < 0) {
        res = -res
   }

   return res
}

// console.log(multiply(-1, 3));



function divide(a, b) {
    let res = 0;
    let s = 1;
    if (a > 0 && b < 0){
        s = -1
        b =-b
    }
    if (a < 0 && b > 0) {
        s = -1
        a = -a
    }

    if (a < 0 && b < 0) {
        b =-b
        a = -a
    }

     while (a >= b) {
          a -= b
         res++;
  }

   return multiply(s, res)
}

// console.log(divide(10, 0));

function modulo(a, b) {

    let res = 0;
//     let s = 1;

//    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
//         s = -1
//    }
   
    res = a - multiply(divide(a, b), b)

    return res
  
}

// console.log(modulo(123, -22));