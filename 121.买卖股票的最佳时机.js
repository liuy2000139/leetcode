/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0
    let res = []
    for (let i=0;i<prices.length-1;i++) {
        res.push(prices.slice(i+1).sort((a,b) => b-a)[0] - prices[i])
    }
    let max = res.sort((a,b) => b-a)[0]
    return max <=0 ? 0 : max
};
// @lc code=end
