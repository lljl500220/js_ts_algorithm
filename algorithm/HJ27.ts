import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", function (line: string) {
    let list = line.split(" ")
    let k = Number(list[list.length - 1])
    let code = list[list.length - 2]

    let maps = list.splice(2,list.length - 3)

    let newMaps = maps.filter((item,index)=>{
      return HJ27(code,item)
    })

    console.log(newMaps.length)

    if (newMaps.length < k){
        console.log('')
    }

    if (newMaps.length >= k){
        newMaps.sort()
        console.log(newMaps[k-1])
    }

})

function HJ27(code:string,item:string){
    if (code.length !== item.length) return false
    if (code === item) return false
    let codeList = code.split("")
    let itemList = item.split("")
    return codeList.sort().join("") === itemList.sort().join("")
}