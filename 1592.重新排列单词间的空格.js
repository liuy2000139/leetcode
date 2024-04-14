/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let sum = text.length - text.replace(/\ /g, '').length
    let arr = text.split(' ').filter(v => !!v)
    if (arr.length === 1) {
        return arr.join('') + ' '.repeat(sum)
    }
    let avg = Math.floor(sum/(arr.length-1))
    let str = ' '.repeat(avg)
    let last = ' '.repeat(sum - avg*(arr.length-1))
    return arr.join(str) + last
};
// @lc code=end

let test = "  hello"
console.log(reorderSpaces(test));