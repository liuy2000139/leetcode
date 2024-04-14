/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = []
    for (let i=0;i<nums1.length;i++) {
        let idx = nums2.indexOf(nums1[i])
        let flag = true
        for (let j = idx;j<nums2.length && flag;j++) {
            if (nums2[j] > nums1[i]) {
                res.push(nums2[j])
                flag = false
            }
            if (j === nums2.length-1 && flag) {
                res.push(-1)
            }
        }
    }
    return res
};
// @lc code=end

