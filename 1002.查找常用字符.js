/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    A = A.map(v => v.split(''))
    let rest = A.slice(1)
    let ele = A[0]
    let res = []
    for (let i=0;i<ele.length;i++) {
        if (rest.every(v => v.indexOf(ele[i]) > -1)) {
            res.push(ele[i])
            rest.forEach(v => {
                v.splice(v.indexOf(ele[i]), 1)
            })
        }
    }
    return res
};
// @lc code=end
console.log(commonChars(["acabcddd","bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccd"]
))
