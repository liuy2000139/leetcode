/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    S = S.split('')
    let i=0,j=S.length-1
    while(j>i) {
        
        while(!/[a-zA-Z]/.test(S[i])) {
            i++
        }
        while(!/[a-zA-Z]/.test(S[j])) {
            j--
        }
        if (i>=j) break
        [S[i], S[j]] = [S[j], S[i]]
        i++
        j--
    }
    return S.join('')
};
// @lc code=end
console.log(reverseOnlyLetters("?6C40E"))
