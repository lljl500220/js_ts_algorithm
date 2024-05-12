import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Obj{
    [element:string]:number
}

let total = 0;
let index = 0
let obj:Obj = {};

rl.on('line', function (line:string) {
    if (total === 0) {
        total = Number(line);
    } else {
        let [a,b] = line.split(' ');
        if (!obj[a]) {
            obj[a] = Number(b);
        } else {
            obj[a] += Number(b);
        }
        index++;
    }
    if (index === total) {
        for (const key in obj) {
            console.log(key + ' ' + obj[key])
        }
    }
});
