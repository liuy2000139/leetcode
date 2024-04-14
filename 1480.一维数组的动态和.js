/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((v,i) => {
        let arr = nums.slice(0, i+1)
        return arr.reduce((a,b) => a+b,0)
    })
};
// @lc code=end

console.log(runningSum([1,2,3,4]))