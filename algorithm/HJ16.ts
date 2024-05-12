import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Goods {
    v:number,
    w:number,
    q:number
}

let count = 0
let goods:Goods[] = []

rl.on('line', function (line:string) {
    if (count === 0){
        count = Number(line)
    }
    else{
        let [v,w,q] = line.split(' ').map(e=>Number(e))
        goods.push({v,w,q})
    }
})

function HJ16() {

}
