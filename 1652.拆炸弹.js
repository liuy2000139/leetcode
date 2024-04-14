/*
 * @lc app=leetcode.cn id=1652 lang=javascript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let len = code.length
    code = [...code, ...code]
    let res = []
    for (let i= k>=0 ? 0 : len;i< (k>=0 ? len : len + len);i++) {
        if (k === 0) {
            res.push(0)
        } else if (k > 0) {
            res.push(code.slice(i+1, i+1+k).reduce((a,b) => a+b, 0))
        } else {
            res.push(code.slice(i+k,i).reduce((a,b) => a+b, 0))
        }
    }
    return res
};
// @lc code=end

// console.log(decrypt([2,4,9,3],-2))