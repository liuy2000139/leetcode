/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1] || a[0] - b[0])
  let m = pairs.length
  let dp = new Array(m).fill(0).map(() => new Array(m).fill(0))
  let res = 1

  for (let i = 0; i < m - 1; i++) {
    let current = 0
    for (let j = i; j < m; j++) {
      if (i === j) {
        dp[i][j] = 1
        continue
      }
      let left = pairs[current][1]
      let right = pairs[j][0]
      if (right > left) {
        dp[i][j] = dp[i][current] + 1
        current = j
      } else {
        dp[i][j] = dp[i][current]
      }
      res = Math.max(res, dp[i][j])
    }
  }
  return res
}

console.log(
  findLongestChain([
    [-10, -8],
    [-6, -4],
    [-5, 0],
    [-4, 7],
    [1, 7],
    [8, 9],
    [6, 10],
    [9, 10],
  ])
)
