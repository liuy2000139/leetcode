/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let obj = {}
    for (let s of nums) {
        obj[s] = obj[s] ? obj[s]+1 : 1
    }
    let arr = Object.entries(obj)
    arr.sort((a,b) => b[1]-a[1])
    let max = arr.filter(v => v[1] === arr[0][1]).map(v => v[0])
    
    max = max.map(v => nums.lastIndexOf(parseInt(v))-nums.indexOf(parseInt(v)) + 1)
    
    return max.sort((a,b) => a-b)[0]
};
// @lc code=end
console.log(findShortestSubArray([1, 2, 2, 3, 1]))
