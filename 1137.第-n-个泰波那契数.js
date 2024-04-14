/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let res = []
    let i = 0
    while(i<=n) {
        if (i === 0) res.push(0)
        else if (i === 1) res.push(1)
        else if (i === 2) res.push(1)
        else res.push(res[i-1] + res[i-2] + res[i-3])
        i++
    }
    return res[n]
};
// @lc code=end

