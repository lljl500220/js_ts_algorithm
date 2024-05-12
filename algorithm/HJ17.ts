import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line:string) {
    const tokens = line.split(';')
    let lie:number[] = [0,0]
    let reg = new RegExp(/^[ASDW]\d{1,2}$/)
    tokens.forEach(item=>{
        if(reg.test(item)){
            let code = item[0]
            let len:number = parseInt(item.slice(1))
            console.log(code,len)
            switch(code){
                case 'A':
                    lie[0] = lie[0] - len;
                    break;
                case 'D':
                    lie[0] = lie[0] + len;
                    break;
                case 'W':
                    lie[1] = lie[1] + len
                    break;
                case 'S':
                    lie[1] = lie[1] - len
                    break;
            }
            console.log(lie)
        }
    })

    console.log(lie.join(','))
});