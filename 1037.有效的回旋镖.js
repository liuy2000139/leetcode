/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let [a,b,c] = points
    if ((a[0]-b[0])*(c[1]-b[1]) === (a[1]-b[1])*(c[0]-b[0])) return false
    else return true
};
// @lc code=end

// console.log(isBoomerang([[0,1],[0,2],[1,2]]))