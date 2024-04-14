/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let arr = []
    for (let i=1;i<=area;i++) {
        if (Math.floor(area/i) === area/i) {
            arr.push([i, area/i])
        }
    }
    arr = arr.filter(v => v[0] >= v[1]).sort((a, b) => (b[1] - b[0])-(a[1] - a[0]))
    return arr[0]
};
// @lc code=end

// constructRectangle(4)