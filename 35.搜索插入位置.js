/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target, base = 0) {
    if (nums.length === 1) {
        const last = nums[0]
        if (last === target) return base
        if (last < target) return base + 1
        return base ? base - 1 : 0
    }

    const mid = parseInt(nums.length / 2)

    if (nums[mid] === target) return mid + base

    if (nums[mid] > target) {
        return searchInsert(nums.slice(0, mid), target, base)
    }
    return searchInsert(nums.slice(mid), target, mid + base)

};
// @lc code=end
