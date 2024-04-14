/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let arr = []
    for(let i=0;i<nums.length;i++) {
        if (arr.includes(nums[i])) return true
        arr.push(nums[i])
        if (arr.length > k) arr.shift()
    }
    return false
};
// @lc code=end
