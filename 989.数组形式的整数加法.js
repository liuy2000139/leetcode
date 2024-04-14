/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    A.reverse()
    let rest = K
    for (let i=0;i<A.length;i++) {
        let sum = A[i] + rest
        A[i] = sum%10
        rest = Math.floor(sum/10)
    }
    while(rest) {
        A.push(rest%10)
        rest = Math.floor(rest/10)
    }
    return A.reverse()
};
// @lc code=end

console.log(addToArrayForm([0], 10000))