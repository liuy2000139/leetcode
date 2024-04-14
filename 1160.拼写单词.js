/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let res = []
    let obj = {}
    for (let s of chars) {
        obj[s] = obj[s] ? obj[s] + 1 : 1
    }

    words.forEach(v => {
        let o = {}
        for (let s of v) {
            o[s] = o[s] ? o[s] + 1 : 1
        }
        if (Object.entries(o).every(t => obj[t[0]] && obj[t[0]] >= t[1])) {
            res.push(v)
        }
    })

    return res.map(v => v.length).reduce((a,b) => a+b,0)
};
// @lc code=end

// console.log(countCharacters(["cat","bt","hat","tree"], 'atach'))