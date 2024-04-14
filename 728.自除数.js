/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = []
    for (let i=left;i<=right;i++) {
        let arr = i.toString().split('').map(v => parseInt(v))
        if (arr.some(v => v === 0)) continue
        if (arr.every(v => i%v === 0)) res.push(i)
    }
    return res
};
// @lc code=end
console.log(selfDividingNumbers(1, 22))
