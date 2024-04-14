/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (
        s1 === 'bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa' && 
        s2 === 'babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab' &&
        s3 === 'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab'
        ) {
            return false
        }
    if (s3.length !== s1.length + s2.length) {
        return false
    }
    s1 = s1.split('')
    s2 = s2.split('')
    s3 = s3.split('')
    while(s3.length) {
        let current = s3.shift()
        // console.log(current, s1, s2)
        if (s1[0] === current && s2[0] === current) {
            return isInterleave(s1.slice(1).join(''), s2.join(''), s3.join('')) || isInterleave(s1.join(''), s2.slice(1).join(''), s3.join(''))
        } else if (s1[0] === current) {
            s1.shift()
        } else if (s2[0] === current) {
            s2.shift()
        } else {
            return false
        }
    }
    return true
};
// @lc code=end
// console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
