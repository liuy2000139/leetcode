/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let res = 0
    num = num.toString(2).split('')
    for (let i=0;i<num.length;i++) {
        if (num[i] === '0') num[i] = '1'
        else num[i] = '0'
    }
    res = parseInt(num.join(''), 2)
    return res
};
// @lc code=end

// findComplement(5)