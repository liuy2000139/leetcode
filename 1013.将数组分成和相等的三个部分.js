/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((a,b) => a+b,0)
    if (sum%3 !== 0) return false
    let s = sum/3,cur = 0, count = 0
    for (let i=0;i<A.length;i++) {
        cur += A[i]
        if (cur === s) {
            count++
            cur = 0
            if (count === 2 && i !== A.length-1) {
                return true
            }
        }
    }
    return false
};
// @lc code=end
