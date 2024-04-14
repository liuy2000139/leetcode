/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let res = []
    let n = 0
    while(n<=N) {
        if (n === 0) res.push(0)
        else if (n === 1) res.push(1)
        else res.push(res[n-1] + res[n-2])
        n++
    }
    return res[res.length - 1]
};
// @lc code=end

