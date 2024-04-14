/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    nums = nums.join('').split('0').sort((a,b) => b.length - a.length)
    return nums[0].length
};
// @lc code=end


