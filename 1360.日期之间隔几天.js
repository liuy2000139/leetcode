/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 *
 * https://leetcode-cn.com/problems/number-of-days-between-two-dates/description/
 *
 * algorithms
 * Easy (44.05%)
 * Likes:    13
 * Dislikes: 0
 * Total Accepted:    3.1K
 * Total Submissions: 6.8K
 * Testcase Example:  '"2019-06-29"\n"2019-06-30"'
 *
 * 请你编写一个程序来计算两个日期之间隔了多少天。
 * 
 * 日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：date1 = "2019-06-29", date2 = "2019-06-30"
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 输入：date1 = "2020-01-15", date2 = "2019-12-31"
 * 输出：15
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定的日期是 1971 年到 2100 年之间的有效日期。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  date1 = +new Date(date1)
  date2 = +new Date(date2)
  let res = 0
  if (date2 > date1) res = date2 - date1
  else res = date1 - date2
  return res/1000/60/60/24
};

// @lc code=end

