/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = []
    for (let i=0;i<nums1.length;i++) {
        let index = nums2.indexOf(nums1[i])
        if (index > -1) {
            res.push(nums1[i])
            nums1.splice(i, 1)
            nums2.splice(index, 1)
            i--
        }
    }
    return res
};
// @lc code=end

