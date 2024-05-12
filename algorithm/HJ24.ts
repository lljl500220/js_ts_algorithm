import * as readline from "node:readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
rl.on("line", function (line: string) {
    if (count === 0) count = Number(line);
    else {
        let dpLeft = HJ24(line.split(" "));
        let dpRiht = HJ24(line.split(" ").reverse()).reverse();
        let max = 1;
        for (let i = 0; i < count; i++) {
            max = Math.max(max, dpLeft[i] + dpRiht[i]);
        }
        console.log(count - max + 1)
    }
});

function HJ24(arr: string[]) {
    let dp = new Array(arr.length)
    dp[0] = 1
    for (let i = 1; i < arr.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return dp;
}
