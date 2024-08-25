/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length
  let n = word2.length
  let dp = []
  for (let i = 0; i <= m; i++) {
    dp[i] = dp[i] || []
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 0
      } else if (i === 0) {
        dp[i][j] = j
      } else if (j === 0) {
        dp[i][j] = i
      } else {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        }
      }
    }
  }
  return dp[m][n]
}

console.log(minDistance('intention', 'execution'))
