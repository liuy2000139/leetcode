/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length <2) return true
    arr.sort((a,b) => a-b)
    let minus = arr[0]-arr[1]
    let a = [...new Array(arr.length)].map((v,i) => {
        return arr[0] - i*minus
    })
    return arr.toString() === a.toString()
};
// @lc code=end
console.log(canMakeArithmeticProgression([3,5,1]))
