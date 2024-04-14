/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    const len = prices.length
    let p=0,q=1
    while(p < len - 1) {
        if (prices[p] < prices[q]) {
            res += prices[q] - prices[p]
        }
        p++
        q++
    }
    return res
    // let arr = [...prices]
    // // console.log(prices.sort((a,b) => a-b))
    // if (prices.join('-') === arr.sort((a,b) => a-b).join('-')) {
    //     return prices[prices.length-1]  - prices[0]
    // }
    // if (prices.join('-') === arr.sort((a,b) => b-a).join('-')) {
    //     return 0
    // }
    // let res = 0
    // let base = 0
    // for(let i=0;i<prices.length-1;i++) {
    //     if (prices[i+1] > prices[i]) {
    //         res += prices[i+1] - prices[i]
    //         base = i+1
    //     }
    // }
    // return res
};
// @lc code=end

// console.log(maxProfit([7,1,5,3,6,4]))