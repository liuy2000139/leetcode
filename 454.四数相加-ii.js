/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let len = nums4.length
    let a = {}, res = 0
    for (i of nums1) {
        for (let j of nums2) {
            a[i+j] = a[i+j] ? (a[i+j] + 1) : 1
        }
    }
    for (i of nums3) {
        for (let j of nums4) {
            let sum = 0-i-j
            if (a[sum]) {
                res += a[sum]
            }
        }
    }
    return res
};
// @lc code=end

