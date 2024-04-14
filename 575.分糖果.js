/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let len =  candies.length
    let arr = [...new Set(candies)]
    if (arr.length > len/2) return len/2
    else return arr.length 
};
// @lc code=end

