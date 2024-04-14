
/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let times = nums.length/3
    let obj = {}
    for (let i=0;i<nums.length;i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]]+1 : 1
    }
    return Object.entries(obj).filter(v => v[1] > times).map(v => v[0])
};
// @lc code=end

// console.log(majorityElement([3,2,3]))