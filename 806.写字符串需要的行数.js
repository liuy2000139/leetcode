/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let lines = 1
    let last = 0
    for (let i=0;i<S.length;i++) {
        let width = widths[S[i].charCodeAt()-97]
        if (last + width > 100) {
            lines++
            last = width
        } else {
            last += width
        }
    }
    return [lines, last]
};
// @lc code=end

console.log(numberOfLines(
    [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    'bbbcccdddaaa'
))