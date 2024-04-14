/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let arr = [...new Array(n)].map(v => [...new Array(m)].map(v => 0))
    for (let i=0;i<indices.length;i++) {
        let [r, c] = indices[i]
        arr[r] = arr[r].map(v => v+1)
        arr = arr.map(v => {
            return v.map((t,j) => {
                if (c === j) return t+1
                else return t
            })
        })
    }
    return arr.toString().split(',').filter(v => v%2 === 1).length
    // return arr
};
// @lc code=end

console.log(oddCells(2,40,[[0,21],[1,13],[0,23],[1,20],[1,29],[0,16],[1,30],[0,5],[0,0],[1,32],[0,20],[0,31],[1,4],[1,28],[0,4],[0,2],[1,31],[1,10],[0,3],[1,1],[0,14],[1,7]]))