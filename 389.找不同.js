/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (61.05%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    23.8K
 * Total Submissions: 38.8K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  s = s.split('').sort()
  t = t.split('').sort()
  let res = ''
  let flag = false
  for(let i=0;i<t.length;i++) {
    if (!flag && s[i] !== t[i]) {
      res = t[i]
      flag = true
    }
  }
  return res
};
// @lc code=end

