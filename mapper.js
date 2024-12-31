function map(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(func(arr[i], i, arr))
    }

    return res
}


function flatMap(arr, func) {

    let res = []
    for (let i = 0; i < arr.length; i++) {
        let flat = func(arr[i], i, arr)
        if (Array.isArray(flat)) {
            res.push(...flat)
        } else {
            res.push(flat)
        }
    }
    return res


}
