/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while (n !== 1 && n !== 7) {
        let arr = n.toString().split('')
        if(arr.length === 1) return false
        n = arr.map(v => Math.pow(v, 2)).reduce((a,b) => a+b,0)
    }
    return true

};
// @lc code=end
// 1, 7
console.log(isHappy(19))