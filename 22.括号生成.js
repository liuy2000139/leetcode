/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    let deal = (str = "", l = 0, r = 0) => {
        if (l <= n && r <= n) {
            if (l === n && r === n) {
                res.push(str)
            } else if (l >= r) {
                deal(str + ")", l, r + 1)
                deal(str + "(", l + 1, r)
            }
        }
        
    }
    deal()
    return res
};
// @lc code=end

// console.log(JSON.stringify(generateParenthesis(7)))
