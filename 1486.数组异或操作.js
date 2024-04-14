/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = [...new Array(n)].map((v,i) => {
        return start + 2 * i
    })
    return arr.reduce((a,b) => a^b,0)
};
// @lc code=end

console.log(xorOperation(5,0))