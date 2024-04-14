/*
 * @lc app=leetcode.cn id=1646 lang=javascript
 *
 * [1646] 获取生成数组中的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let res = [0,1]
    for (let i=1;i<=Math.floor(n/2);i++) {
        res[2*i] = res[i]
        res[2*i+1] = res[i] + res[i+1]
    }
    return res.slice(0, n+1).sort((a,b) => b-a)[0]
    // return res.slice(0, n+1)
};
// @lc code=end
// console.log(getMaximumGenerated(2))
