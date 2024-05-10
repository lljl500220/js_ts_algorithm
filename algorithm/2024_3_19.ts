function maximumScore(nums: number[], k: number): number {
    let res = 0
    let n = nums.length
    let left = k - 1
    let right = k + 1
    for (let i = nums[k];; --i) {
        while (left > -1 && nums[left] >= i){
            --left
        }
        while (right < n && nums[right] >= i){
            ++right
        }
        res = Math.max(res,(right - left - 1)*i)
        if (left === -1 && right === n){
            break
        }
    }
    return res;
}

console.log(maximumScore([1, 4, 3, 7, 4, 5], 3));