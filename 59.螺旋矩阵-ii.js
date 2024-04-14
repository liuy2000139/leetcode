/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let di=0,dj=1
    let i=0,j=0,q=1
    let res = []

    for (let z = 0;z<n*n;z++) {
        res[i] = res[i]||[]
        res[i][j] = q++
        res[(i+di+n)%n] = res[(i+di+n)%n] || []
        if (res[(i+di+n)%n][(j+dj+n)%n] !== undefined) {
            [di, dj] = [dj, -di]
        }
        i += di
        j += dj
    }
    return res
};
// @lc code=end

// console.log(generateMatrix(3))
