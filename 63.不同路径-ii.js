/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length,n=obstacleGrid[0].length
    if (obstacleGrid[0][0] === 1) return 0
    if (m===n && m === 1) {
        if (obstacleGrid[0][0] === 0) return 1
        else return 0
    }
    dp = []
    for (let i=0;i<m;i++) {
        dp[i] = dp[i] || []
        for (j=0;j<n;j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            } else if (i === j && i === 0) {
                dp[i][j] = 0
            } else if ((i===0 && j ===1) || (i===1 && j ===0)) {
                dp[i][j] = 1
            } else if (i===0) {
                dp[i][j] = dp[i][j-1]
            } else if (j===0) {
                dp[i][j] = dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j]+ dp[i][j-1]
            }
        }
    }
    // console.log(dp)
    return dp[m-1][n-1]
};
// @lc code=end

// console.log(uniquePathsWithObstacles([[0,0],[1,1],[0,0]]))