/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */



// @lc code=start

let temp = {}
const isValid = (s) => {
    if (temp[s] !== undefined) return temp[s]
    if (s[0] === ")") return false
    if (s[s.length - 1] === "(") return false
    let stack = []
    for (let i of s) {
        if (i === "(") {
            stack.unshift("(")
        } else {
            if (stack[0] === "(") {
                stack.shift()
            } else {
                stack.unshift(")")
            }
        }
    }
    temp[s] = stack.length === 0
    return stack.length === 0
}

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // if (s.length <= 1) return 0

    // if (isValid(s)) {
    //     // console.log(s.length, s)
    //     return s.length
    // }

    // return Math.max(longestValidParentheses(s.slice(1)), longestValidParentheses(s.slice(0, -1)))
    let mark = []
    let stack = []
    for (let i = 0; i < s.length; i++) {
        mark[i] = 0
    }
    for (let i = 0;i<s.length;i++) {
        if (s[i] === "(") {
            stack.push(i)
        } else {
            if (stack.length === 0) {
                mark[i] = 1
            } else {
                stack.pop()
            }
        }
    }
    while(stack.length) {
        mark[stack.pop()] = 1
    }
    let res = 0, len = 0
    for (let i=0;i<s.length;i++) {
        if (mark[i]) {
            len = 0
            continue
        }
        len++
        res = Math.max(res, len)
    }
    return res
};
// @lc code=end


