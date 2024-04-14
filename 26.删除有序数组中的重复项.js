/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // if (nums.length < 2) return nums.length
    // for (let i = 1 ; i< nums.length;) {
    //     if (nums[i] === nums[i-1]) {
    //         nums.splice(i, 1)
    //     } else {
    //         i++
    //     }
    // }
    // return nums.length
    let p=0,q=1
    while(q < nums.length) {
        if (nums[q] === nums[p]) {
            q++
        } else {
            nums[p+1] = nums[q]
            p++
            q++
        }
    }
    return p+1
};
// @lc code=end
