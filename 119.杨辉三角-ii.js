/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = []
    rowIndex++
    if (rowIndex >= 1) {
      res.push([1])
    }
    for (let i=1;i<rowIndex;i++) {
      let arr = []
      for (let j=0;j<=i;j++) {
        // console.log(res[i-1][j-1], res[i-1][j])
        arr.push((res[i-1][j-1] || 0) + (res[i-1][j] || 0))
      }
      res.push(arr)
    }
    return res[rowIndex-1];
};
// @lc code=end

