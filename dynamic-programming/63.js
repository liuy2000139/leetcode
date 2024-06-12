/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0
  }
  let m = obstacleGrid.length
  let n = obstacleGrid[0]?.length || 0
  let arr = []

  for (let i = 0; i < m; i++) {
    arr[i] = arr[i] || []
    for (let j = 0; j < n && i < m; j++) {
      const current = obstacleGrid[i][j]
      if (i === 0 && j === 0) {
        arr[i][j] = 1
      } else if (i === 0) {
        if (current !== 1) {
          arr[i][j] = arr[i][j - 1]
        } else {
          j = n
        }
      } else if (j === 0) {
        if (current !== 1) {
          arr[i][j] = arr[i - 1][j]
        } else {
          arr[i][j] = 0
        }
      } else {
        if (current !== 1) {
          arr[i][j] = (arr[i - 1][j] || 0) + (arr[i][j - 1] || 0)
        }
      }
    }
  }
  return arr[m - 1][n - 1] || 0
}

console.log(
  uniquePathsWithObstacles([
    [0, 0],
    [1, 0],
  ])
)
