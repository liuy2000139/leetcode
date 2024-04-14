/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let r = A.length
    let c = A[0].length
    let res = []
    for (let i=0;i<c;i++) {
        res[i] = []
        for (let j=0;j<r;j++) {
            res[i][j] = A[j][i]
        }
    }
    return res
};
// @lc code=end

