import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    console.log(HJ7(Number(line)))
});


function HJ7(num:number):number{
    return Math.ceil(num)
}