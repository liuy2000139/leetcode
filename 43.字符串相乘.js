/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    let arr = []
    for (let i=num2.length-1;i>=0;i--) {
        for (let j=num1.length-1;j>=0;j--) {
            arr.push((num1[j]*num2[i]).toString() + '0'.repeat((num2.length-1-i+num1.length-1-j-0)))
        }
    }
    arr.sort((a,b) => b.length - a.length)
    let len = arr[0].length
    arr = arr.map(v => v.padStart(len, '0'))
    let rest = 0
    let res = []
    console.log(len, arr)
    for (let i=len-1;i>=0;i--) {
        let sum = arr.map(v => parseInt(v[i])).reduce((a,b) => a+b,0) + rest
        res.unshift(sum%10)
        rest = Math.floor(sum/10)
    }
    return rest ? rest.toString() + res.join('') : res.join('')
};
// @lc code=end

// console.log(multiply('123', '456'))