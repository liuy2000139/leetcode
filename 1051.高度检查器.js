/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0
    let arr = [...heights].sort((a,b) => a-b)
    for (let i=0;i<heights.length;i++) {
        if (heights[i] !== arr[i]) count++
    }
    return count
};
// @lc code=end
console.log(heightChecker([1,1,4,2,1,3]))
