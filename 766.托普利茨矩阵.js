/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let flag = true
    for (let i=0;i<matrix.length-1 && flag;i++) {
        let p = matrix[i].slice(0, -1)
        let q = matrix[i+1].slice(1)
        flag = q.join('-') === p.join('-')
    }
    return flag
};
// @lc code=end

