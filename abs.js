function isPositive(n) {
    if (n > 0) {
        return true 
    } else {
        return false
    }
}

function abs(n) {

    let x = 1;
    if (n < 0) {
        x =-1
    }

   return n = n * x
}

console.log(abs(-5));
