/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let m = nums.length
  let dp = []
  let res = 0
  for (let i = m - 1; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j < m; j++) {
      if (i === j) {
        dp[i][j] = 1
      } else if (j - i === 1) {
        dp[i][j] = nums[i] < nums[j] ? 2 : 1
      } else {
        if (nums[j] > nums[i]) {
          if (dp[i][j - 1] === dp[i + 1][j]) {
            if (Math.min(...nums.slice(i + 1, j + 1)) >= nums[i]) {
              dp[i][j] = dp[i + 1][j] + 1
            } else {
              dp[i][j] = dp[i][j - 1]
            }
          } else if (dp[i][j - 1] > dp[i + 1][j]) {
            dp[i][j] = dp[i][j - 1]
          } else {
            dp[i][j] = dp[i + 1][j]
          }
        } else {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
        }
      }
      res = Math.max(res, dp[i][j])
    }
  }
  return res
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4/
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])) // 4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])) // 1
