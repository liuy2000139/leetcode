/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let res = 0
    nums = [...new Set(nums.sort((a,b) => a-b))]
    console.log(nums)
    if (nums.length === 0) return 0
    if (nums.length === 1) return 1
    for (let i=0;i<nums.length-1;i++) {
        for (let j=i+1;j<nums.length;j++) {
            if (j === nums.length-1) {
                if (nums[j]-nums[i] === j-i) {
                    res = Math.max(j+1-i, res)
                } else {
                    res = Math.max(j-i, res)
                }
                
                break
            } else {
                if (nums[j]-nums[i] === j-i) {
                    continue
                } else {
                    res = Math.max(j-i, res)
                    break
                }
            }
            
        }
    }
    return res
    // let hash = {}
    // for (i of nums) {
    //     if (hash[i] === undefined) {
            
    //     }
    // }
};
// @lc code=end

// console.log(longestConsecutive([-6,-1,-1,9,-8,-6,-6,4,4,-3,-8,-1]))