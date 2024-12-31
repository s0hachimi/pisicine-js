function adder(nums, init) {

    if (init === undefined) {
        init = 0
    }

    let result = nums.reduce(function (acc, curr) {
        return acc + curr;
    }, init)
    return result

}

function sumOrMul(nums, init) {

    if (init === undefined) {
        init = 0
    }

    let result = nums.reduce(function (acc, curr) {
        if (curr % 2 === 0) {
            return acc * curr;
        } else {
            return acc + curr;
        }
    }, init)

    return result

}

function funcExec(arr, init) {

    if (init === undefined) {
        init = 0
    }

    let result = arr.reduce(function (acc, curr) {
        return curr(acc)
    }, init)

    return result;

}

