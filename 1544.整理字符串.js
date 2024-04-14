/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    s = s.split('')
    for (let i=0;i<s.length-1 && s[i+1];) {
        if (s[i+1] !== s[i] && s[i+1].toLowerCase() === s[i].toLowerCase()) {
            s.splice(i, 2)
            i = i-2 < 0 ? 0 : i-2
        } else {
            i++
        }
    }
    return s.join('')
};
// @lc code=end
console.log(makeGood('abBAcC'))
