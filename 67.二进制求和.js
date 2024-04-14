/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.20%)
 * Likes:    316
 * Dislikes: 0
 * Total Accepted:    66.2K
 * Total Submissions: 126.9K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const len = Math.max(a.length, b.length)
  a = a.padStart(len, "0")
  b = b.padStart(len, "0")

  let p = len - 1
  let res = ""
  let base = 0
  while(p >= 0) {
    const sum = +a[p] + +b[p] + base
    if (sum >= 2) {
      res = sum % 2 + res
      base = 1
      if (p === 0) {
        res = base + res
      }
    } else {
      base = 0
      res = sum + res
    }
    p--
  }
  return res
}
// @lc code=end

// console.log(addBinary('1010','1011'))

