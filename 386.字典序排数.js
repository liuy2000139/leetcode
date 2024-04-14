/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let obj = {}
    for (let i=1;i<=n;i++) {
        obj[i] = 1
    }
    return Object.keys(obj).sort()
};
// @lc code=end

// console.log(lexicalOrder(13))