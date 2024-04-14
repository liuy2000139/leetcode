/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let res = 0
    for (let i=0;i<grid.length;i++) {
        for (let j=0;j<grid[i].length;j++) {
            if (grid[i][j] === 1) {
                let base = 4
                if (grid[i][j-1] === 1) {
                    base -= 2
                }
                if ((grid[i-1] || [])[j] === 1) {
                    base -= 2
                }
                res += base
            }
        }
    }
    return res
};
// @lc code=end
// islandPerimeter([[0,1,0,0],
//     [1,1,1,0],
//     [0,1,0,0],
//     [1,1,0,0]])
