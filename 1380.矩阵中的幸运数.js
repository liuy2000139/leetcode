/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {

    let m = matrix.length
    let n = matrix[0].length

    let res = ''

    let minIndex = []
    for (let i = 0;i<m;i++) {
        minIndex = [i, 0]
        if (res) {

        } else {
            for (let j = 0;j<n;j++) {
                if (matrix[i][j] <= matrix[minIndex[0]][minIndex[1]]) {
                    minIndex = [i,j]
                }
            }
            let arr = matrix.map(v => v[minIndex[1]])
            if (arr.every(v => v <= matrix[minIndex[0]][minIndex[1]])) {
                res = matrix[minIndex[0]][[minIndex[1]]]
            } else {

            }
        }
        
    }
    return res ? [res] : []
};
// @lc code=end
