import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let index = 0
let count = 0
let list:Array<string> = []
rl.on('line', function (line:string) {
    if (index === 0){
        console.log(line)
        index = Number(line)
    }else {
        list.push(line)
        count++
    }
    if (count === index - 1){
        //将list进行字典排序
        list.sort((a:string, b:string) => {
            return a.localeCompare(b)
        })


        console.log(list.join('\n'))
    }
})
