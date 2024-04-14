/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let arr = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]
    let res = []
    for(let i=0;i<words.length;i++) {
        arr.forEach(v => {
            if (words[i].split('').every(t => v.indexOf(t.toLocaleLowerCase()) > -1)) {
                res.push(words[i])
            }
        })
    }
    return res
};
// @lc code=end

