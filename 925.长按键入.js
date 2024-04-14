/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let a = name.match(/(.)\1{0,}/g)
    let b = typed.match(/(.)\1{0,}/g)
    let flag = true
    // console.log({a,b})
    if (a.length !== b.length) return false
    for (let i=0;i<a.length;i++) {
        if (!b[i] || b[i].indexOf(a[i]) === -1) {
            flag = false
            break
        }
    }
    return  flag
};
// @lc code=end

// console.log(isLongPressedName('a', 'b'))