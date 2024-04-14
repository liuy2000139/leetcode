/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let res = []
    let i=0
    while(i < n) {
        res.push(nums[i])
        res.push(nums[i+n])
        i++
    }
    return res
};
// @lc code=end

console.log(shuffle([1,1,2,2],2))