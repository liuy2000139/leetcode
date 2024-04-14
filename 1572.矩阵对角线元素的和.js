/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let len = mat.length
    let count = 0
    for (let i=0;i<mat.length;i++) {
        for (let j=0;j<mat[i].length;j++) {
            if (len - 1 === i+j || i ===j) {
                count += mat[i][j]
            }
        }
    }
    return count
};
// @lc code=end

console.log(diagonalSum(
    [[1,2,3],
            [4,5,6],
            [7,8,9]]
))