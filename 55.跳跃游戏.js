/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // if (nums.filter(v=> !!v).length === 0) return true
    // if (nums[0] === 0) return false
    // if (nums.length === 1) return true
    // let i=nums.length-2
    // for (;i>=1;i--) {
    //     if (nums[i] !== 0) {
    //         continue
    //     } else {
    //         if (nums.slice(0, i).find((v,j) => v-(i-j) >0)) {
    //             continue
    //         } else {
    //             return false
    //         }
    //     }
    // }
    // return i === 0
    const len = nums.length

    let max = 0
    for (let i=0;i<len-1;i++) {
        max = Math.max(max, i + nums[i])
        if (max <= i) return false
    }
    return max >= len - 1


};
// @lc code=end
