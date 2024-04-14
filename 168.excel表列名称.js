/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let res = []
    let num = n
    while(num > 26) {
        num--
        res.unshift(num%26 + 1)
        num = (num-num%26)/26
    }
    res.unshift(num)
    // console.log(res)
    return res.map(v => String.fromCharCode(v+64)).join('')
};
// @lc code=end
// convertToTitle(701)
