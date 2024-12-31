function filter(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let bool = func(arr[i], i, arr)
        if (bool) {
            res.push(arr[i])
        }
    }
    return res
}

function reject(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let bool = func(arr[i], i, arr)
        if (!bool) {
            res.push(arr[i])
        }
    }
    return res
}


function partition(arr, func) {

    let result = [];
    result.push(filter(arr, func))
    result.push(reject(arr, func))
    return result

}
