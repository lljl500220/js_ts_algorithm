import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    console.log(HJ1(line));
});

function HJ1 (str:string) {
    return str.split(" ").pop()!.length
}