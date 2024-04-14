/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const a = [...nums].sort((a,b) => a-b)
    let i=0,j=nums.length-1
    if (a.join('') === nums.join('')) return 0
    for (let z=0;z<nums.length && z===i;z++){
        if (nums[z]===a[i]) {
            i++
        }
    }
    for (let z=nums.length-1;z>0 && z===j;z--){
        if (nums[z]===a[j]) {
            j--
        }
    }
    return j-i+1
};
// @lc code=end
