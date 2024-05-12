import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line:string) {
    console.log(HJ9(line))
})

function HJ9(str:string):number{
  let arr = str.split('')
    let res = Array.from(new Set(arr.reverse()))
    return  parseInt(res.join(''))
}