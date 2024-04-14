/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // let arr = [...nums1, ...nums2].sort((a,b) => a-b)
    let arr = []
    let l = 0,r = 0
    for (let i = 0;i<nums1.length + nums2.length && l < nums1.length && r < nums2.length;i++) {
        if (nums1[l] < nums2[r]) {
            arr.push(nums1[l])
            l++
        } else {
            arr.push(nums2[r])
            r++
        }
    }
    arr = arr.concat(nums1.slice(l)).concat(nums2.slice(r))
    // console.log(arr)
    let len = arr.length
    if (len%2 === 1) return arr[(len-1)/2]
    else return (arr[len/2-1] + arr[len/2])/2
};
// @lc code=end

// console.log(findMedianSortedArrays([0,0],[0,0]))