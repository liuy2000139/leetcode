/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p = 0, q = p + 1
    if (nums.length < 3) return nums.length

    while(p < nums.length - 2) {
        if (nums[p] === nums[q]) {
            if (q - p >= 2) {
                nums.splice(q, 1)
            } else {
                q++
            }
        } else {
            p = q
            q = p+1
        }
    }
    return nums.length
};
// @lc code=end

