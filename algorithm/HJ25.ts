import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let I:any[] = []
let R:any[] = []
rl.on("line",(line:string)=>{
    if (I.length === 0){
        I = line.split(" ")

    }else {
        R = line.split(" ")
        R.shift()
    }
})
rl.on("close",()=>{
    let NR = Array.from(new Set(R))
    NR.sort((a:any,b:any)=>{
        return a-b
    })
    let res = []
    for (const nrElement of NR) {
        let temp = []
        for (let j = 1; j < I.length; j++) {
            if (I[j].includes(nrElement)){
                temp.push(j-1)
                temp.push(I[j])
            }
        }
        if (temp.length !== 0){
            res.push(nrElement)
            res.push(temp.length / 2)
        }
        res = res.concat(temp)
    }
    res.unshift(res.length)
    console.log(res.join(" "))
})