/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let plate = licensePlate.toLowerCase().match(/[a-z]/g)
    let res = ''
    words.forEach(v => {
        let arr = v.split('')
        if (plate.every(t => {
            if (arr.includes(t)) {
                arr.splice(arr.indexOf(t), 1)
                return true
            } return false
        })) {
            if (res === '') {
                res = v
            } else if (res.length > v.length) {
                res = v
            }
        }
    })
    return res
};
// @lc code=end
