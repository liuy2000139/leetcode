/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ''
    let dp = []
    for (let l=0;l<s.length;l++) {
        for (let i=0;i+l<s.length;i++) {
            dp[i] = dp[i] ? dp[i] : []
            let j = i+l
            if (l===0) {
                dp[i][j] = true
            } else if (l === 1) {
                dp[i][j] = s[i] === s[j]
            } else {
                dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
            }
            if (dp[i][j] && (l+1 > res.length)) {
                res = s.slice(i,j+1)
            }
        }
    }
    return res
};
// @lc code=end

// console.log(longestPalindrome('babad'))