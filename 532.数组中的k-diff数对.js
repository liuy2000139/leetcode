/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let res = []
    nums.sort((a,b) => a-b)
    for (let i=0;i<nums.length-1;i++) {
        for (let j=i+1;j<nums.length;j++) {
            if (Math.abs(nums[i]-nums[j]) === k) {
                res.push(`${nums[i]}*${nums[j]}`)
            }
        }
    }
    res = [...new Set(res)]
    return res.length
};
// @lc code=end

console.log(findPairs([3, 1, 4, 1, 5], 2))