/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []

    let deal = (arr, num) => {
        if (arr.length === k-1) {
            res.push([...arr, num])
            return false
        }
        for (let i=num+1;i<=n;i++) {
            deal([...arr, num], i)
        }
    }
    for (let i=1;i<=n-k+1;i++) {
        deal([], i)
    }
    return res
};
// @lc code=end

// console.log(combine(4,2))