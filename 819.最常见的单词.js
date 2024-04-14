/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let arr = paragraph.toLocaleLowerCase().replace(/\W/g, ' ').split(' ').filter(v => v !== '' && !banned.includes(v))
    let res = {}
    for (i of arr) {
        res[i] = res[i] ? res[i]+1 : 1
    }
    return Object.entries(res).sort((a,b) => b[1]-a[1])[0][0]
};
// @lc code=end

console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]))