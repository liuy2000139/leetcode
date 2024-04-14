/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let res = {}
    for (let i=0;i<s.length;i++) {
        if (res[s[i]]) {
            if (res[s[i]] !== t[i]) {
                return false
            }
        } else if(Object.values(res).includes(t[i])) {
            return false
        } else {
            res[s[i]] = t[i]
        }
    }
    return true
};
// @lc code=end

