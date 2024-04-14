/*
 * @lc app=leetcode.cn id=1399 lang=javascript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let res = {}
    for (let i=1;i<=n;i++) {
        let sum = i.toString().split('').map(v => parseInt(v)).reduce((a,b) => a+b, 0)
        if (res[sum]) {
            res[sum].push(i)
        } else {
            res[sum] = [i]
        }
    }
    let arr = Object.entries(res).sort((a,b) => b[1].length - a[1].length)
    let len = arr[0][1].length
    return arr.filter(v => v[1].length === len).length
};
// @lc code=end
console.log(countLargestGroup(2))
