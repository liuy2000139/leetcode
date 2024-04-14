/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let obj = {}    
    for(let i of nums1) {
        for (let j of nums2) {
           if (obj[i+j]) {
               obj[i+j].push([i,j])
           } else {
               obj[i+j] = [[i,j]]
           }
        }    
    }
    return Object.entries(obj).sort((a,b) => a[0]-b[0]).map(v => v[1]).flat(1).slice(0, k)
};
// @lc code=end

// console.log(kSmallestPairs([-10,-4,0,0,6], [3,5,6,7,8,100],10))