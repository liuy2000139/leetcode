/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

    let len = nums.length
    nums = nums.concat(nums)
    return nums.map((v, i) => {
        let temp = nums.find((t, idx) => idx > i && t > v)
        return temp === undefined ? -1 : temp
    }).slice(0, len)

};
// @lc code=end

// console.log(nextGreaterElements([1,2,1]))
