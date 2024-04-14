/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let num = 0
    for (let i=1;k>0;i++) {
        if (!arr.includes(i)) {
            num = i
            k--
        }
    }
    return num
};
// @lc code=end
console.log(findKthPositive([2,3,4,7,11], 5))
