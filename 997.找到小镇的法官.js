/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if (trust.length === 0) return N === 1 ? 1 : -1
    let res = {}
    for (let t of trust.map(v => v[1])) {
        res[t] = res[t] ? res[t]+1 : 1
    }
    res = Object.entries(res)
    res.sort((a,b) => b[1]-a[1])
    console.log(res)
    while(res.length && res[0][1] === N-1) {
        let current = res.shift()
        let ele = trust.find(v => v[0] === parseInt(current[0]))
        if (!ele) return current[0]
    }
    return -1
};
// @lc code=end

console.log(findJudge(2, [[1,3],[2,3],[3,1]]))