function slice(arr, stIndex, opIndex) {
    let sl = [];

    if ( opIndex === undefined) {
        opIndex = arr.length
    } else if (opIndex > arr.length) {
        opIndex = arr.length
    }

    if (stIndex < 0) {
        stIndex = arr.length + stIndex
    }

    if (opIndex < 0) {
        opIndex = arr.length + opIndex
    }

    for (let i = stIndex; i < opIndex; i++) {
        sl.push(arr[i])
    }

    if (Array.isArray(arr)) {
        return sl
    } else {
        return sl.join("")
    }
}

// console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], -2));

// console.log(['ant', 'bison', 'camel', 'duck', 'elephant'].slice(-2));