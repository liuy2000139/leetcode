/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = [],m=grid.length,n=grid[0].length
    for (let i=0;i<m;i++) {
        dp[i] = dp[i] || []
        for (let j=0;j<n;j++) {
            if (i===0&&j===0) {
                dp[i][j]=grid[i][j]
            } else if (j===0) {
                dp[i][j] = grid[i][j]+ (dp[i-1][j] || 0)
            } else if (i === 0) {
                dp[i][j] = grid[i][j]+ (dp[i][j-1] || 0)
            } else {
                dp[i][j] = Math.min((dp[i-1][j] || 0) + grid[i][j], grid[i][j]+ (dp[i][j-1] || 0))   
            }
        }
    }
    return dp[m-1][n-1]
};
// @lc code=end

// console.log(minPathSum([[1,2,3],[4,5,6]]))