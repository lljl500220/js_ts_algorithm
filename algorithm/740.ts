import {rob1} from "./198";

function deleteAndEarn(nums: number[]): number {
    let n = Math.max(...nums)
    let arr = new Array(n+1).fill(0)
    for (const arrElement of nums) {
        arr[arrElement] += arrElement
    }
    let d1 = 0
    let d2 = 0
    for (const num of arr) {
        let d = Math.max(d2,d1 + num)
        d1 = d2
        d2 = d
    }
    return d2
}

console.log(deleteAndEarn([3,4,2,2,3,3]));
