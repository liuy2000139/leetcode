/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let d = s.match(/[0-9]/g) || []
    let w = s.match(/[a-z]/g) || []
    if (s.length < 3 && (d.length === 1 || w.length === 1)) return s
    if (Math.abs(d.length - w.length) > 1) return ''
    let res = ''
        while(d.length && w.length) {
            let a = d.shift()
            let b = w.shift()
            res += a+b
        }
        if (d.length) res += d[0]
        if (w.length) res = w[0] + res
        return res
};
// @lc code=end
console.log(reformat('a0b1c2'))
