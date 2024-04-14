/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.split('-').map(v => v.split('').map(t => t.toLocaleUpperCase()).reverse().join('')).reverse().join('')
    let res = []
    let s = ''
    for(let i=0;i<S.length;i++) {
        s = S[i] + s
        if ((i+1)%K===0) {
            res.push(s)
            s = ''
        }
    }
    s && res.push(s)
    return res.reverse().join('-')
};
// @lc code=end

// console.log(licenseKeyFormatting("2-5g-3-J", 2))
