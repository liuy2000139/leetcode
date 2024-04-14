/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    let res = ''

    let i = num1.length - 1,
        j = num2.length - 1,
        t = 0 
    while(i >= 0 || j >= 0 || t !== 0) {
        const sum = +(num1[i] || 0) + +(num2[j] || 0) + t
        t = sum >= 10 ? 1 : 0
        const x = sum % 10
        res = x + res
        i = i >= 0 ? i - 1 : -1
        j = j >= 0 ? j - 1 : -1
    }
    

    return res
};
// @lc code=end

