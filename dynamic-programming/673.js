/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let dp = []
  let cnt = []
  let m = nums.length
  let res = 0
  let maxLen = 0
  for (let i = 0; i < m; i++) {
    dp[i] = 1
    cnt[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          cnt[i] = cnt[j]
        } else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j]
        }
      }
    }

    if (dp[i] > maxLen) {
      maxLen = dp[i]
      res = cnt[i] // 重置计数
    } else if (dp[i] === maxLen) {
      res += cnt[i]
    }
  }
  return res
}
console.log(findNumberOfLIS([1, 3, 5, 4, 7]))
