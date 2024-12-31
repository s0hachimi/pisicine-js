

import { styles } from "./pimp-my-style.data.js";

 let i = 0;
 let done = false

export function pimp() {

    let button = document.querySelector("button")
   
    console.log(i);

    if (!done) {
        if ( i === styles.length-1 ) {
            button.classList.add(styles[i])
            button.classList.add("unpimp")
            done = true
        } else {
            button.classList.add(styles[i])
            i++
        }

    } else {
        if (i === 0) {
            button.classList.remove(styles[i])
            button.classList.remove("unpimp")
            done = false
        } else {
            button.classList.remove(styles[i])
            i--
        }
       
    }
    
}
