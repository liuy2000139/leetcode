/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  let m = arr.length
  let dp = []
  let res = 1
  let map = {}
  for (let i = m - 1; i >= 0; i--) {
    map[arr[i]] = map[arr[i]] || []
    map[arr[i]].push(i)
    if (i === m - 1) {
      dp[i] = 1
      continue
    }
    const idxList = map[arr[i] + difference] || []
    const findidx = idxList.findIndex((idx) => idx > i)
    if (findidx > -1) {
      dp[i] = dp[idxList[findidx]] + 1
    } else {
      dp[i] = 1
    }
    res = Math.max(res, dp[i])
  }

  return res
}

console.time('123')
console.log(
  longestSubsequence([4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8], 0)
)
console.timeEnd('123')
