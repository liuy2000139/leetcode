/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let res = []
    for (let i=0;i<words.length;i++) {
        let arr = [...words]
        arr.splice(i, 1)
        if (arr.find(v => v.indexOf(words[i]) > -1)) {
            res.push(words[i])
        }
    }
    return res
};
// @lc code=end
console.log(stringMatching(["mass","as","hero","superhero"]))
