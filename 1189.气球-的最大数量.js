/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let obj = {}
    let base = 'balloon'
    for (let s of text) {
        if (base.indexOf(s) > -1) {
            obj[s] = obj[s] ? obj[s]+1 : 1
        }
    }
    let count = 0
    while(['b','a','n'].every(v => obj[v] >= 1) && ['l','o'].every(v => obj[v] >= 2)) {
        count++;
        ['b','a','n'].map(v => obj[v]--);
        ['l','o'].map(v => obj[v] -= 2)
    }
    return count
};
// @lc code=end

console.log(maxNumberOfBalloons('nlaebolko'))