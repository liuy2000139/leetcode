/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let str = nums.sort((a,b) => a-b).join('-') + '-'
    let arr = str.match(/(\d+-)\1/g)[0].split('-')
    return arr[0]
    // for (let i=0;i<nums.length;i++) {
    //     if (nums.lastIndexOf(nums[i]) !== i) {
    //         return nums[i]
    //     }
    // }
};
// @lc code=end
