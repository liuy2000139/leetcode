/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = []
    for (let i=0;i<points.length;i++) {
        res.push([])
        for (let j=0;j<points.length;j++) {
            res[i].push((points[j][0] - points[i][0])**2 + (points[j][1] - points[i][1])**2)
        }
    }
    let arr = []
    for (let i=0;i<res.length;i++) {
        arr.push({})
        for (let j=0;j<res[i].length;j++) {
            arr[i][res[i][j]] = arr[i][res[i][j]] ? arr[i][res[i][j]] + 1 : 1
        }
    }
    let o = arr.map(v => {
        return Object.values(v).filter(t => t > 1)
    }).map(v => {
        return v.reduce((a,b) => {
            return a + b * (b - 1)
        }, 0)
    }).reduce((a,b) => a + b, 0)
    return o
};
// @lc code=end

// console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]))