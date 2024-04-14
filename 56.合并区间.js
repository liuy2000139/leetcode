/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0]-b[0])
    for (let i=0;i<intervals.length-1;i++) {
        if (intervals[i+1][0] >= intervals[i][0] && intervals[i+1][0] <= intervals[i][1]) {
            if (intervals[i+1][1] <= intervals[i][1]) {
                intervals.splice(i+1, 1)
                i--
            } else {
                intervals[i][1] = intervals[i+1][1]
                intervals.splice(i+1, 1)
                i--
            }
        }
    }
    return intervals
};
// @lc code=end

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))