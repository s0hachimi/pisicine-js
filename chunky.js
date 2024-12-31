function chunk(arr, size) {
    let resultyArr = [];
    for (let i = 0; i < arr.length; i++) {
            resultyArr.push(arr.slice(i, i+size))
            i += size-1
    }
    return resultyArr
}


// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// console.log([1, 2, 3, 4, 5, 6, 7].slice(0, 3));