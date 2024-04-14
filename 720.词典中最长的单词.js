/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    if (words.length === 1) return true
    words.sort((a,b) => a.length-b.length)
    let res = ''
    let arr = []
    for (let s of words) {
        //如果单词只有一个字母，那一定是共有的
        
        if (s.length === 1 || arr.includes(s.slice(0,-1))) {
            if (res.length < s.length) {
                res = s
            } else {
                res = res > s ? s : res
            }
            arr.push(s)
        }
    }
    return res
};
// @lc code=end

console.log(longestWord(["t","ti","tig","tige","tiger","e","en","eng","engl","engli","englis","english","h","hi","his","hist","histo","histor","history"]))