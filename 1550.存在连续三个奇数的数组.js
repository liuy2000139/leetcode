/*
 * @lc app=leetcode.cn id=1550 lang=javascript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let res = false
    for (let i=0;i<arr.length;i++) {
        if (arr[i] % 2 === 1 && !res) {
            if (arr[i+1]%2===1 && arr[i+2]%2===1) {
                res = true
            }
        }
    }
    return res
};
// @lc code=end

