/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 const map = {
    "[": "]",
    "]":"[",
    "(": ")",
    ")":"(",
    "{":"}",
    "}":"{"
}
var isValid = function(s) {
    let stack = []
    for (let str of s) {
        if (["{","[","("].includes(str)) {
            stack.unshift(str)
        } else {
            if (map[str] !== stack[0]) {
                return false
            } else {
                stack.shift()
            }
        }
        
    }
    return stack.length === 0
};
// @lc code=end
// console.log(isValid("()[]{}["))
