function reverse(arr) {
    let reversArray = [];
    for (let i = arr.length-1; i >= 0; i--) {
        reversArray.push(arr[i])
    }

    return Array.isArray(arr) ? reversArray : reversArray.join("")

}

const array1 = ['one', 'two', 'three'];

console.log(reverse(array1));

console.log(reverse("abcdefg"));