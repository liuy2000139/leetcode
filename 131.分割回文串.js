/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(str) {
    let res = []
    const fn = (s, pre = []) => {
        for (let i=1;i<=s.length;i++) {
            let flag = true
            let base = 0
            while(base <= i/2) {
                if (s[base] !== s[i-base-1]) {
                    flag = false
                    break
                }
                base++
            }
            if (flag) {
                if (i === s.length) {
                    res.push([...pre, s.slice(0)])
                } else {
                    fn(s.slice(i), [...pre, s.slice(0,i)])
                }
            }
        }
    }
    fn(str)
    return res
    // return res
};
// @lc code=end

// console.log(partition('a'))