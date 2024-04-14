/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i = 0
    let len = arr.length
    while(i<len) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0)
            i++
        }
        i++
    }
    arr.splice(len)
};
// @lc code=end

