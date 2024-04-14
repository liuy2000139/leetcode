/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    // if (words.join(' ') === 'hello leetcode' && order === 'hlabcdefgijkmnopqrstuvwxyz') {
    //     return true
    // }
    let flag = true
    for (let i=1;i<words.length;i++) {
        for (let j=0;j<Math.max(words[i].length, words[i-1].length);j++) {
            if (!words[i][j] && words[i-1][j]) {
                flag = false
                break
            }
            if (words[i][j] !== words[i-1][j]) {
                if (order.indexOf(words[i][j]) < order.indexOf(words[i-1][j])) {
                    flag = false
                    break
                } else {
                    break
                }
            }
            
        }
    }
    return flag
};
// @lc code=end

// console.log(isAlienSorted(["kuvp","q"], 'ngxlkthsjuoqcpavbfdermiywz'))