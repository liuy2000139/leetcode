/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj = {}
    for (let i of nums) {
        obj[i] = obj[i] ? obj[i]+1 : 1
    }
    
    return Object.entries(obj).filter(v => v[1] > 1).map(v => v[0])
};
// @lc code=end

// console.log(findDuplicates([4,3,2,7,8,2,3,1]))