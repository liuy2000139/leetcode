/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0
    let dp = [1]
    for (let i=1;i<s.length;i++) {
        let str = s.slice(i-1, i+1)
        if (str === '00') {
            return 0
        }
        if (s[i] === '0') {
            if (str > 26) {
                return 0
            } else {
                if (i === 1) {
                    dp[i] = dp[0]
                } else {
                    dp[i] = dp[i-2]
                }    
            }
        } else {
            
            if (str >= 11 && str <= 26) {
                if (i === 1) {
                    dp[i] = dp[i-1] + 1
                } else {
                    dp[i] = dp[i-1] + dp[i-2]
                }
            } else {
                dp[i] = dp[i-1]
            }
        }
    }
    // console.log(dp)
    
    return dp[s.length-1]
};
// @lc code=end

// console.log(numDecodings('230'))