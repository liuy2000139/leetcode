/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let a = grid.toString().split(',').filter(v => v !== '0').length
    let b=0,c=0
    let x = grid.length, y = [...grid].sort((a,b) => b.length-a.length)[0].length

    b = grid.map(v => [...v].sort((a,b) => b-a)[0]).reduce((a,b) => a+b, 0)

    for(let i=0;i<y;i++) {
        c+= grid.map(v => v[i]).sort((a,b) => b-a)[0]
    }

    // console.log(a,b,c)
    return a+b+c
};
// @lc code=end

console.log(projectionArea([[2]]))