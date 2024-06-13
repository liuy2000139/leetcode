/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let s1 = s
  let s2 = s.split('').reverse().join('')
  let n = s.length
  let dp = []
  for (let i = 1; i < n + 1; i++) {
    dp[i - 1] = dp[i - 1] || []
    dp[i] = dp[i] || []
    for (let j = 1; j < n + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = (dp[i - 1][j - 1] || 0) + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j] || 0, dp[i][j - 1] || 0)
      }
    }
  }
  return dp[n][n]
}

// console.log(longestPalindromeSubseq('bbbab'))
console.log(longestPalindromeSubseq('bbbab'))
