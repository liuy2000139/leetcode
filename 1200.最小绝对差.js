/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b)
    let obj = {}
    for (let i=0;i<arr.length-1;i++) {
        let minus = Math.abs(arr[i] - arr[i+1])
        obj[minus] = obj[minus] ? [...obj[minus], [arr[i], arr[i+1]]] : [[arr[i], arr[i+1]]]
    }
    obj = Object.entries(obj)
    obj.sort((a,b) => a[0]-b[0])
    return obj[0][1]
};
// @lc code=end

console.log(minimumAbsDifference([4,2,1,3]))