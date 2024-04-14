/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = []
    let last = target[target.length-1]
    for (let i=1;i<=last;i++) {
        res.push('Push')
        if (!target.includes(i)) {
            res.push('Pop')
        } 
    }
    // let last = target[target.length-1]
    // while(n>last) {
    //     res.push('Push')
    //     res.push('Pop')
    //     last++
    // }
    return res
};
// @lc code=end

console.log(buildArray([1,2],4))