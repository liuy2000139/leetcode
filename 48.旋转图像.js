/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length
    for (let i=0;i<n;i++) {
        matrix[i] = matrix[i].reverse()
    }
    for (let i = 0;i< n;i++) {
        for (let j=0;j<n-i;j++) {
            [matrix[i][j], matrix[n-j-1][n-i-1]] = [matrix[n-j-1][n-i-1], matrix[i][j]]
        }
    }

    
    return matrix
};
// @lc code=end
// console.log(rotate([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ]));
