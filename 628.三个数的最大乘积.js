/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (49.23%)
 * Likes:    114
 * Dislikes: 0
 * Total Accepted:    16.6K
 * Total Submissions: 33.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,2,3]
 * 输出: 6
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,2,3,4]
 * 输出: 24
 * 
 * 
 * 注意:
 * 
 * 
 * 给定的整型数组长度范围是[3,10^4]，数组中所有的元素范围是[-1000, 1000]。
 * 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums = nums.sort((a,b) => a-b)
  maxs1 = nums.slice(nums.length-3).reduce((a,b) => a*b,1)
  maxs2 = [nums[0], nums[1], nums[nums.length-1]].reduce((a,b) => a*b,1)
  return Math.max(maxs1, maxs2)
};
// maximumProduct( [1,2,3,4])
// @lc code=end

