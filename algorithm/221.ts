function maximalSquare(matrix: string[][]): number {
    // 先来分析一下 什么叫做 正方形 显然，对于 matrix[i][j]的一个点，当它自己，左，上，以及左上都为1时 会组成一个正方形
    // 那么这个题，我们可以换个方式，不去求最大面积，而是求最大正方形的边长
    let m = matrix.length
    let n = matrix[0].length
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    let maxLine = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === "1") {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
            }
            maxLine = Math.max(maxLine, dp[i][j])
        }
    }
    return maxLine * maxLine
}

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));
