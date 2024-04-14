/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = []
    for (let i=1;i<=n;i++) {
        const temp = Math.sqrt(i)
        if (temp === Math.floor(temp)) {
            dp[i] = 1
        } else {
            if (i === 1) {
                dp[i] = 1
            } else if (i === 2) {
                dp[2] = 2
            } else {
                let min = Infinity
                for (let j=i-1;j>=i/2;j--) {
                    min = Math.min(min, dp[j] + dp[i-j])
                }
                dp[i] = min
            }
        }
        
    }
    return dp[n]
};
// @lc code=end

