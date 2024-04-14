/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    s = s.replace(/[^(|)]/g, '')
    let arr = []
    let max = 0
    if (s.length === 0) return max
    for (let t of s) {
        if (t === '(') {
            arr.push('(')
        } else {
            arr.shift()
        }
        max = Math.max(max, arr.length)
    }
    return max
};
// @lc code=end

let test= "(1+(2*3)+((8)/4))+1"
console.log(maxDepth(test));
