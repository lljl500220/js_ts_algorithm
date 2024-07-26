function uniquePathsWithObstacles(obstacleGrid: number[][]) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let res = new Array(n).fill(0)
    if (obstacleGrid[0][0] === 1) {
        return 0
    }else res[0] = 1
    for(let i = 0;i<m;i++){
        for(let j = 0;j < n;j++){
            if(obstacleGrid[i][j] === 1){
                res[j] = 0
                continue;
            }
            if(j-1 >= 0 && obstacleGrid[i][j-1] === 0){
                res[j] += res[j-1]
            }
        }
    }
    return res[n-1]
}

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
