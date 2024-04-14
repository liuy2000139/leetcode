/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length
    let left = 1, right = 1

    let res = []

    for (let i=0;i<len;i++) {
        res[i] = (res[i] === undefined ? 1 : res[i]) * left
        left = left * nums[i]

        res[len - i - 1] = (res[len - i - 1] === undefined ? 1 : res[len - i - 1]) * right
        right = right * nums[len-i-1]
    }
    return res
};
// @lc code=end

// console.log(productExceptSelf([-1,1,0,-3,3]))