import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//HJ28
const prime = (num: any): boolean => { //判断是否为素数
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};
const even = (num: number | any): boolean => {
    return num % 2 === 0;
};

let N = 0; //左侧数组长度
let M = 0; //右侧数组长度
let k = 0; //记录输入字符串长度，同时用于判断是否第一次输入
let odds: number[] = []; //奇数串
let evens: number[] = []; //偶数串
let eToO: any = []; //记录当前偶数匹配的奇数定位
let oddStatus: any = []; //记录当前奇数是否被访问过
let mapPrime: any = []; // 左侧和右侧的公共边（两数相加能为素数）
rl.on("line", (line: string) => {
    if (k === 0) k = Number(line);
    else {
        let temp = line.split(" ").map(Number);
        for (let number of temp) {
            if (even(number)) {
                evens.push(number);
            } else {
                odds.push(number);
            }
        }
        N = evens.length;
        M = odds.length;
        eToO = new Array(M).fill(-1); //初始化长度为奇数（右侧）长度的数组，匹配位置不能大于0
        mapPrime = new Array(N).fill(undefined).map(() => {
            return new Array(M).fill(false);
        }); //初始化公共边数量为0
        // 初始化map,eToO,oddStatus
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (prime(evens[i] + odds[j])) {
                    mapPrime[i][j] = true;
                }
            }
        }
        let res = 0;
        for (let i = 0; i < N; i++) {
            //开始遍历偶数列表
            oddStatus = new Array(M).fill(false); //初始化访问状态为false 全未访问
            if (HJ28(i)) {
                res++;
            }
        }
        console.log(res);
        rl.close();
    }
});

//HJ28
const HJ28 = (i: number): boolean => {
    for (let j = 0; j < M; j++) {
        if (mapPrime[i][j] && !oddStatus[j]) {
            //当前访问的奇数和偶数能组成素数并且当前的奇数没有被访问过
            oddStatus[j] = true; //j位置的素数已经访问过了
            if (eToO[j] === -1 || HJ28(eToO[j])) {
                //当前奇数还没有被匹配过或者当前奇数的原配能够找到另一个
                eToO[j] = i;
                return true;
            }
        }
    }
    return false;
};
