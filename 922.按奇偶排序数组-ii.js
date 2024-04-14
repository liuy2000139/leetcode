/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let a = A.filter(v => v%2 === 0)
    let b = A.filter(v => v%2 !== 0)
    let res = []
    // console.log({a,b})
    while(a.length || b.length) {
        res.push(a.shift())
        res.push(b.shift())
    }
    return res
};
// @lc code=end

// console.log(sortArrayByParityII([3,4]))