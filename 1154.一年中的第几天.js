/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    date = date.split('-').map(v => parseInt(v))
    let num = 0
    let arr = [31,28,31,30,31,30,31,31,30,31,30,31]
    if ((date[0] % 100 === 0 && date[0] % 400 === 0) || (date[0] % 100 !== 0 && date[0] % 4 === 0)) arr[1] = 29
    for (let i=0;i<date[1]-1;i++) {
        num += arr[i]
    }
    return num + date[2]
};
// @lc code=end

