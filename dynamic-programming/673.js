/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let dp = []
  let res = []
  for (let i = nums.length - 1; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j < nums.length; j++) {
      if (i === j) {
        dp[i][j] = 1
      } else {
        if (nums[j] > nums[j - 1] && dp[i][j - 1] === dp[i + 1][j]) {
          dp[i][j] = dp[i][j - 1] + 1
        } else {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
        }
      }
      res[dp[i][j]] = res[dp[i][j]] || 0 + 1
    }
  }

  return res
}
// console.log(findNumberOfLIS([2, 2, 2, 2, 2]))
console.log(findNumberOfLIS([1, 3, 5, 4, 7]))
