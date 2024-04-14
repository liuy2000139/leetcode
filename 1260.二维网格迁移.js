/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length, n = grid[0].length
    let arr = grid.toString().split(',')
    while(k>0) {
        arr = [...arr.slice(m*n-1), ...arr.slice(0,m*n-1)]
        k--
    }
    let res = []
    for (let i=0;i<m;i++) {
        res[i] = []
        for (let j=0;j<n;j++) {
            res[i][j] = arr.shift()
        }
    }
    return res
};
// @lc code=end

// console.log(shiftGrid([[1],[2],[3],[4],[7],[6],[5]], 23))