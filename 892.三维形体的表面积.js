/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let a = [...grid].toString().split(',')
    let total = 0
    let rest = 0
    a.forEach(v => {
        total += v*6
        rest += v > 0 ? (v-1) : 0
    })
    for (let i=0;i<grid.length;i++) {
        for (let j=0;j<grid[i].length;j++) {
            rest += Math.min(grid[i][j] || 0, grid[i][j-1] || 0)
            rest += Math.min(grid[i][j] || 0, grid[i-1] ? grid[i-1][j] : 0)
        }
    }

    return total - rest * 2
    // return {total, rest}
};
// @lc code=end

// console.log(surfaceArea([[1,0],[0,2]]))