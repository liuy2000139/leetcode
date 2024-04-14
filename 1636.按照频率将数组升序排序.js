/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let res = {}
    for(let t of nums) {
        res[t] = res[t] ? res[t]+1 : 1
    }

    let arr = Object.entries(res).sort((a,b) => {
        if (a[1] > b[1]) {
            return 1
        } else if (a[1] < b[1]) {
            return -1
        } else {
            return b[0] - a[0]
        }
    })
    let fin = []
    for (let t of arr) {
        while(t[1]) {
            fin.push(t[0])
            t[1]--
        }
    }
    return fin
};
// @lc code=end

console.log(frequencySort([1,1,2,2,2,3,3]));