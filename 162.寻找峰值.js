/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const len = nums.length
    if (len === 1) {
        return 0
    }
    let res = -1
    for (let i=1;i<len-1;i++) {
        if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
            res = i
            break
        }
    }
    if (res === -1) {
        if (nums[0] > nums[1]) {
            return 0
        }
        if (nums[len -1] > nums[len-2]) {
            return len-1
        }
    }
    return res
};
// @lc code=end

