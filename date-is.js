function isValid(date) {
    if ( !isNaN(date) && ( typeof date === "object" || typeof date === "number" )) {
        return true
    }
    return false    
}

function isAfter(date1, date2) {
    if ( date1 > date2 ) {
        return true
    }    
    return false
}
function isBefore(date1, date2) {
    if ( date1 < date2 ) {
        return true
    }    
    return false
}


function isFuture(date) {
    if ( Date.now() < date && ( typeof date === "object" || typeof date === "number" )) {
        return true
    }
    return false
}

function isPast(date) {
    if ( Date.now() > date && ( typeof date === "object" || typeof date === "number" )) {
        return true
    }
    return false
}

