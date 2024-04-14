/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    S = S.split('')
    if ([...new Set(S)].length === 1) return S.length%2 === 1 ? S[0] : ''
    let i = 0
    while(i<S.length) {
        if (S[i] === S[i+1]) {
            S.splice(i, 2)
            i--
        } else {
            i++
        }
    }
    return S.join('')
};
// @lc code=end

console.log(removeDuplicates('aaaaaaaa'))