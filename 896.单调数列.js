/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 *
 * https://leetcode-cn.com/problems/monotonic-array/description/
 *
 * algorithms
 * Easy (51.30%)
 * Likes:    54
 * Dislikes: 0
 * Total Accepted:    13K
 * Total Submissions: 25.3K
 * Testcase Example:  '[1,2,2,3]'
 *
 * 如果数组是单调递增或单调递减的，那么它是单调的。
 * 
 * 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A
 * 是单调递减的。
 * 
 * 当给定的数组 A 是单调数组时返回 true，否则返回 false。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,2,2,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 输入：[6,5,4,4]
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 输入：[1,3,2]
 * 输出：false
 * 
 * 
 * 示例 4：
 * 
 * 输入：[1,2,4,5]
 * 输出：true
 * 
 * 
 * 示例 5：
 * 
 * 输入：[1,1,1]
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 50000
 * -100000 <= A[i] <= 100000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let res = true
  let arr = [A[0]]
  for(let i=1;i<A.length;i++) {
    if (A[i] !== A[i-1]) {
      arr.push(A[i])
    }
  }
  A = [...arr]
  for (let i=1;i<A.length-1;i++){
    if (A[i] > A[i-1] && A[i] > A[i+1]) {
      res = false
      break
    }
    if (A[i] < A[i-1] && A[i] < A[i+1]) {
      res = false
      break
    }
  }
  return res
};
// console.log(isMonotonic([11,11,9,4,3,3,3,1,-1,-1,3,3,3,5,5,5]))
// @lc code=end

