/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m=matrix.length;n=matrix[0].length
    let indexi = new Set(),indexj = new Set()
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (matrix[i][j] === 0) {
                indexi.add(i)
                indexj.add(j)
            }
        }
    }
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (indexi.has(i) || indexj.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
};
// @lc code=end

