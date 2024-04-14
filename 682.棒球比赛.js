/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let res = []
    for (let s of ops) {
        if (s === 'C') {
            res.pop()
        } else if (s === 'D') {
            res.push(res[res.length-1]*2)
        } else if (s === '+') {
            res.push(res[res.length-1] + res[res.length-2])
        } else {
            res.push(parseInt(s))
        }
    }
    return res.reduce((a,b) => a+b,0)
};
// @lc code=end

