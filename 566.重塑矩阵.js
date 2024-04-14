/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (nums.toString().split(',').length === r*c) {
        nums = nums.toString().split(',')
        let res = []
        for (let i=1;i<r+1;i++) {
            let arr = []
            for (let j=1;j<c+1;j++) {
                arr.push(nums[(i-1)*c + j-1])
            }
            res.push(arr)
        }
        return res
    } else {
        return [...nums]
    }
};
// @lc code=end

console.log(matrixReshape([[1,2,3,4]], 2, 2))