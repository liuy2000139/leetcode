/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length
  let n = text2.length
  let res = 0
  let dp = []
  for (let i = 0; i < m + 1; i++) {
    dp[i] = []
    for (let j = 0; j < n + 1; j++) {
      res = Math.max(res, dp[i][j])
    }
  }
  return res
}
