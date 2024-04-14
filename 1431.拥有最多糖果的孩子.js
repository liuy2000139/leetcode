/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = [...candies].sort((a,b) => b-a)[0]
    return candies.map(v => v + extraCandies >= max)
};
// @lc code=end

console.log(kidsWithCandies([2,3,5,1,3],3))