/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let res = {}
    let arr = []
    while(s.length >= 10) {
        let str = s.slice(0, 10)
        if (res[str] === 1) {
            arr.push(str)
        }
        res[str] = res[str] ? res[str] + 1 : 1
        s = s.slice(1)
    }
    // console.log(res)
    return arr
};
// @lc code=end

// console.log(findRepeatedDnaSequences('AAAAAAAAAAA'))