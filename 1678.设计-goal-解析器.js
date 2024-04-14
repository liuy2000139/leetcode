/*
 * @lc app=leetcode.cn id=1678 lang=javascript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    return command.match(/(\G)|(\(\))|(\(\a\l\))/g).map(v => {
        if (v === '()') return 'o'
        else if (v === '(al)') return 'al'
        else return v
    }).join('')
};
// @lc code=end
