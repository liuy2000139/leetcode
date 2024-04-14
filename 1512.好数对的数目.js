/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    for (let i=0;i<nums.length;i++) {
        let arr = nums.slice(i+1)
        count += arr.filter(v => v === nums[i]).length
    }
    return count

};
// @lc code=end

