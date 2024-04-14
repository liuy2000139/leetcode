/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (32.87%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    17.3K
 * Total Submissions: 52.1K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
 * 
 * 示例1:
 * 
 * 
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: 3
 * 输出: False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let sqrt = Math.sqrt(c)
  if(sqrt%1 ===0) {
    return true
  } else {
    sqrt = Math.ceil(sqrt)
  }
  let l = 1, r = sqrt, res = false
  while(l <= r && !res) {
    if (Math.pow(l, 2) + Math.pow(r, 2) > c) {
      r--
    } else if (Math.pow(l, 2) + Math.pow(r, 2) < c) {
      l++
    } else {
      res = true
    }
  }
  return res;
};
// @lc code=end

