/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (43.52%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    68.3K
 * Total Submissions: 155K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {}
  for(let i=0;i<s.length;i++) {
    if (obj.hasOwnProperty(s[i])) {
      obj[s[i]]++
    } else {
      obj[s[i]] = 1
    }
  }
  let index = -1, flag = false
  for (let i=0;i<s.length;i++) {
    if (!flag && obj[s[i]] === 1) {
      index = i
      flag = true
    }
  }
  return index
};
// @lc code=end

