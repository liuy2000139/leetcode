/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    if (s.length === 1) return true
    if (s.indexOf('LLL') > -1 || s.indexOf('A') !== s.lastIndexOf('A')) return false
    return true
};
// @lc code=end
