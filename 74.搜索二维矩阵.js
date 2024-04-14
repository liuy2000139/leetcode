/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // return matrix.toString().split(',').includes(target.toString())
    let item = matrix.find(v => v[0]<=target && v[v.length-1] >= target)
    if (!item) return false
    return item.includes(target)
    
};
// @lc code=end

