/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let base = []
    for (let i=0;i<S.length;i++) {
        if (S[i] === C) base.push(i)
    }
    let res = []
    for (let i=0;i<S.length;i++) {
        res.push(fn(base.map(v => Math.abs(v-i))))
    }
    return res
};
const fn = arr => {
    return arr.sort((a,b) => a-b)[0]
}
// @lc code=end

console.log(shortestToChar('loveleetcode', 'e'))