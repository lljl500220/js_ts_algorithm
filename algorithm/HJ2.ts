import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str = ""
let code = ""
rl.on('line', function (line) {
    if(str === "") {
        str = line
    }
    else {
        code = line
        console.log(HJ2());
    }
});

function HJ2 () {
    let obj = 0
    let list = str.split("")
    for (let strElement of list) {
        if (strElement.toLowerCase() === code.toLowerCase()) {
            obj++
        }
    }
    return obj
}