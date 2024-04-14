/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let count = 0
    let left = 0 
    while(numBottles) {
        count += numBottles
        let origin = numBottles
        numBottles = Math.floor((origin + left)/numExchange)
        left = (origin + left)%numExchange
    }
    return count
};
// @lc code=end

console.log(numWaterBottles(15,4))