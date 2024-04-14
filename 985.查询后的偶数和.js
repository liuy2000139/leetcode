/*
 * @lc app=leetcode.cn id=985 lang=javascript
 *
 * [985] 查询后的偶数和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    return queries.map(v => {
        let val = v[0], idx = v[1]
        A[idx] += val
        return A.filter(v => v%2 === 0).reduce((a,b) => a+b,0)
    })
};
// @lc code=end

