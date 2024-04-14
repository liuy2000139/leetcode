/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    S = S.split(' ')
    let a = ['a', 'e', 'i', 'o', 'u']
    S = S.map((v, i) => {
        let str = ''
        if (a.includes(v[0].toLowerCase())) {
            str = v + 'ma'
        } else {
            let q = v[0]
            let p = v.slice(1)
            str = p + q + 'ma'
        }
        return str + 'a'.repeat(i+1)
    })
    return S.join(' ')
};
// @lc code=end

console.log(toGoatLatin('I speak Goat Latin'))