/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m===n && m === 1) return 1
    dp = []
    for (let i=0;i<m;i++) {
        dp[i] = dp[i] || []
        for (j=0;j<n;j++) {
            if (i === j && i === 0) {
                dp[i][j] = 0
            } else if (i===0 || j===0) {
                dp[i][j] = 1
            } else if ((i===0 && j ===1) || (i===1 && j ===0)) {
                dp[i][j] = 1
            } else {
                dp[i][j] = dp[i-1][j]+ dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1]

};
// @lc code=end

// console.log(uniquePaths(3,7))