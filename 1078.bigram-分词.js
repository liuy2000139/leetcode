/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    text = text.split(' ')
    let res = []
    for (let i=0;i<text.length-2;i++) {
        if (text[i] === first && text[i+1] === second) {
            if (!text[i+2]) {
                continue
            } else {
                res.push(text[i+2])
            }
        }
    }
    return res
};
// @lc code=end

console.log(findOcurrences("alice is a good girl she is a good student", 'a', 'good'))