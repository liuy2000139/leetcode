/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let sum = []
    if (nums === null || nums.length === 0) {
        return 0
    } else if (nums.length === 1) {
        return nums[0]
    } else {
        sum[0] = nums[0]
        sum[1] = Math.max(nums[0], nums[1])
        for (let i = 2; i < nums.length; i++) {
            sum[i] = Math.max(sum[i - 2] + nums[i], sum[i - 1]);
        }
        return sum[nums.length - 1];
    }
   
};
// @lc code=end
// console.log(rob([1,1]))
