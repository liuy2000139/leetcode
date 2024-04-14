/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    if (nums.length === 1) return nums
    nums.sort((a,b) => b-a)
    for (let i=1;i<=nums.length;i++) {
        let l = nums.slice(0,i),r = nums.slice(i)
        if (l.reduce((a,b) => a+b,0) > r.reduce((a,b) => a+b, 0)) {
            return l
        }
    }
    return []
};
// @lc code=end

// console.log(minSubsequence([8,8]))