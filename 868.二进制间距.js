/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    if (n <=2) return 0
    n = n.toString(2)
    if (n.indexOf('1') === n.split('').lastIndexOf('1')) return 0
    let arr = n.match(/(0+)|(1+)/g)
    while(arr[0].indexOf('0') !== -1) {
        arr.shift()
    }
    while(arr[arr.length-1].indexOf('0') !== -1) {
        arr.pop()
    }
    arr = arr.filter(v => v.indexOf('0') > -1).sort((a,b) => b.length-a.length)
    return arr.length ? arr[0].length+1 : 1
};
// @lc code=end

// console.log(binaryGap(6))