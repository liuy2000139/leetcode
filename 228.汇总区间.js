/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return []
    let res = []
    let base = nums[0]
    for (let i=1;i<nums.length;i++) {
        if (nums[i] - nums[i-1] !== 1) {
            res.push([...new Set([base,nums[i-1]])].join('->'))
            base = nums[i]
        }
    }
    res.push([...new Set([base,nums[nums.length-1]])].join('->'))

    return res
};
// @lc code=end
console.log(summaryRanges([0,2,3,4,6,8,9]))
