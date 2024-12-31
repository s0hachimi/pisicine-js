function filterShortStateName(arr) {
    let newArr = arr.filter(ele => ele.length < 7)
    return newArr
}

function filterStartVowel(arr) {
    let newArr = arr.filter(ele => "aeiou".includes(ele[0].toLowerCase()))                   ///        if (element.toLowerCase() === "a" | "e" | "i" | "o" | "u") 
    return newArr
}

// console.log(filterStartVowel(["hello", "oehahaha", "aehniou"]));

function filter5Vowels(arr) {
    let newArr = arr.filter(ele => {
        let vowels = ele.split("").filter(r => "aeiou".includes(r))
        return vowels.length >= 5
    })
    return newArr
}

// console.log(filter5Vowels([
//     'California',
//     'Louisiana',
//     'North Carolina',
//     'South Carolina',
//     'South Dakota',
//     'West Virginia',
//   ]));


function filter1DistinctVowel(arr) {

    let newArr = arr.filter(ele => {
        let vowels = ele.split("").filter(r => "aeiou".includes(r.toLowerCase()))
        let contains = vowels.filter((r, _, vowels) => r.toLowerCase() === vowels[0].toLowerCase())

        if (contains.length <= 1) {
            return false
        }

        return vowels.length === contains.length
    })
    return newArr

}

// console.log(filter1DistinctVowel(["Alabama", "Elephant", "Iowa", "Onion", "Utah", "Sky"]));


function multiFilter(arr) {

    let newArr = arr.filter(ele => {
        if ((ele.capital.length >= 8 && !"aeiou".includes(ele.name[0].toLowerCase()) && /[aeiou]/i.test(ele.tag) && ele.region !== "South")) {
            return true
        }
    })
    return newArr

}

console.log(multiFilter([
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
      tag: 'MO',
      name: 'Missouri',
      capital: 'Jefferson City',
      region: 'Midwest',
    },
    {
      tag: 'PA',
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      region: 'Northeast',
    },
    {
      tag: 'RI',
      name: 'Rhode Island',
      capital: 'Providence',
      region: 'Northeast',
    },
  ]));