/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const valid = (s, words) => {
    const current = [...words]
    const len = current[0].length
    while(s.length && current.length) {
        const idx = current.indexOf(s.slice(0, len))
        if (idx === -1) {
            break
        } else {
            s = s.slice(len)
            current.splice(idx, 1)
        }
    }

    return !s.length && !current.length

}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const length = words.length * words[0].length
    let res = []
    for (let i=0;i<s.length - length + 1;i++) {
        if (valid(s.slice(i, i+length), words)) {
            res.push(i)
        }
    }
    return res
};
// @lc code=end

// console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]))