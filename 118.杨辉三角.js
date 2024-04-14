/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (65.91%)
 * Likes:    262
 * Dislikes: 0
 * Total Accepted:    62.4K
 * Total Submissions: 94.6K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(rows) {
  let res = []
  if (rows >= 1) {
    res.push([1])
  }
  for (let i=1;i<rows;i++) {
    let arr = []
    for (let j=0;j<=i;j++) {
      // console.log(res[i-1][j-1], res[i-1][j])
      arr.push((res[i-1][j-1] || 0) + (res[i-1][j] || 0))
    }
    res.push(arr)
  }
  
  return res;

};
// @lc code=end
// generate(2)
// console.log(generate(4))