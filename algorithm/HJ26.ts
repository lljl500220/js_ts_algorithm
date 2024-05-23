import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line: string) {
    let res = line.split('')

    let list = line.split('').filter(r=>/[a-zA-Z]/.test(r)).sort((a:string,b:string)=>a.toLowerCase().localeCompare(b.toLowerCase()))

    for (let i = 0; i < res.length; i++) {
        if (/[a-zA-Z]/.test(line[i])){
            res[i] = list.shift()!
        }
    }

    console.log(res.join(''))
})