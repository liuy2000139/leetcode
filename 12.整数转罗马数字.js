/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = ''
    let a = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let b = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    for (let i=0;i<13;i++) {
        while(num >= a[i]) {
            res += b[i]
            num -= a[i]
        }
    }
    return res
};
// @lc code=end

// console.log(intToRoman(1994))