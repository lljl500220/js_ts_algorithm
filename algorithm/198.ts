function rob(nums: number[]): number {
    let n = nums.length
    let dp = new Array(n+1).fill(0)
    for (let i = 2; i <= n; ++i) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i-1])
    }
    return Math.max(...dp)
}

// 优化
export function rob1(nums: number[]): number {
    let d1 = 0
    let d2 = 0
    for (const num of nums) {
        let d = Math.max(d2,d1 + num)
        d1 = d2
        d2 = d
    }
    return d2
}

