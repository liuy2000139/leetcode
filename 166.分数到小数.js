/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let res = '', hash = {}
    res = Math.floor(numerator/denominator) + '.'
    let rest = numerator% denominator
    if (rest === 0) {
        return parseInt(res).toString()
    } else {
        numerator = rest
        while(!hash[numerator]) {
            console.log(numerator, denominator)
            let len = 1
            while(numerator < denominator) {
                numerator *= 10
                len++
            }
            hash[numerator/10] = Math.floor(numerator/denominator)
            res += Math.floor(numerator/denominator)
            numerator = numerator%denominator
        }
        return res += `(${hash[numerator]})`
    }
    
}

// @lc code=end

console.log(fractionToDecimal(1,4))