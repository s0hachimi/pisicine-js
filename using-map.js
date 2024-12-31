function citiesOnly(arr) {
    let result = arr.map((el) => el.city)
    return result
}


function upperCasingStates(arr) {

    let result = arr.map((el, i) => el.split(" ").map(x => x[0].toUpperCase() + x.slice(1, x.length)).join(" "))
    return result
}


function fahrenheitToCelsius(arr) {

    let result = arr.map(function (el) {
        if (el.split("").includes("C")) {
            return el
        } else {
            return (Math.floor((parseInt(el.slice(0, -2)) - 32) * 5 / 9)) + "°C"
        }
    })

    return result

}


function trimTemp(arr) {

    let result = arr.map(function (el) {
        el.temperature = el.temperature.replaceAll(" ", "")
        return el
    })

    return result

}

function tempForecasts(arr) {

    let result = arr.map((el) => (Math.floor((parseInt(el.temperature.slice(0, -2)) - 32) * 5 / 9)) + "°Celsius in " + el.city + ", " + el.state.split(" ").map(x => x[0].toUpperCase() + x.slice(1, x.length)).join(" "))

    return result
}
