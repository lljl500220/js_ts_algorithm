import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
  console.log(HJ6(Number(line)))
});


function HJ6(num:number){
    let path = 2;
    let res:Array<number> = []
    while(path <= num && path * path <= num ){
        if(num % path === 0){
            res.push(path)
            num /= path
            path = 2
        }else{
            path++
        }
    }
    if(num !== 1){
        res.push(num)
    }
    res.sort((a,b)=>{
        return a-b
    })

    return res.join(' ')
}