function indexOf(arr, value, index) {

    if ( index === undefined ) {
        index = 0
    }

    for (let i = index; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }

    return -1
}



function lastIndexOf(arr, value, index) {
    if ( index === undefined ) {
        index = 0
    }

    if (index === 0) {
        index = arr.length
    }

    for (let i = index ; i >= 0; i--) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}


function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true
        }
    }

    return false
}

// const animals = [99, 'Dodo', 'Tiger', 1 , 2, 8 , 6, 'Penguin', 'Dodo', 7];

// console.log(animals.lastIndexOf("Dodo", 7));
// console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
// console.log(lastIndexOf(animals, 'Dodo', 6));