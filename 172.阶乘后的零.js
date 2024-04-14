/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */


// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */


var trailingZeroes = function(n) {
    let count = 0
    while(Math.floor(n/5)!=0){
        count += Math.floor(n/5);
        n = Math.floor(n/5);
     }
     return count
};

// @lc code=end