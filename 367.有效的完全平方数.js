/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let res= false
    if (num === 0 || num === 1) {
        return true
    }
    for(let i = 2;i < num; i++) {
        if (i * i === num) {
            res = true
        }
    }
    return res
};
// @lc code=end

