function cherryPickup(grid: number[][]): number {
    let n = grid.length;
    let dp = new Array(n * 2 - 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(-Number.MAX_VALUE)))
    //先定义一个三维数组dp，dp[k][x1][x2]表示第k步两个人分别在(x1,k-x1)和(x2,k-x2)的最大樱桃数
    dp[0][0][0] = grid[0][0]

    for (let k = 1; k < 2 * n - 1; ++k) {
        for (let x1 = Math.max(0, k - n + 1); x1 < Math.min(n, k + 1); ++x1) {
            for (let x2 = Math.max(0, k - n + 1); x2 < Math.min(n, k + 1); ++x2) {
                if (grid[x1][k - x1] === -1 || grid[x2][k - x2] === -1) {
                    continue
                }
                for (let j = -1; j <= 0; ++j) {
                    for (let k = -1; k <= 0; ++k) {
                        let y1 = x1 + j, y2 = x2 + k
                        if (y1 >= 0 && y2 >= 0) {
                            dp[i][x1][x2] = Math.max(dp[k][x1][x2], dp[k - 1][y1][y2] + grid[x1][k - x1] + (x1 !== x2 ? grid[x2][k - x2] : 0))
                        }
                    }
                }
            }
        }
    }
    return Math.max(0, dp[2 * n - 2][n - 1][n - 1])
}