function fold(arr, adder, init) {

    for (let i = 0; i < arr.length; i++) {
        init = adder(init, arr[i])
    }
    return init

}

function foldRight(arr, adder, init) {
    for (let i = arr.length-1; i >= 0; i--) {
        init = adder(init, arr[i])
    }
    return init
}

function reduce(arr, adder) {
    let init = arr[0]
    for (let i = 1; i < arr.length; i++) {
        init = adder(init, arr[i])
    }
    return init
}

function reduceRight(arr, adder) {
    let init = arr[arr.length-1]
    for (let i = arr.length-2; i >= 0; i--) {
        init = adder(init, arr[i])
    }
    return init
}

// const adder = (a, b) => a + b


// console.log(fold([1, 2, 3], adder, 2));
// console.log(foldRight([1, 2, 3], adder, 2));
// console.log(reduce([1, 2, 3], adder));
// console.log(reduceRight([1, 2, 3], adder));