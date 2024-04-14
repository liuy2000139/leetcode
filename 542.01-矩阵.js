/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let res = []
    let temp = []
    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[i].length;j++) {
            let current = matrix[i][j]
            if (res[i] === undefined) {
                res[i] = []
            }
            if (current === 0) {
                res[i][j] = 0
            } else {
                if ([matrix[i-1] ? matrix[i-1][j] : undefined, matrix[i+1] ? matrix[i+1][j] : undefined, matrix[i][j-1], [matrix[i][j+1]]].some(v => v === 0)) {
                    res[i][j] = 1
                } else {
                    temp.push([i,j])
                }
            }
        }
    }
    while(temp.length) {
        console.log('============')
        let arr = []
        temp.forEach(v => {
            let around = [
                res[v[0]-1] ? res[v[0]-1][v[1]] : undefined,
                res[v[0]+1] ? res[v[0]+1][v[1]] : undefined,
                res[v[0]][v[1]-1],
                res[v[0]][v[1]+1]
            ].filter(t => t !== undefined)
            console.log(v, around.toString())
            if (around.length === 0) {
                arr.push(v)
            } else {
                if (res[v[0]] === undefined) {
                    res[v[0]] = []
                }
                res[v[0]][v[1]] = around.sort((a,b) => a-b)[0] + 1
            }
            
        })

        temp = arr
    }
    return res
};
// @lc code=end
let a = [[1,1,0,0,1,0,0,1,1,0],[1,0,0,1,0,1,1,1,1,1],[1,1,1,0,0,1,1,1,1,0],[0,1,1,1,0,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,1,1,0,0,1],[1,1,1,1,1,0,0,1,1,1],[0,1,0,1,1,0,1,1,1,1],[1,1,1,0,1,0,1,1,1,1]]

// console.log(updateMatrix(a))
updateMatrix(a)