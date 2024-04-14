/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) return false
    let res = [1]
    for (let i=2;i<=Math.floor(Math.sqrt(num));i++) {
        if (num%i === 0) {
            res.push(i)
            res.push(num/i)
        }
    }
    return res.reduce((a,b) => a+b,0) === num
};
// @lc code=end

