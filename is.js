
is.num = function name(arg) {
    return typeof arg === "number"
}

is.nan = function name(arg) {
    return Number.isNaN(arg)
}


is.str = function name(arg) {
    return typeof arg === "string"
}

is.bool = function name(arg) {
    return typeof arg === "boolean"
}

is.undef = function name(arg) {
    return typeof arg === "undefined"
}

is.def = function name(arg) {
    return typeof arg !== "undefined" 
}

is.arr = function name(arg) {
    return Array.isArray(arg)
}

is.obj =  function name(arg) {
   return arg !== null && !Array.isArray(arg) && typeof arg === "object"
}

is.fun =  function name(arg) {
    return typeof arg === "function"
}

is.truthy =  function name(arg) {
    return !!arg
}

is.falsy =  function name(arg) {
    return !arg
}


