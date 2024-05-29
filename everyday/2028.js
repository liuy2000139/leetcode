/**
 * 现有一份 n + m 次投掷单个 六面 骰子的观测数据，骰子的每个面从 1 到 6 编号。观测数据中缺失了 n 份，你手上只拿到剩余 m 次投掷的数据。幸好你有之前计算过的这 n + m 次投掷数据的 平均值 。

给你一个长度为 m 的整数数组 rolls ，其中 rolls[i] 是第 i 次观测的值。同时给你两个整数 mean 和 n 。

返回一个长度为 n 的数组，包含所有缺失的观测数据，且满足这 n + m 次投掷的 平均值 是 mean 。如果存在多组符合要求的答案，只需要返回其中任意一组即可。如果不存在答案，返回一个空数组。

k 个数字的 平均值 为这些数字求和后再除以 k 。

注意 mean 是一个整数，所以 n + m 次投掷的总和需要被 n + m 整除。
 */

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const sum = (rolls.length + n) * mean
  const mSum = rolls.reduce((a, b) => a + b, 0)
  if (sum <= mSum) return []
  if (sum - mSum < n) return []
  if (sum - mSum > n * 6) return []
  const nSum = sum - mSum
  const base = nSum / n
  if (base % 2 === 0) return Array(n).fill(base)
  let res = []
  for (let i = 1; i <= n; i++) {
    res.push(i % 2 === 1 ? Math.ceil(base) : Math.floor(base))
  }
  let done = false
  const resSum = res.reduce((a, b) => a + b, 0)
  if (resSum === nSum) done = true
  else if (resSum < nSum) {
    let cnt = nSum - resSum
    while (cnt > 0) {
      const findIdx = res.findIndex((t) => t < 6)
      if (6 - res[findIdx] > cnt) {
        res[findIdx] = res[findIdx] + cnt
        cnt = 0
      } else {
        cnt -= 6 - res[findIdx]
        res[findIdx] = 6
      }

      if (cnt === 0) done = true
    }
  } else {
    let cnt = resSum - nSum
    while (cnt > 0) {
      const findIdx = res.findIndex((t) => t > 1)
      if (res[findIdx] - 1 > cnt) {
        res[findIdx] = res[findIdx] - cnt
        cnt = 0
      } else {
        cnt -= res[findIdx] - 1
        res[findIdx] = 1
      }
      if (cnt === 0) done = true
    }
  }
  if (done) return res
  return []
}
console.time('deal')
console.log(missingRolls(
    [
      4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1,
      5, 4, 3, 5, 1, 5,
    ],
    4,
    40
  ).reduce((a,b) => a + b) === 167)

console.timeEnd('deal')
