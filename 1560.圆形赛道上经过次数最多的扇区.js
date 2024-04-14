/*
 * @lc app=leetcode.cn id=1560 lang=javascript
 *
 * [1560] 圆形赛道上经过次数最多的扇区
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    let start = rounds[0]
    let end = rounds[rounds.length-1]
    let res = []
    if (start <= end) {
        for (let i=start;i<=end;i++) res.push(i)
    } else {
        for (let i=start;i<=n;i++) res.push(i)
        for (let i=1;i<=end;i++) res.push(i)
    }
    return res.sort((a,b) => a-b)
};
// @lc code=end
console.log(mostVisited(2, [2,1,2,1,2,1,2,1,2]))
