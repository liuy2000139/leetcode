/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = undefined
    for (let i=0;i<nums.length-k+1;i++) {
        let avg = nums.slice(i, i+k).reduce((a,b) => a+b, 0)/k
        if (max === undefined) max = avg
        else max = Math.max(max, avg)
    }
    return max
};
// @lc code=end

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
