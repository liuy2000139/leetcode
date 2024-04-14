/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let end = paths.map(v => v[1])
    for (let i=0;i<end.length;i++) {
        if (!paths.some(v => v[0] === end[i])) return end[i]
    }
};
// @lc code=end
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
