function minFallingPathSum(matrix: number[][]): number {
    // 状态转移方程
    // dp[i][j] = Math.min(matrix[i-1][j-1],matrix[i-1][j],matrix[i-1][j+1]) + matrix[i][j]
    // 需要考虑边界问题
    let m = matrix.length
    let dp = new Array(m).fill(0).map(() => new Array(m).fill(0))
    dp[0] = matrix[0]
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < m; j++) {
            // 如果j-1 < 0
            if (j - 1 < 0) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i][j]
            }
            // 如果j+1 > n - 1
            else if (j + 1 > m - 1) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + matrix[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i][j]
            }
        }
    }
    return Math.min(...dp[m - 1])
}

console.log(minFallingPathSum([[-19,57],[-40,-5]]));

// 优化这个方法，可以关注到，dp[i][j]的状态最多受到dp[i-1][j-1],dp[i-1][j],dp[i-1][j+1]的影响，因此可以只存储这三个值，减少空间复杂度
