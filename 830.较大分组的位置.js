/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let arr = s.match(/(.)\1{2,}/g) || []
    let res = []
    for (let str of arr) {
        let idx = s.indexOf(str)
        let len = str.length
        res.push([idx, idx + len - 1])
        s = s.slice(0, idx) + '_'.repeat(len) + s.slice(idx + len)
    }
    return res
};
// @lc code=end

console.log(largeGroupPositions("nnnhaaannnm"));