/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let obj = {}
    for (let s of moves) {
        obj[s] = obj[s] ? obj[s]+1:1
    }
    return obj.U === obj.D && obj.L === obj.R
};
// @lc code=end

console.log(judgeCircle('UD'))