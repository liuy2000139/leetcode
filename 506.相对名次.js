/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let arr = [...nums].sort((a,b) => b-a)
    for(let i=0;i<arr.length;i++) {
        if (i===0) nums.splice(nums.indexOf(arr[i]), 1, "Gold Medal")
        else if (i===1) nums.splice(nums.indexOf(arr[i]), 1, "Silver Medal")
        else if (i===2) nums.splice(nums.indexOf(arr[i]), 1, "Bronze Medal")
        else nums.splice(nums.indexOf(arr[i]), 1, i+1 + '')
    }
    return nums
};
// @lc code=end
