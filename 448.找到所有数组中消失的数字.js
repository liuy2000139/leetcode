/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = []
    nums = nums.sort((a,b) => a-b)
    for(let i=1;i<=nums.length;i++) {
        if (!nums.includes(i)) res.push(i)
    }
    return res
};
// @lc code=end
