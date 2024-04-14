/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    for(let key of nums) {
        obj[key] = obj[key] ? obj[key]+1 : 1
    }
    return Object.entries(obj).sort((a,b) => b[1] - a[1])[0][0]
};
// @lc code=end
// console.log(majorityElement([3,2,3]))

