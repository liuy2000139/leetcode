/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
  }
  const max = Math.max(...nums)
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0] * obj[nums[0]]
  let dp = [0, obj[1] || 0]
  for (let i = 2; i <= max; i++) {
    dp[i] = Math.max(i * (obj[i] || 0) + dp[i - 2], dp[i - 1])
  }
  return dp[max]
}

console.log(deleteAndEarn([3, 1]))
console.log(deleteAndEarn([3, 4, 2]))
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))
