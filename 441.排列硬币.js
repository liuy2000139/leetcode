/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum = 0
    if (n === 0) return 0
    while(count(sum+1) <= n) {
        sum++
    }
    return sum
};

var count = k => {
    return k*(k+1)/2
}
// @lc code=end
// console.log(arrangeCoins(8))
