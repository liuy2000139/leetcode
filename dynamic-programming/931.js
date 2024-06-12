/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let arr = []
  for (let i = 0; i < m; i++) {
    arr[i] = []
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        arr[i][j] = matrix[i][j]
      } else {
        let a = arr[i - 1][j]
        let b = arr[i - 1][j - 1]
        let c = arr[i - 1][j + 1]
        b = b === undefined ? Infinity : b
        c = c === undefined ? Infinity : c
        arr[i][j] = Math.min(a, b, c) + matrix[i][j]
      }
    }
  }
  return Math.min(...arr.at(-1))
}

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
) // 13
console.log(
  minFallingPathSum([
    [-19, 57],
    [-40, -5],
  ])
) // -59
