/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 *
 * https://leetcode-cn.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (54.43%)
 * Likes:    227
 * Dislikes: 0
 * Total Accepted:    55.4K
 * Total Submissions: 101.3K
 * Testcase Example:  '[3,0,1]'
 *
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 * 
 * 示例 1:
 * 
 * 输入: [3,0,1]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [9,6,4,2,3,5,7,0,1]
 * 输出: 8
 * 
 * 
 * 说明:
 * 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
 * 
 */

// @lc code=start 
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums.length === 1) {
    if (nums[0] === 0) {
      return 1
    } else {
      return nums[0] - 1
    }
  }
  let arr = nums.sort((a,b) => a - b)
  let num = arr[0];
  let flag = false
  for(let i=1;i<arr.length;i++) {
    if (arr[i] - arr[i-1] === 2 && !flag) {
      num = (arr[i] + arr[i-1]) / 2
      flag = true
    }
  }
  if (!flag) {
    if (arr[0] === 0) {
      num = arr[arr.length - 1] + 1
    } else {
      num = arr[0] - 1
    }
    
  }
  return num
};
// @lc code=end

