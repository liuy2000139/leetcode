/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    return prices.map((v,i) => {
        let arr = prices.slice(i+1)
        let item = arr.find(t => t<=v)
        if (item) return v-item
        else return v
    })
};
// @lc code=end
console.log(finalPrices([8,4,6,2,3]))
