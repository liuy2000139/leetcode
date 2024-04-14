/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let base = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    words = words.map(v => {
        return v.split('').map(t => {
            return base[t.charCodeAt()-97]
        }).join('')
    })
    return [...new Set(words)].length
};
// @lc code=end

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))