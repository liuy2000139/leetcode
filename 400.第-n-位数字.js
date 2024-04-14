
/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    // let res = ''
    // let base = 1
    // while(res.length < n) {
    //     res = res + (base++).toString()
    // }
    // return res[n-1]
    // let res = ''
    // let base = 1
    // while(res.length + base.toString().length < n) {
    //     res += base.toString()
    //     base++
    // }
    // return base.toString()[n-res.length-1]
    if (n < 10) return n
    let length = 0, count = 9, i = 1
    while(length + count * i < n) {
        length += count * i
        count *= 10
        i++
    }
    let num = Math.pow(10, i-1) + Math.floor((n - length - 1) / i)
    let index = (n-length-1)%i
    return num.toString()[index]
};
// @lc code=end
// console.log(findNthDigit(1000000000))
// console.log(findNthDigit(11))