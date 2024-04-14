/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let res = false
    if (nums.length <= 1) return false
    for (let i=0;i<nums.length && !res;i++) {
        if (nums.lastIndexOf(nums[i]) !== i) {
            res = true
        }
    }
    return res
};
// @lc code=end

