/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    let nums = []
    function isPrime(num) {
        if (num <= 3) {
          return num > 1
        }else {
          let sq = Math.sqrt(num)
          for (let i = 2; i <= sq; i++) {
           if (num%i === 0) {
             return false
           }
          }
          nums.push(num)
          return true
        }
      }
      let count = 0
      for (let i=L;i<=R;i++) {
          let len = i.toString(2).split('').filter(v => v == 1).length
          if (nums.includes(len) || isPrime(len)) {
              count++
          }
      }
      return count
};
// @lc code=end

