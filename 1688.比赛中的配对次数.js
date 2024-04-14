/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count = 0
    while(n>1) {
        count += Math.floor(n/2)
        if (n%2 === 0) {
            n = n/2
        } else {
            n = (n-1)/2 + 1
        }
    }
    return count
};
// @lc code=end

// console.log(numberOfMatches(14))