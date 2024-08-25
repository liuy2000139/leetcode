/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length == 0) {
    return 0
  }
  let dp = []
  dp[0] = 1
  let maxans = 1
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    maxans = Math.max(maxans, dp[i])
  }
  return maxans
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4/
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])) // 4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])) // 1
