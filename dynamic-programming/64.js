/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length
  let n = grid[0]?.length || 0
  let arr = []
  for (let i = 0; i < m; i++) {
    arr[i] = arr[i] || []
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        arr[i][j] = grid[i][j]
      } else if (i === 0) {
        arr[i][j] = arr[i][j - 1] + grid[i][j]
      } else if (j === 0) {
        arr[i][j] = arr[i - 1][j] + grid[i][j]
      } else {
        arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j]
      }
    }
  }

  return arr[m - 1][n - 1]
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
)
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
)
