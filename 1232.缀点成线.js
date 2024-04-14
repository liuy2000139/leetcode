/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length <=2) return true
    else if (new Set(coordinates.map(v => v[1])).size === 1) return true
    else if (new Set(coordinates.map(v => v[0])).size === 1) return true
    else {
        let a = coordinates[0], b = coordinates[1]
        let p = (b[1] - a[1]) / (b[0]-a[0])
        return coordinates.slice(2).every(t => (t[1]-a[1])/(t[0]-a[0]) === p)
    }
};
// @lc code=end

