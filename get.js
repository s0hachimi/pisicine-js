function get(src, path) {

 let x = path.split(".");
let curValue = src;

    for (let i of x) {

        if (curValue[i] === undefined) {
            return undefined
        }

        curValue = curValue[i]
    }

    return curValue

    
}


// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'

// console.log(get({ key: 'value' }, 'key'));
