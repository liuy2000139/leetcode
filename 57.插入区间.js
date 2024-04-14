/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals = [...intervals,newInterval].sort((a,b) => a[0]-b[0])
    // console.log(intervals)
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
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))



// @lc code=end

// intervals.sort((a,b) => {
//     if (a[0]>b[0]) return 1
//     else if (a[0] < b[0]) return -1
//     else return a[1]-b[1]
// })
// console.log(intervals)
// let res = [intervals.shift()]
// while(intervals.length) {
//     let item = intervals.shift()
//     let lastIndex = res.length-1
//     if ((item[0] >= res[lastIndex][0] && item[0] <= res[lastIndex][1]) || (item[1] >= res[lastIndex][0] && item[1] <= res[lastIndex][1]) || (item[0] >= res[lastIndex][0] && item[1] <= res[lastIndex][1]) || (item[0] <= res[lastIndex][0] && item[1] >= res[lastIndex][1])) {
//         let arr = [item[0], item[1],res[lastIndex][0], res[lastIndex][1]].sort((a,b) => a-b)
//         res[lastIndex][0] = arr[0]
//         res[lastIndex][1] = arr[arr.length-1]
//     } else {
//         res.push(item)
//     }
    
// }
// return res

