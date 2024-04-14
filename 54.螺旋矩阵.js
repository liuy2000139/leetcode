/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let di=0,dj=1
    let i=0,j=0
    let m=matrix.length,n=matrix[0].length
    let res = []

    for (let z = 0;z<m*n;z++) {
        res.push(matrix[i][j])
        matrix[i][j] = null
        
        if (matrix[(i+di+m)%m][(j+dj+n)%n] === null) {
            [di, dj] = [dj, -di]
        }
        i += di
        j += dj
    }
    return res
};
// @lc code=end
