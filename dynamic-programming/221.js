/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let arr = []
  let res = 0
  for (let i = 0; i < m; i++) {
    arr[i] = []
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        arr[i][j] = +matrix[i][j]
      } else if (matrix[i][j] == 0) {
        arr[i][j] = 0
      } else {
        let pre = [arr[i - 1][j - 1], arr[i - 1][j], arr[i][j - 1]]
        let min = Math.min(...pre)
        if (min > 0) {
          let minBase = Math.sqrt(min)
          arr[i][j] = Math.pow(minBase + 1, 2)
        } else {
          arr[i][j] = +matrix[i][j]
        }
      }
      res = Math.max(res, arr[i][j])
    }
  }
  return res
}

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
) // 4
console.log(
  maximalSquare([
    ['0', '1'],
    ['1', '0'],
  ])
) // 1

console.log(maximalSquare([['1']]))
