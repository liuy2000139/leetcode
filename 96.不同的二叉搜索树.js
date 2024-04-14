/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = []

    const fn = num => {
        if (num === 0) {
            dp[num] = 1
        } else if (num === 1) {
            dp[num] = 1
        } else if (num === 2) {
            dp[num] = 2
        } else {
            let temp = 0
            for (let i=1;i<=num;i++) {
                temp += dp[i-1] * dp[num-i]
            }
            dp[num] = temp
        }
    }
    for (let i=0;i<=n;i++) {
        fn(i)
    }
    return dp.pop()
};
// @lc code=end
// numTrees(3)
