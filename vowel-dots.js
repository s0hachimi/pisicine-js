var vowels = /(?<=[aeiou])/ig;

function vowelDots(str) {

    str = str.replace(vowels, ".")


    return str
}

