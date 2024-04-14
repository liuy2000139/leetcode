/*
 * @lc app=leetcode.cn id=423 lang=javascript
 *
 * [423] 从英文中重建数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    let res = {}
    let obj = s.split('').reduce((a,b) => {
        a[b] = a[b] ? (a[b] + 1) : 1
        return a
     }, {})
    res['0'] = obj.z || 0
    res['2'] = obj.w || 0
    res['6'] = obj.x || 0
    res['8'] = obj.g || 0
    res['4'] = obj.u || 0
    res['5'] = (obj.f || 0) - res['4']
    res['3'] = (obj.h || 0) - res['8']
    res['7'] = (obj.v || 0) - res['5']
    res['9'] = (obj.i || 0) - res['5'] - res['6'] - res['8']
    res['1'] = (obj.o || 0) - res['0'] - res['2'] - res['4']
    let arr = Object.entries(res).filter(v => v[1] > 0)
    return arr.reduce((a,b) => {
        return a + b[0].repeat(b[1])
    }, '')
};
// @lc code=end

// console.log(originalDigits('fviefurofviefuro'))