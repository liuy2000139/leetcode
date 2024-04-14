/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let q = p.split('')
    let res = []
    let len = p.length
    let len2 = new Set(p).size
    for (let i=0;i<=s.length-len;i++) {
        let str = s.slice(i, i+ len)
        if (new Set(str).size !== len2) {
            continue
        }
        let set = new Set([...q, ...str.split('')])
        if (set.size === len) {
            res.push(i)
        }
    }
    return res
};
// @lc code=end
