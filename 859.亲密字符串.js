/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} 
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length !== B.length) return false
    let a = []
    let b = []
    for (let i=0;i<A.length;i++) {
        if (A[i] !== B[i]) {
            a.push(A[i])
            b.push(B[i])
        }
    }
    if (a.length === 0) {
        let arr = [...new Set(A.split(''))]
        return arr.some(v => A.indexOf(v) !== A.lastIndexOf(v))
    }
    if (a.length > 2) return false
    return a.sort().join('') === b.sort().join('')
};
// @lc code=end

console.log(buddyStrings('ab', 'ab'))
