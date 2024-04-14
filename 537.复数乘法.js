/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    let arr1 = num1.split('+'), arr2 = num2.split('+')
    // console.log(arr1, arr2)
    arr1[1] = arr1[1].slice(0, arr1[1].length-1)
    arr2[1] = arr2[1].slice(0, arr2[1].length-1)
    // console.log(arr1, arr2)
    let a = arr1[0] * arr2[0]
    let b = 0 - arr1[1] * arr2[1]
    let c = arr1[0]*arr2[1] + arr1[1]*arr2[0]
    
    return (a+b ? (a+b).toString() : '0') + '+' + c + 'i'
};
// @lc code=end

// console.log(complexNumberMultiply("1+-1i", "1+-1i"))