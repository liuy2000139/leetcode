/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let arr = [...new Array(26)].map((v,i) => String.fromCharCode(97+i))
    s = s.split('')
    for (let i=0;i<s.length;i++) {
        if (s[i] === '?') {
            let v = arr.find(v => v !== s[i-1] && v !== s[i+1])
            s[i] = v
        }
    }
    return s.join('')
};
// @lc code=end

console.log(modifyString('?zs'))