/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    date = date.split(' ')
    return date[2] + 
    '-' + 
    ((months.findIndex(v => v===date[1]) + 1) > 9 ? (months.findIndex(v => v===date[1]) + 1) : ('0' + (months.findIndex(v => v===date[1]) + 1))) + 
    '-' + 
    (date[0].slice(0,-2) > 9 ? date[0].slice(0,-2) : ('0' + date[0].slice(0,-2)))
};
// @lc code=end
console.log(reformatDate("1st Oct 2052"))
