/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let m = s1.length
  let n = s2.length
  let dp = []
  for (let i = 0; i <= m; i++) {
    dp[i] = dp[i] || []
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 0
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + s2[j - 1].charCodeAt()
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + s1[i - 1].charCodeAt()
      } else {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j - 1] + s2[j - 1].charCodeAt() + s1[i - 1].charCodeAt(),
            dp[i - 1][j] + s1[i - 1].charCodeAt(),
            dp[i][j - 1] + s2[j - 1].charCodeAt()
          )
        }
      }
    }
  }
  return dp[m][n]
}

console.log(minimumDeleteSum('sea', 'eat'))
console.log(minimumDeleteSum('delete', 'leet'))
