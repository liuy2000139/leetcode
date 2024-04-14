/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    let res = 0
    for (let i=0;i<s.length && g.length;i++) {
        let index = g.findIndex(v => v <= s[i])
        if (index > -1) {
            res++
            g.splice(index, 1)
        }
    }
    return res
};
// @lc code=end

