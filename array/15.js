/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort()
  let m = nums.length
  let res = {}
  for (let i = 0; i < m - 2; i++) {
    for (let j = i + 1; j < m - 1; j++) {
      const sum = nums[i] + nums[j]
      if (sum > 0) continue
      const list = nums.slice(j + 1)
      const find = list.find((v) => v === -sum)
      if (find !== undefined) {
        const current = [nums[i], nums[j], find]
        const key = current.join('+')
        if (res[key]) {
          continue
        }
        res[key] = current
      }
    }
  }
  return Object.values(res)
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0]))
