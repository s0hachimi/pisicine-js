export const getArchitects = () => {
    let architects = document.querySelectorAll("a")
    let nonArchitects = document.querySelectorAll("span")

    return [architects,  nonArchitects]
}

export const getClassical = () => {
    let classical = document.querySelectorAll(".classical")
    let nonClassical = document.querySelectorAll("a, span:not(.classical)")

    return [classical, nonClassical]
}

export const getActive = () => {
    let active = document.querySelectorAll(".active")
    let nonActive = document.querySelectorAll("a, span:not(.active)")

    return [active, nonActive]
}

export const getBonannoPisano = () => {
    let id = document.getElementById("BonannoPisano")
    let all = document.querySelectorAll(".classical.active")

    return [id, all]
}