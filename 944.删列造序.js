/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    // let arr = []
    // for (let i=0;i<A.length;i++) {
    //     for (let j=0;j<A[i].length;j++) {
    //         arr[j] = arr[j] || []
    //         arr[j][i] = A[i][j]
    //     }
    // }
    
    // return arr.filter(v => v.join(' ') !== v.sort().join(' ')).length

    let count = 0
    for (let i=0;i<A[0].length;i++) {
        let arr = A.map(v => v[i])
        if (arr.join(' ') !== arr.sort().join(' ')) count++
    }

    return count
};
// @lc code=end

// console.log(minDeletionSize(["cba", "daf", "ghi"]))