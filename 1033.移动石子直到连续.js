/*
 * @lc app=leetcode.cn id=1033 lang=javascript
 *
 * [1033] 移动石子直到连续
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    [a,b,c] = [a,b,c].sort((a,b) => a-b)
    if (Math.abs(a-b) === 1 && Math.abs(b-c) === 1) return [0,0]
    let res = []
    if (Math.abs(a-b) === 1 || Math.abs(b-c) === 1) {
        res[0] = 1
        res[1] = Math.max(Math.abs(a-b), Math.abs(b-c)) - 1
    } else if (Math.abs(a-b) === 2 || Math.abs(b-c) === 2) {
        res[0] = 1
        res[1] = Math.abs(a-b) - 1 + Math.abs(b-c) - 1
    } else {
        res[0] = 2
        res[1] = Math.abs(a-b) - 1 + Math.abs(b-c) - 1
    }
    return res
};
// @lc code=end

// console.log(numMovesStones(3,5,1))