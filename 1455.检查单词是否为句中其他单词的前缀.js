/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(' ')
    let index = sentence.findIndex(v => v.indexOf(searchWord) === 0)
    return index > -1 ? index + 1 : -1
};
// @lc code=end

console.log(isPrefixOfWord("hellohello hellohellohello", 'ell'))