/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    return nums.find(t => nums.indexOf(t) === nums.lastIndexOf(t))

};
// @lc code=end
// console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))
