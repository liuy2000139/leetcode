/*
 * @lc app=leetcode.cn id=1170 lang=javascript
 *
 * [1170] 比较字符串最小字母出现频次
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var f = str => {
    let arr = str.split('').sort((a,b) => {
        if (a>b) return 1
        else return -1
    })
    return arr.filter(v => v === arr[0]).length
}
var numSmallerByFrequency = function(queries, words) {
    words = words.map(v => f(v))
    return queries.map(v => {
        return words.filter(t => t > f(v)).length
    })
};
// @lc code=end

// console.log(numSmallerByFrequency(["bba","abaaaaaa","aaaaaa","bbabbabaab","aba","aa","baab","bbbbbb","aab","bbabbaabb"], ["aaabbb","aab","babbab","babbbb","b","bbbbbbbbab","a","bbbbbbbbbb","baaabbaab","aa"]))