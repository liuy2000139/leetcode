/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // let temp = {}

    // const deal = (arr, i, j) => {
    //     let len = arr.length
    //     const key = `${i}-${j}`
    //     if (len === 1) {
    //         temp[key] = arr[0][0]
    //     } else {
    //         temp[key] = arr[0][0] + Math.min(temp[`${i+1}-${j}`], temp[`${i+1}-${j+1}`])
    //     }
    //     console.log(temp[key])
    // }

    // let a = triangle.length, b = triangle[a-1].length
    // for (let i=0;i<b;i++) {
    //     temp[`${a-1}-${i}`] = triangle[a-1][i]
    // }
    // for (let i=a-1;i>=0;i--) {
    //     for (let j=0;j<b;j++) {
    //         let list = triangle.map(v => {
    //             let llen = v.length
    //             let t =  v.slice(j, llen-i + j > 0 ? llen-i + j : j)
    //             return t
    //         }).filter(v => v.length)
    //         if (list.length) {
    //             deal(list, i, j)
    //         }
    //     }
    // }
    // return temp['0-0']
    let a = triangle.length
    for (let i=a-2;i>=0;i--) {
        const b = triangle[i].length
        for (let j=0;j<b;j++) {
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
        }
    }
    return triangle[0][0]    
};
// @lc code=end

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))