/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let flag = true
    if (rec1[0] === rec1[2] || rec1[1] === rec1[3] || rec2[0] === rec2[2] || rec2[1] === rec2[3]) flag = false
    if (rec2[0] >= rec1[2]) flag = false
    if (rec2[1] >= rec1[3]) flag = false
    if (rec2[3] <= rec1[1]) flag = false
    if (rec2[2] <= rec1[0]) flag = false
    return flag
};
// @lc code=end

// console.log(isRectangleOverlap([-1,0,1,1],[0,-1,0,1]))