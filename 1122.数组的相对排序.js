/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let l = arr1.filter(v => arr2.includes(v))
    let r = arr1.filter(v => !arr2.includes(v))

    return [
        ...l.sort((a,b) => arr2.indexOf(a) - arr2.indexOf(b)),
        ...r.sort((a,b) => a-b)
    ]
};
// @lc code=end

// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))