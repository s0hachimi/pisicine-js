function pyramid(str, n) {
    
    let x = "";
    let s = "";
    let w = str;

    let space = (n*str.length)
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= space-str.length; j++) {
            x += " ";
        }
            x += s + w + s;
            w = s + w + s;
            s = str;

        if (i !== n) {
            x += "\n"
        }
        space -= str.length
        
    }

    return x

}

// console.log(pyramid('*', 15));
// console.log("                      ".length);