/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let sum = 1
    if (chars.length === 1) {
        return chars.length
    }
    for (let i=1;i<chars.length+1;i++) {
        if (chars[i] === chars[i-1]) {
            sum++
        } else {
            if (sum > 1) {
                chars.splice(i - (sum-1),sum-1, ...sum.toString().split(''))
                i = i - (sum-2)
                sum = 1
            }
        }
    }
    return chars.length
};

// @lc code=end
