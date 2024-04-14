/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let k = 0
    let base = word
    while(sequence.indexOf(base) > -1) {
        k++
        base = word.repeat(k+1)
    }
    return k
};
// @lc code=end

