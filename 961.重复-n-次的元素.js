/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let n = A.length/2
    let arr = [...new Set(A)]
    let item = null
    for (let i=0;i<arr.length;i++) {
        if (A.filter(v => v === arr[i]).length === n) {
            item = arr[i]
            break
        }
    }
    return item
};
// @lc code=end

// console.log(repeatedNTimes([12,62,62,30,62,96,97,62,62,6,73,62,62,5,62,8,64,62,18,62]))