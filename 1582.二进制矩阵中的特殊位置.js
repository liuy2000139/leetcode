/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let res = []
    for (let i=0;i<mat.length;i++) {
        for (let j=0;j<mat[i].length;j++) {
            if (
                mat[i][j] === 1 && 
                mat[i].filter(v => v === 1).length === 1 &&
                mat.map(v => v[j]).filter(v => v === 1).length === 1
            ) {
                res.push([i,j])
            }
        }
    }
    return res.length
};
// @lc code=end

console.log(numSpecial(
    [[1,0,0],
            [0,0,1],
            [1,0,0]]
))