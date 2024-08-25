/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0
  const h = height.length
  let i = 0
  let j = h - 1
  while (i < j) {
    let current = (j - i) * Math.min(height[i], height[j])
    res = Math.max(res, current)
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return res
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
