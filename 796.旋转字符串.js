/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A===B) return true
    let flag = false
    for (let i=0;i<A.length && !flag;i++) {
        A = A.slice(1) + A.slice(0, 1)
        flag = A === B
    }
    return flag
};
// @lc code=end
console.log(rotateString('abcde', 'cdeab'))
