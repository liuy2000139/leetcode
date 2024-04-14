/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let a = S.split(''), b = T.split('')
    let s = '', t = ''
    while(a.length || b.length) {
        let i = a.shift(), j = b.shift()
        if (i !== '#') {
            s = i ? s + i : s
        } else {
            s = s && s.slice(0, -1)
        }
        if (j !== '#') {
            t = j ? t + j : t
        } else {
            t = t && t.slice(0, -1)
        }
    }

    return s === t
};
// @lc code=end

console.log(backspaceCompare('xywrrmp', 'xywrrmc#p'))