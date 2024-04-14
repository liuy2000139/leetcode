/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    if (new Set(timePoints).size !== timePoints.length) return 0
    let min = Infinity
    timePoints = timePoints.map(v => {
        let arr = v.split(':')
        return arr[0] * 60 + parseInt(arr[1])
    })
    for (let i=0;i<timePoints.length-1;i++) {
        for (let j=i+1;j<timePoints.length;j++) {
            let left = Math.max(timePoints[i], timePoints[j]), right = Math.min(timePoints[i], timePoints[j])

            let res = Math.min(left - right, right + 24*60 - left)
            min = Math.min(res, min)
        }
    }
    return min
};
// @lc code=end
// const timePoints = ["23:59","00:00"]

// console.log(findMinDifference(timePoints))
