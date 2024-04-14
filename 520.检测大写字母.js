/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let arr = word.split('')
    if (arr.every(t => t.charCodeAt() >=65 && t.charCodeAt() <= 90)) return true
    else if (arr.every(t => t.charCodeAt() >=97 && t.charCodeAt() <= 122)) return true
    else if (arr[0].charCodeAt() >=65 && arr[0].charCodeAt() <= 90 && arr.slice(1).every(t => t.charCodeAt() >=97 && t.charCodeAt() <= 122)) return true
    else return false
};
// @lc code=end
