/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const arr = ['', '', 'abc','def', 'ghi','jkl','mno', 'pqrs', 'tuv', 'wxyz']

var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    let strs = []
    for (let i of digits) {
        strs.push(arr[+i])
    }
    return strs.reduce((prev, current) => {
        return current.split("").map((v) => prev.map(t => t + v)).flat(1)
    }, [""])
}
// @lc code=end

// console.log(letterCombinations("23"))