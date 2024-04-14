/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a,b) => a-b)
    let min = nums[0]
    let res = 0
    for (let i=0;i<nums.length;i++) {
        res += nums[i] - min
    }
    return res
};
// @lc code=end
