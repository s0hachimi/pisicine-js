function triangle(str, n) {
    
    let x = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++ ) {
            x += str 
        }
        if (i !== n) {
            x += "\n"
        }
    }


    return x
}
