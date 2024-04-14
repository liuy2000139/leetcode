/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let a = Math.floor(arr.length * 5 / 100)
    arr = arr.sort((a,b) => a-b).slice(a, arr.length-a)
    console.log(arr)
    return arr.reduce((a,b) => a+b,0)/arr.length
};
// @lc code=end
let test = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
console.log(trimMean(test))