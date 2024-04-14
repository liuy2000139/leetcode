/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 *
 * https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/description/
 *
 * algorithms
 * Easy (60.36%)
 * Likes:    16
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 7.2K
 * Testcase Example:  '[1,2,2,6,6,6,6,7,10]'
 *
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
 * 
 * 请你找到并返回这个整数
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：arr = [1,2,2,6,6,6,6,7,10]
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let res = {}
  for (let i=0;i<arr.length;i++){
    if (res.hasOwnProperty(arr[i])) {
      res[arr[i]]++
    } else {
      res[arr[i]] = 1
    }
  }
  return Object.entries(res).sort((a,b) => {
    return Number(b[1]) - Number(a[1])
  })[0][0]
  console.log(res)
};
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
// @lc code=end

