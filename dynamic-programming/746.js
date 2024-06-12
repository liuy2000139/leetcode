/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function (cost) {
//   let len = cost.length
//   if (len < 2) return 0
//   if (len === 2) return Math.min(cost[0], cost[1])
//   return Math.min(
//     minCostClimbingStairs(cost.slice(0, -1)) + cost.at(-1),
//     minCostClimbingStairs(cost.slice(0, -2)) + cost.at(-2)
//   )
// }
const minCostClimbingStairs = (cost) => {
  const dp = [0, 0]
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[cost.length]
}
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
