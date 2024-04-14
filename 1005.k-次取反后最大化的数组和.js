/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A.sort((a,b) => a-b)
    let arr = A.splice(0,K)
    if (arr.some(v => v === 0)) {
        arr = arr.map(v => Math.abs(v))
    } else if (K%2=== arr.filter(v => v < 0).length%2) {
        arr = arr.map(v => Math.abs(v))
    } else {
        if (arr.every(v => v>0)) {
            arr[0] = 0 - arr[0]
        } else  if (arr.every(v => v<0)) {
            arr = arr.map(v => Math.abs(v))
            arr[arr.length-1] = 0 - arr[arr.length-1]
        } else {
            let idx = arr.indexOf(arr.find(v => v>0))
            console.log(idx)
            arr = arr.map(v => Math.abs(v))
            if (arr[idx-1] > arr[idx]) {
                arr[idx] = 0-arr[idx]
            } else {
                arr[idx-1] = 0-arr[idx-1]
            }
        }
    }
    return [...arr, ...A].reduce((a,b) => a+b,0)
};
// @lc code=end
console.log(largestSumAfterKNegations([5,6,9,-3,3], 2))
