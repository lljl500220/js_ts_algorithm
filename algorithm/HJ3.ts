import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let list:Array<number> = []
let length = 0
let index = -1
rl.on('line', function (line) {
    if(index === -1){
        length = Number(line)
        index++
    }else{
        list[index] = Number(line)
        index++
        if(index === length){
            console.log(HJ3())
        }
    }
});

function HJ3(){
    let arr = Array.from(new Set(list))
    arr.sort((a:number, b:number) => a - b)
    return arr.join("\n")
}