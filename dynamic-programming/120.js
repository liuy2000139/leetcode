/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let m = triangle.length
  let n = triangle.at(-1).length
  let arr = []
  for (let i = 0; i < m; i++) {
    arr[i] = []
    for (let j = 0; j < n; j++) {
      if (triangle[i][j] === undefined) {
        continue
      } else if (i === 0 && j === 0) {
        arr[i][j] = triangle[i][j]
      } else if (j === 0) {
        arr[i][j] = arr[i - 1][j] + triangle[i][j]
      } else if (j === triangle[i].length - 1) {
        arr[i][j] = arr[i - 1][j - 1] + triangle[i][j]
      } else {
        arr[i][j] = Math.min(arr[i - 1][j], arr[i - 1][j - 1]) + triangle[i][j]
      }
    }
  }
  return Math.min(...arr.at(-1))
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
console.log(minimumTotal([[-10]]))
