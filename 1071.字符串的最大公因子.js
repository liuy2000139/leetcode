/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ''
    if (str1.length === str2.length) return str1
    if (str1.length < str2.length) {
        [str1, str2] = [str2, str1]
    }
    return gcdOfStrings(str2, str1.slice(str2.length))
    
};
// @lc code=end

// console.log(gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'))