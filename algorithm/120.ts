function minimumTotal(triangle: number[][]): number {
    const m = triangle.length
    if (m === 1) {
        return triangle[0][0]
    }
    const n = triangle[m-1].length
    // 1. 先分析状态转移方程
    // 将左边对齐，则会发现位于(i,j)位置的路径大小来自于(i-1,j)位置的路径大小和(i-1,j-1)位置的路径大小
    // 但是，当i=0时，显然不需要计算，当j=0时，仅会来自(i-1,j)
    // 2. 定义dp数组
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(undefined))
    // 填充(0,0)位置
    dp[0][0] = triangle[0][0]
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            debugger
            if (j === 0){
                dp[i][j] = dp[i-1][j] + triangle[i][j]
            }else {
                if (dp[i-1][j] !== undefined){
                    dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j]
                }else {
                    dp[i][j] = dp[i-1][j-1] + triangle[i][j]
                }
            }
        }
    }
    return Math.min(...dp[m-1])
}

console.log(minimumTotal([[7],[-5,9],[6,5,2],[-8,-2,-7,3],[-2,6,-6,-1,4]]));
